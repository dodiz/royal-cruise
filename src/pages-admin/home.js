import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { Page } from "../components"
import { ROUTES, COLLECTIONS } from "../constants"
import { useFirestore } from "../hooks"


export default function AdminHome() {

    const { getCollection } = useFirestore()
    const [pgCount, setPgCount] = useState(null)

    useEffect(() => {
        getCollection(COLLECTIONS.TOAPPROVE)
            .then(count => setPgCount(count.size))
    }, [])

    return (
        <>
            <Page.Title>Amministrazione</Page.Title>
            <Page.Grid>
                <Link to={ROUTES.ADMIN_APPROVE}>
                    <Page.GridItem>
                        Pg da approvare
                        {(pgCount !== 0 && pgCount !== null) && <Page.SmallAlert>{pgCount}</Page.SmallAlert>}
                    </Page.GridItem>
                </Link>
                <Link to={ROUTES.ADMIN_APPROVE}>
                    <Page.GridItem>
                        Modifica un pg
                    </Page.GridItem>
                </Link>
                <Link to={ROUTES.ADMIN_MAP}>
                    <Page.GridItem>
                        Gestisci Chat
                    </Page.GridItem>
                </Link>
                <Link to={ROUTES.ADMIN_APPROVE}>
                    <Page.GridItem>
                        Abilità
                    </Page.GridItem>
                </Link>
                <Link to={ROUTES.ADMIN_APPROVE}>
                    <Page.GridItem>
                        Negozio
                    </Page.GridItem>
                </Link>
            </Page.Grid>
        </>
    )
}