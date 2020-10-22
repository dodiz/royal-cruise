import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"

import { Content } from "../components"
import { ROUTES, IMAGES } from "../constants"
import { MenuContainer } from "../containers"
import { RulesPopup, AmbientazionePopup } from "../containers-popup"
import { UserContext, PgContext } from "../context"
import { Settings, DiscordIcon } from "../svg"

export default function AsideContainer() {

    const { userData } = useContext(UserContext)
    const { userPgs } = useContext(PgContext)

    const [play, setPlay] = useState(false)

    return (
        <MenuContainer style={{ padding: "5em 0", width: "25%" }}>
            {!play ?
                <Content.AsideMenu>
                    <Link to={ROUTES.DASH}><Content.AsideOption >Home</Content.AsideOption></Link>
                    <Link to={ROUTES.NEWPG}><Content.AsideOption >Crea pg</Content.AsideOption></Link>
                    <Link to={ROUTES.MAP}><Content.AsideOption >Nave</Content.AsideOption></Link>
                    {(userPgs !== null && userPgs.length !== 0) &&
                        <Link to={ROUTES.PGINFO}><Content.AsideOption >Scheda</Content.AsideOption></Link>
                    }
                    <Content.AsideOption onClick={() => setPlay(true)}>Manuali</Content.AsideOption>
                    <Link to={ROUTES.ACCOUNT}><Content.AsideOption>Notifiche</Content.AsideOption></Link>
                    {userData.role ? <Link to={ROUTES.ADMIN}><Content.AsideOption>Admin</Content.AsideOption></Link> : null}
                </Content.AsideMenu>
                :
                <Content.AsideMenu>
                    <RulesPopup><Content.AsideOption>Guida</Content.AsideOption></RulesPopup>
                    <AmbientazionePopup><Content.AsideOption>Trama</Content.AsideOption></AmbientazionePopup>
                    <Content.AsideOption onClick={() => setPlay(false)}>Back</Content.AsideOption>
                </Content.AsideMenu>
            }
            <Content.AsideFooter>
                <Link to={ROUTES.SETTINGS}><Settings /></Link>
            </Content.AsideFooter>
        </MenuContainer >
    )
}