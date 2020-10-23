import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Modal } from "react-bootstrap"

import { Content, Form } from "../components"
import { ROUTES, COLLECTIONS, MISC } from "../constants"
import { FirebaseContext } from "../context"

export default function Sign({ children }) {
    const { firebase, db } = useContext(FirebaseContext)
    const history = useHistory()
    //SHOW MODAL
    const [show, setShow] = useState(false)

    const [switchSign, setSwitchSign] = useState(false)
    //SIGN UP STATES
    const [signUpData, setSignUpData] = useState({
        email: "",
        password: "",
        rpassword: ""
    })
    const [signUpError, setSignUpError] = useState("")

    //SIGN IN STATES
    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    })
    const [signInError, setSignInError] = useState("")

    //RESET ERRORS 
    useEffect(() => {
        signUpError &&
            setTimeout(() => setSignUpError(""), MISC.HIDETIME)
        signInError &&
            setTimeout(() => setSignInError(""), MISC.HIDETIME)
    }, [signUpError, signInError])

    const manageSignUpField = e => {
        const { target } = e
        setSignUpData(prev => ({ ...prev, [target.name]: target.value }))
    }
    const manageSignInField = e => {
        const { target } = e
        setSignInData(prev => ({ ...prev, [target.name]: target.value }))
    }
    const manageSubmitSignUp = e => {
        e.preventDefault()
        if (signUpData.password !== signUpData.rpassword) {
            setSignUpError("Le password non corrispondono")
        }
        else
            firebase
                .auth()
                .createUserWithEmailAndPassword(signUpData.email, signUpData.password)
                .then(cred => {
                    db()
                        .collection(COLLECTIONS.USERS)
                        .doc(cred.user.uid)
                        .set({
                            role: 0
                        })
                })
                .then(() => {
                    setSignUpData({
                        email: "",
                        password: "",
                        rpassword: ""
                    })
                    history.push(ROUTES.DASH)
                })
                .catch((e) => setSignUpError(e))
    }
    const manageSubmitSignIn = e => {
        e.preventDefault()
        firebase
            .auth()
            .signInWithEmailAndPassword(signInData.email, signInData.password)
            .then(() => {
                setSignInData({
                    email: "",
                    password: ""
                })
                history.push(ROUTES.DASH)
            })
            .catch(e => setSignInError("Errore nel login"))
    }
    return (
        <>
            <Content.Void onClick={() => setShow(true)}>
                {children}
            </Content.Void>
            <Modal show={show} onHide={() => setShow(false)}>
                <Content.CloseModal onClick={() => setShow(false)} />
                <Form>
                    {!switchSign ?
                        <Form.Base onSubmit={manageSubmitSignIn}>
                            {signInError && <Form.Alert alert hide>{signInError}</Form.Alert>}
                            <Form.Title>Accedi</Form.Title>
                            <Form.Field
                                onChange={manageSignInField}
                                name={"email"}
                                value={signInData.email}
                                title={"Email"}
                            />
                            <Form.Field
                                onChange={manageSignInField}
                                name={"password"}
                                value={signInData.password}
                                title={"password"}
                                type={"password"}
                            />
                            <Form.Button>Accedi</Form.Button>
                            <Form.SmallText onClick={() => setSwitchSign(true)}>Non hai un account? Registrati</Form.SmallText>
                        </Form.Base>
                        :
                        <Form.Base onSubmit={manageSubmitSignUp}>
                            {signUpError && <Form.Alert hide alert>{signUpError}</Form.Alert>}

                            <Form.Title>Registrati</Form.Title>
                            <Form.Field
                                onChange={manageSignUpField}
                                name={"email"}
                                value={signUpData.email}
                                title={"Email"}
                            />
                            <Form.Field
                                onChange={manageSignUpField}
                                name={"password"}
                                value={signUpData.password}
                                title={"Password"}
                                type={"password"}
                            />
                            <Form.Field
                                onChange={manageSignUpField}
                                name={"rpassword"}
                                value={signUpData.rpassword}
                                title={"Ripeti password"}
                                type={"password"}
                            />
                            <Form.Button>Registrati</Form.Button>
                            <Form.SmallText onClick={() => setSwitchSign(false)}>Hai già un account? Accedi</Form.SmallText>
                        </Form.Base>
                    }
                </Form>

            </Modal>
        </>
    )
}