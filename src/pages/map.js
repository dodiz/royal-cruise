import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"

import { Content, Page } from "../components"
import { MenuContainer, PgSliderContainer } from "../containers"
import { IMAGES, COLLECTIONS, ROUTES } from "../constants"
import { FirebaseContext } from "../context"
import { useFirestore } from "../hooks"

export default function Map() {

    const { db } = useContext(FirebaseContext)
    const [categories, setCategories] = useState([])
    const [chats, setChats] = useState([])

    useEffect(() => {
        db()
            .collection(COLLECTIONS.MAPS)
            .get()
            .then(res =>
                setCategories(() => res.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                )
            )
    }, [])

    const chooseCategory = id => {
        db()
            .collection(COLLECTIONS.CHATS)
            .where("category", "==", id)
            .get()
            .then(res =>
                setChats(() => res.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            )
    }

    return (
        <>
            <Content.Background bg={IMAGES.WALLBG} isStatic={true} />
            <Content flex>
                <Content.Page>
                    <Page>
                        {chats.length === 0 ?
                            <>
                                <Page.Title>Mappa</Page.Title>
                                <Page.Grid>
                                    {categories.map((el, i) =>
                                        <Page.GridItem onClick={() => chooseCategory(el.id)} key={i}>{el.name}</Page.GridItem>
                                    )}
                                </Page.Grid>
                            </>
                            :
                            <>
                                <Page.Title onClick={() => setChats([])} style={{ cursor: "pointer" }}>Torna alla mappa</Page.Title>
                                <Page.Grid>
                                    {chats.map((el, i) =>
                                        <Link key={i} to={`${ROUTES.LAND}/${el.id}`}><Page.GridItem key={i}>{el.name}</Page.GridItem></Link>
                                    )}
                                </Page.Grid>
                            </>
                        }
                    </Page>
                </Content.Page>
                <MenuContainer right icon={IMAGES.MENU_ICON}>
                    <PgSliderContainer />
                </MenuContainer>
            </Content>
        </>
    )
}