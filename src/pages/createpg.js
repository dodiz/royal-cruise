import React, { useState, useEffect, useContext, useRef } from "react"

import { Page, Content, Form } from "../components"
import { Loading } from "../containers"
import { IMAGES, COLLECTIONS } from "../constants"
import { FirebaseContext, UserContext } from "../context"
import { useFirestore } from "../hooks"
import { pgInfo } from "../data"

export default function CreatePg() {
    const { addDocName, getDoc } = useFirestore()

    const { db } = useContext(FirebaseContext)
    const { user } = useContext(UserContext)

    const [loading, setLoading] = useState(true)
    const [allowCreate, setAllowCreate] = useState(false)
    const [suggestion, setSuggestion] = useState("")
    const [errorActor, setErrorActor] = useState(false)

    useEffect(() => {
        db()
            .collection(COLLECTIONS.TOAPPROVE)
            .doc(user.uid)
            .get()
            .then(async res => {
                !res.exists &&
                    await setAllowCreate(true)
                setLoading(false)
            })
            .catch()
    }, [])

    const checkActor = e => {
        const actor = e.target.value.toLowerCase().trim()
        actor &&
            getDoc(COLLECTIONS.ACTORS, actor)
                .then(res => res.exists ? setErrorActor(true) : setErrorActor(false))
    }

    const [pgData, setPgData] = useState({
        background: "",
        actor: ""
    })

    const [pgPersonal, setPgPersonal] = useState({})
    const [pgBody, setPgBody] = useState({})

    const managePgData = ({ target }) => {
        setPgData(prev => ({
            ...prev,
            [target.name]: target.value
        })
        )
    }
    const managePgPersonal = ({ target }) => {
        setPgPersonal(prev => ({
            ...prev,
            [target.name]: target.value
        })
        )
    }
    const managePgBody = ({ target }) => {
        setPgBody(prev => ({
            ...prev,
            [target.name]: target.value
        })
        )
    }
    const submitNewPg = e => {
        e.preventDefault()
        !errorActor &&
            addDocName(COLLECTIONS.TOAPPROVE, user.uid, {
                ...pgData,
                body: pgBody,
                personal: pgPersonal,
                skills: {},
                inventory: {},
                user: user.displayName,
                date: new Date(Date.now())
            })
                .then(() => setAllowCreate(false))
                .catch((e) => alert(e))
    }

    return (
        <>
            <Content.Background bg={IMAGES.WALLBG} isStatic={true} />
            <Content.Page>
                <Page.Suggestion setSuggestion={setSuggestion} suggestion={suggestion} />
                <Page>
                    <Page.Title>Creazione del personaggio</Page.Title>
                    {loading ?
                        <Loading />
                        :
                        allowCreate ?
                            <Form.Base onSubmit={submitNewPg}>
                                <Page.SplashDescription>
                                    Benvenuto marinaio, in questa sezione avrai la facoltà di creare il tuo personaggio.
                                    Compila i campi e se hai bisogno di aiuto, clicca sul tasto giallo per ulteriori informazioni.
                                </Page.SplashDescription>
                                <Page.SubTitle>Anagrafica</Page.SubTitle>
                                <Page.Fields>
                                    {
                                        pgInfo.personal.map((el, i) =>
                                            <Page.Field
                                                key={i}
                                                title={el.title}
                                                setSuggestion={setSuggestion}
                                                suggestion={""}
                                            >
                                                {el.type !== "radio" ?
                                                    <Form.Input
                                                        name={el.name}
                                                        value={pgPersonal[el.name]}
                                                        onChange={managePgPersonal}
                                                        type={el.type}
                                                        min={el.min}
                                                        max={el.max}
                                                    />
                                                    :
                                                    <Form.Flex>
                                                        {el.radio.map((r, key) =>
                                                            <Form.Radio
                                                                key={key}
                                                                name={el.name}
                                                                title={r.title}
                                                                value={r.value}
                                                                onChange={managePgPersonal}
                                                            />
                                                        )}
                                                    </Form.Flex>
                                                }
                                            </Page.Field>
                                        )
                                    }
                                    <Page.Field
                                        setSuggestion={setSuggestion}
                                        suggestion={"Inserire qui una breve storia del personaggio"}
                                        title={"Background"}
                                    >
                                        <Form.TextArea
                                            name={"background"}
                                            value={pgData.background}
                                            onChange={managePgData}
                                        />
                                    </Page.Field>
                                </Page.Fields>
                                <Page.SubTitle>Tratti somatici</Page.SubTitle>
                                <Page.Fields>
                                    {
                                        pgInfo.body.map((el, i) =>
                                            <Page.Field key={i} title={el.title}>
                                                <Form.Input
                                                    name={el.name}
                                                    value={pgBody[el.name]}
                                                    onChange={managePgBody}
                                                    type={el.type}
                                                    min={el.min}
                                                    max={el.max}
                                                />
                                            </Page.Field>
                                        )
                                    }
                                </Page.Fields>
                                <Page.SubTitle>Dati GDR</Page.SubTitle>
                                <Page.Fields>
                                    <Page.Field
                                        title={"Prestavolto"}
                                        setSuggestion={setSuggestion}
                                        suggestion={"Nome e cognome dell'attore da cui si prenderà in prestito il volto"}
                                    >
                                        <Form.Input
                                            onBlur={checkActor}
                                            name={"actor"}
                                            value={pgData.actor}
                                            onChange={managePgData}
                                        />
                                        {
                                            errorActor &&
                                            <Form.Error>Prestavolto occupato</Form.Error>
                                        }
                                    </Page.Field>
                                </Page.Fields>
                                <Page.SubTitle>Abilità</Page.SubTitle>
                                <Page.SubTitle>Inventario</Page.SubTitle>
                                <Form.Button>Invia la tua scheda</Form.Button>
                            </Form.Base>
                            :
                            <Page.SplashDescription>
                                Il tuo pg è in attesa di approvazione, nun ci scassà o' cazz e aspett
                </Page.SplashDescription>
                    }
                </Page>
            </Content.Page>
        </>
    )
}