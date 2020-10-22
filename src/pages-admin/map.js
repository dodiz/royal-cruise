import React, { useState, useEffect, useContext } from "react"

import { Page, Form } from "../components"
import { ConfirmPopup } from "../containers-popup"
import { COLLECTIONS } from "../constants"
import { FirebaseContext } from "../context"
import { useFirestore } from "../hooks"

export default function Map() {
    const { db, rdb } = useContext(FirebaseContext)
    const { addDoc, deleteDoc } = useFirestore()

    //CATEGORIES
    const [newCategory, setNewCategory] = useState("")
    const [categories, setCategories] = useState([])

    //CHATS
    const [currentCategory, setCurrentCategory] = useState(-1)
    const [newChat, setNewChat] = useState("")
    const [chats, setChats] = useState([])

    //DELETE ALL CHATS
    const deleteChats = id => {
        db()
            .collection(COLLECTIONS.CHATS)
            .where("category", "==", id)
            .get()
            .then(snap => {
                snap.docs.forEach(doc => deleteDoc(COLLECTIONS.CHATS, doc.id))
            })
    }
    //DELETE CATEGORY
    const deleteCategory = id => {
        setCurrentCategory(-1)
        deleteDoc(COLLECTIONS.MAPS, id)
        deleteChats(id)
    }

    useEffect(() => {
        const listener = db()
            .collection(COLLECTIONS.MAPS)
            .onSnapshot(snap => {
                setCategories(snap.docs)
            })
        return () => listener()
    }, [])

    useEffect(() => {
        currentCategory >= 0 &&
            db()
                .collection(COLLECTIONS.CHATS)
                .where("category", "==", categories[currentCategory].id)
                .onSnapshot(snap => {
                    setChats(snap.docs)
                })
    }, [currentCategory])

    return (
        <>
            <Page.Title>Modifica chat</Page.Title>
            <Page.SubTitle>Categorie</Page.SubTitle>
            {
                //MAPPING CATEGORIES
                categories.map((el, i) =>
                    <Page.Field key={i} title={el.data().name}>
                        <ConfirmPopup>
                            <Form.Button style={{ marginLeft: "1em" }} >
                                Modifica
                        </Form.Button>
                        </ConfirmPopup>
                        <ConfirmPopup cb={() => deleteCategory(el.id)}>
                            <Form.Button style={{ marginLeft: "1em" }} red>
                                Rimuovi
                        </Form.Button>
                        </ConfirmPopup>
                    </Page.Field>
                )
            }
            {/*ADD CATEGORY*/}
            <Page.Field >
                <Form.Base onSubmit={e => e.preventDefault()}>
                    <Form.Input
                        value={newCategory}
                        onChange={e => setNewCategory(e.target.value)}
                    />
                    <Form.Button
                        style={{ marginLeft: "1em" }}
                        onClick={() => { addDoc(COLLECTIONS.MAPS, { name: newCategory }); setNewCategory("") }}>
                        Aggiungi Categoria
                    </Form.Button>
                </Form.Base>
            </Page.Field>
            <Page.SubTitle>Chatroom</Page.SubTitle>
            <Page.Fields>
                <Page.Field title={"Seleziona una categoria"}>
                    <Form.Select value={currentCategory} defaultValue={-1} onChange={(e) => setCurrentCategory(e.target.value)}>
                        <Form.Option value={-1} disabled>Seleziona ...</Form.Option>
                        {
                            categories.map((el, i) =>
                                <Form.Option value={i} key={i}>{el.data().name}</Form.Option>
                            )
                        }
                    </Form.Select>
                </Page.Field>
                {
                    //MAPPING CHATS
                    currentCategory !== -1 &&
                    <>
                        {chats.map((el, i) =>
                            <Page.Field key={i} title={el.data().name}>
                                <ConfirmPopup cb={() => deleteDoc(COLLECTIONS.CHATS, el.id)}>
                                    <Form.Button style={{ marginLeft: "1em" }} red>
                                        Rimuovi
                                    </Form.Button>
                                </ConfirmPopup>
                            </Page.Field>
                        )
                        }
                        <Page.Field >
                            <Form.Base onSubmit={e => e.preventDefault()}>
                                <Form.Input
                                    value={newChat}
                                    onChange={e => setNewChat(e.target.value)}
                                />
                                <Form.Button
                                    style={{ marginLeft: "1em" }}
                                    onClick={() => { addDoc(COLLECTIONS.CHATS, { name: newChat, category: categories[currentCategory].id }); setNewChat("") }}
                                >
                                    Aggiungi Chat
                            </Form.Button>
                            </Form.Base>
                        </Page.Field>
                    </>
                }
            </Page.Fields>
        </>
    )
}