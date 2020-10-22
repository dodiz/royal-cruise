import React from 'react'
import { Switch } from "react-router-dom"

import { ROUTES } from "./constants"
import { UserContext, SettingsContext } from "./context"
import { useAuth, useSettings } from "./hooks"
import { Dash, Home } from "./pages"
import { Loading } from "./containers"
import { IsUserRedirect, ProtectedRoute } from "./utils"
import { GlobalStyles } from "./globalstyles"

export default function App() {

  const { user, userData, loading } = useAuth()
  const [settings, setSettings] = useSettings()

  return (
    <UserContext.Provider value={{ user, userData }}>
      <SettingsContext.Provider value={{ settings, setSettings }}>
        <>
          <GlobalStyles settings={settings} />
          {loading ?
            <Loading />
            :
            <Switch>
              <IsUserRedirect loggedInPath={ROUTES.DASH} exact path={ROUTES.HOME}>
                <Home />
              </IsUserRedirect>
              <ProtectedRoute path={ROUTES.DASH}>
                <Dash />
              </ProtectedRoute>
            </Switch>
          }
        </>
      </SettingsContext.Provider>
    </UserContext.Provider>
  )
}

