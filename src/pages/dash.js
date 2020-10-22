import React, { useContext } from "react"
import { Switch } from "react-router-dom"

import { Content } from "../components"
import { ROUTES } from "../constants"
import { AsideContainer } from "../containers"
import { SettingsContext, PgContext } from "../context"
import { usePg } from "../hooks"
import { Settings, Account, CreatePg, Admin, Map, PgInfo, Land, News } from "../pages"

import { ProtectedRoute } from "../utils"

export default function Home() {

    const { settings } = useContext(SettingsContext)

    const [userPgs, currentPg, setCurrentPg, onlinePgs] = usePg()

    return (
        <PgContext.Provider value={{ userPgs, currentPg, setCurrentPg, onlinePgs }}>
            <Content.Main>
                <AsideContainer />
                <Switch>
                    <ProtectedRoute exact path={ROUTES.DASH}>
                        <News />
                    </ProtectedRoute>
                    <ProtectedRoute exact path={ROUTES.NEWPG}>
                        <CreatePg />
                    </ProtectedRoute>
                    <ProtectedRoute exact path={ROUTES.SETTINGS}>
                        <Settings />
                    </ProtectedRoute>
                    <ProtectedRoute exact path={ROUTES.ACCOUNT}>
                        <Account />
                    </ProtectedRoute>
                    <ProtectedRoute exact path={ROUTES.MAP}>
                        <Map />
                    </ProtectedRoute>
                    <ProtectedRoute exact path={ROUTES.PGINFO}>
                        <PgInfo />
                    </ProtectedRoute>
                    <ProtectedRoute exact path={`${ROUTES.LAND}/:landId`}>
                        <Land />
                    </ProtectedRoute>
                    <ProtectedRoute path={ROUTES.ADMIN}>
                        <Admin />
                    </ProtectedRoute>
                </Switch>
            </Content.Main>
        </PgContext.Provider>
    )
}