import React, { useState } from "react"
import { Header } from "../components"
import { MenuIcon } from "../svg"

export default function HeaderContainer() {

    const [showNav, setShowNav] = useState(false)

    return (
        <Header>
            <Header.NavIcon onClick={() => setShowNav(prev => !prev)}><MenuIcon /></Header.NavIcon>
            <Header.Nav showNav={showNav}>
                <Header.NavIcon onClick={() => setShowNav(false)}><MenuIcon /></Header.NavIcon>
                <Header.Menu>
                    <Header.Option>Home</Header.Option>
                    <Header.Option>About</Header.Option>
                    <Header.Option>Cookie Policy</Header.Option>
                </Header.Menu>
            </Header.Nav>
        </Header>
    )
}