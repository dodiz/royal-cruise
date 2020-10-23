import React, { useState } from "react"

import { Splash } from "../components"
import { RulesPopup, SignPopup, AmbientazionePopup } from "../containers-popup"

export default function Home() {

    const [showNav, setShowNav] = useState(false)

    return (
        <Splash>
            <Splash.Main>
                <Splash.Hamburger showNav={showNav} onClick={() => setShowNav(prev => !prev)} />
                <Splash.Nav showNav={showNav}>
                    <Splash.Menu >
                        <Splash.Option><RulesPopup>Guida</RulesPopup></Splash.Option>
                        <Splash.Option><AmbientazionePopup>Ambientazione</AmbientazionePopup></Splash.Option>
                        <Splash.Option><SignPopup>Accedi</SignPopup></Splash.Option>
                    </Splash.Menu>
                </Splash.Nav>
                <Splash.Bar>
                    <Splash.Title>Royal cruise</Splash.Title>
                    <Splash.SubTitle>GDR HORROR PLAY BY CHAT</Splash.SubTitle>
                </Splash.Bar>
            </Splash.Main>
        </Splash>
    )
}