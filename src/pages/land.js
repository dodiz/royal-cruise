import React, { useContext, useEffect, useState, useRef } from "react"
import { useParams, useHistory } from "react-router-dom"

import { Land, Content, Form, Page } from "../components"
import { PgSliderContainer, MenuContainer, OnlineContainer } from "../containers"
import { IMAGES, COLLECTIONS, ROUTES } from "../constants"
import { PgContext, FirebaseContext, UserContext } from "../context"
import { useFirestore } from "../hooks"
import { formatTime } from "../utils"
import { HelpIcon, FacebookIcon } from "../svg"

export default function LandPage() {
    const chatRef = useRef(null)
    const { landId } = useParams()
    const history = useHistory()
    const { getDoc } = useFirestore()

    const { user } = useContext(UserContext)
    const { userPgs, currentPg } = useContext(PgContext)
    const { rdb } = useContext(FirebaseContext)

    const [currentChat, setCurrentChat] = useState({})
    const [messages, setMessages] = useState([])
    const [action, setAction] = useState("")

    const slides = [
        'https://i.ibb.co/xfL6cWF/download.png',
        'https://i.ibb.co/DDnzwPr/morgan.png',
        'https://i.ibb.co/R27wLrT/jesse.png',
        'https://i.ibb.co/xG77jJq/royal.png'
    ]

    useEffect(() => {
        getDoc(COLLECTIONS.CHATS, landId)
            .then(res => {
                !res.exists && history.push(ROUTES.MAP)

                setCurrentChat(res.data())

                rdb().ref(landId).on("value", async snapshot => {
                    await setMessages(() => {
                        const arr = []
                        snapshot.forEach((el, i) => {
                            arr.push(el.val())
                        })
                        return arr
                    })

                    chatRef.current.scrollTop = chatRef.current.scrollHeight;

                    rdb()
                        .ref(COLLECTIONS.ONLINE)
                        .child(user.uid)
                        .update({
                            location: res.data().name,
                            path: `${ROUTES.LAND}/${landId}`
                        })
                })
            })
            .catch(e => alert(e))

        return () => rdb()
            .ref(COLLECTIONS.ONLINE)
            .child(user.uid)
            .update({
                location: null
            })
    }, [])

    const sendAction = e => {
        e.preventDefault()
        const date = Date.now()
        currentPg >= 0 &&
            rdb().ref(landId).push({
                name: userPgs[currentPg].personal.name,
                content: action,
                date,
                user: user.uid
            })
        setAction("")
    }

    return (
        <>
            <Content.Background bg={IMAGES.METALBG} isStatic={true} />
            <Content flex>
                <Content.Page>
                    <Land>
                        <Page.SmallTitle onClick={() => history.goBack()} style={{ padding: ".5em 0" }}>Torna indietro</Page.SmallTitle>
                        <Land.Title>{currentChat.name}</Land.Title>
                        <Land.Chat ref={chatRef}>
                            {messages.map((el, i) => {
                                const date = new Date(el.date)
                                return (
                                    <Land.Role key={i} reverse={el.user === user.uid}>
                                        <Land.RoleTop reverse={el.user === user.uid}>
                                            <Land.PgName>{el.name}</Land.PgName>
                                            <Land.Date>{formatTime(date)}</Land.Date>
                                        </Land.RoleTop>
                                        <Land.RoleContent reverse={el.user === user.uid}>
                                            <Land.Avatar reverse={el.user === user.uid} bg={slides[i % 4]} />
                                            <Land.RoleMessage>
                                                {el.content}
                                            </Land.RoleMessage>
                                        </Land.RoleContent>
                                    </Land.Role>
                                )
                            }
                            )}
                        </Land.Chat>
                        <Land.Action style={{ display: !currentPg || currentPg === 0 && "none" }}>
                            <Form.Base onSubmit={sendAction}>
                                <Land.ActionBox>
                                    <Land.ActionIconPopup Icon={HelpIcon}>
                                        TEST POPUP HELP
                                    </Land.ActionIconPopup>
                                    <Land.ActionInput
                                        placeholder={"Messaggio ..."}
                                        value={action}
                                        onChange={(e) => setAction(e.target.value)}
                                    />
                                    <Land.ActionIconPopup Icon={FacebookIcon}>
                                        TEST POPUP
                                    </Land.ActionIconPopup>
                                </Land.ActionBox>
                            </Form.Base>
                        </Land.Action>
                    </Land>
                </Content.Page>
                <MenuContainer right icon={IMAGES.MENU_ICON}>
                    <PgSliderContainer />
                    <OnlineContainer filter={landId} />
                </MenuContainer>
            </Content>
        </>
    )
}