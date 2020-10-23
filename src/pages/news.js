import React, { useContext } from "react"

import { Content } from "../components"
import { IMAGES } from "../constants"
import { PgSliderContainer, MenuContainer, OnlineContainer } from "../containers"
import { SettingsContext } from "../context"

export default function NewsPage() {

    const { settings } = useContext(SettingsContext)

    return (
        <>
            <Content.Background isStatic={false} bg={settings.mainBgImage} />
            <Content flex>
                <Content.Page>

                </Content.Page>
                <MenuContainer right icon={IMAGES.MENU_ICON}>
                    <PgSliderContainer />
                    <OnlineContainer />
                </MenuContainer>
            </Content>
        </>
    )
}