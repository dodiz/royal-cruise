import React from "react"
import { Switch, useHistory } from "react-router-dom"

import { Content, Page } from "../components"
import { ROUTES, IMAGES } from "../constants"
import { ApprovePg, Home, Map } from "../pages-admin"

import { AdminRoute } from "../utils/redirect"

export default function Admin() {

    const history = useHistory()

    return (
        <>
            <Content.Background bg={IMAGES.WALLBG} isStatic={true} />
            <Content.Page>
                <Page>
                    <Page.SmallTitle onClick={() => history.goBack()}>Torna indietro</Page.SmallTitle>
                    <Switch>
                        <AdminRoute exact path={ROUTES.ADMIN_APPROVE}>
                            <ApprovePg />
                        </AdminRoute>
                        <AdminRoute exact path={ROUTES.ADMIN_MAP}>
                            <Map />
                        </AdminRoute>
                        <AdminRoute exact path={ROUTES.ADMIN}>
                            <Home />
                        </AdminRoute>
                    </Switch>
                </Page>
            </Content.Page>
        </>
    )
}