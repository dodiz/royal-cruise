import React, { useState } from "react"

import { Content, Splash } from "../components"

export default function MenuContainer({ icon, right, children, ...restProps }) {

    const [showNav, setShowNav] = useState(false)

    const style = right && {
        right: "1em",
        left: "unset"
    }

    return (
        <>
            {icon ?
                <Content.AsideIcon icon={icon} style={style} showNav={showNav} onClick={() => setShowNav(prev => !prev)} />
                :
                <Splash.Hamburger style={style} showNav={showNav} onClick={() => setShowNav(prev => !prev)} />
            }
            <Content.Aside showNav={showNav} {...restProps}>
                {children}
            </Content.Aside>
        </>
    )
}