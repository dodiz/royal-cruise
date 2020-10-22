import React, { useContext } from "react"

import { Page, Form, Content } from "../components"
import { SETTINGS } from "../constants"
import { SettingsContext, FirebaseContext } from "../context"
import { IMAGES } from "../constants"

export default function Settings() {

    const { settings, setSettings } = useContext(SettingsContext)
    const { firebase } = useContext(FirebaseContext)

    const switchFont = ({ target }) => {
        setSettings(prev => {
            const fontSize = target.checked ? "80%" : "100%"
            return { ...prev, fontSize }
        })
    }
    const switchBg = ({ target }) => {
        setSettings(prev => {
            const mainBgImage = target.checked ? IMAGES.MAINBG2 : IMAGES.MAINBG
            return { ...prev, mainBgImage }
        })
    }

    return (
        <>
            <Content.Background bg={IMAGES.WALLBG} isStatic={true} />
            <Content.Page>
                <Page>
                    <Page.Title>Impostazioni</Page.Title>
                    <Page.SubTitle>Suoni </Page.SubTitle>
                    <Page.Fields>
                        <Page.Field title={"Allarme"}><Form.Checkbox /></Page.Field>
                    </Page.Fields>
                    <Page.SubTitle>Schermata</Page.SubTitle>
                    <Page.Fields>
                        <Page.Field title={"Riduci font"}>
                            <Form.Checkbox
                                checked={SETTINGS.DEFAULT.fontSize !== settings.fontSize}
                                onChange={switchFont}
                            />
                        </Page.Field>
                        <Page.Field title={"Sfondo secondario"}>
                            <Form.Checkbox
                                checked={SETTINGS.DEFAULT.mainBgImage !== settings.mainBgImage}
                                onChange={switchBg}
                            />
                        </Page.Field>
                    </Page.Fields>
                    <Page.SubTitle>Account</Page.SubTitle>
                    <Page.Fields>
                        <Page.Field button title={"Reimposta password"}></Page.Field>
                        <Page.Field button onClick={() => firebase.auth().signOut()} title={"Esegui il Logout"}></Page.Field>
                    </Page.Fields>
                </Page>
            </Content.Page>
        </>
    )
}