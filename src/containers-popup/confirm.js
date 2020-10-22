import React, { useState } from "react"
import { Modal } from "react-bootstrap"

import { Content, Page, Form } from "../components"

export default function ConfirmPopup({ cb, children }) {

    //SHOW MODAL
    const [show, setShow] = useState(false)

    return (
        <>
            <Content.Void onClick={() => setShow(true)}>
                {children}
            </Content.Void>
            <Modal size={"sm"} show={show} onHide={() => setShow(false)}>
                <Content style={{ padding: "1em" }}>
                    <Page.Title>Conferma</Page.Title>
                    <Content.Description>Sei sicuro di voler confermare quest'azione?</Content.Description>
                    <Form.Button red style={{ marginRight: "1em" }} onClick={() => setShow(false)}>Annulla</Form.Button>
                    <Form.Button onClick={() => { cb(); setShow(false) }}>Conferma</Form.Button>
                </Content>
            </Modal>
        </>
    )
}