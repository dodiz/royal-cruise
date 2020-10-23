import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"

import { ROUTES } from "../constants"
import { UserContext } from "../context"

export function IsUserRedirect({ loggedInPath, children, ...restProps }) {
    const { user, userData } = useContext(UserContext)

    return (
        <Route {...restProps} render={() => {
            if (!user) return children
            else return (
                <Redirect to={{ pathname: loggedInPath }} />
            )
        }} />
    )
}

export function ProtectedRoute({ children, ...restProps }) {
    const { user } = useContext(UserContext)
    return (
        <Route {...restProps} render={() => {
            if (user) return children
            else return <Redirect to={{ location: ROUTES.HOME }} />
        }}
        />
    )
}

export function AdminRoute({ children, ...restProps }) {
    const { user, userData } = useContext(UserContext)
    return (
        <Route {...restProps} render={() => {
            if (user) return children
            else return <Redirect to={{ location: ROUTES.HOME }} />
        }}
        />
    )
}