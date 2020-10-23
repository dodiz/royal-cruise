import React from "react"

import { Page, Content } from "../components"
import { IMAGES } from "../constants"

export default function Settings() {

    return (
        <>
            <Content.Background bg={IMAGES.WALLBG} isStatic={true} />
            <Content.Page>
                <Page>
                    <Page.Title>Notifiche</Page.Title>
                    <Page.SubTitle>...</Page.SubTitle>
                </Page>
            </Content.Page>
        </>
    )
}