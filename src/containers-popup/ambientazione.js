import React, { useState } from "react"
import ReactHtmlParser from 'react-html-parser'
import { Modal } from "react-bootstrap"

import { Content, Splash } from "../components"
import { IMAGES } from "../constants"
import { ambientazione, faqs } from "../data"

export default function AmbientazionePopup({ children }) {

    //SHOW MODAL
    const [show, setShow] = useState(false)
    const [tab, setTab] = useState(0)

    return (
        <>
            <Content.Void onClick={() => setShow(true)}>
                {children}
            </Content.Void>
            <Modal size={"xl"} show={show} onHide={() => setShow(false)}>
                <Content style={{ width: "100%", margin: "auto" }}>
                    <Content.PopupBackground bg={IMAGES.STORYBG} />
                    <Content.CloseModal onClick={() => setShow(false)} />
                    <Content.Tabs>
                        {
                            ambientazione.map((el, id) =>
                                <Content.Tab current={tab} key={id} onClick={({ target }) => setTab(parseInt(target.id))} id={el.id}>{el.title}</Content.Tab>
                            )
                        }
                        <Content.Tab current={tab} onClick={({ target }) => setTab(parseInt(target.id))} id={ambientazione.length}>FAQS</Content.Tab>
                    </Content.Tabs>
                    {
                        ambientazione.map((el, id) =>
                            <Content.TabContent key={id} current={tab} id={el.id}>
                                {el.bg && <Content.TabImage bg={"/images/" + el.bg} />}
                                <Content.TabDesc>
                                    {ReactHtmlParser(el.body)}
                                </Content.TabDesc>
                            </Content.TabContent>
                        )
                    }
                    <Content.TabContent current={tab} id={ambientazione.length}>
                        <Content.TabDesc>
                            {
                                faqs.map((el, id) =>
                                    <Splash.Faq key={id} title={el.title}>{el.body}</Splash.Faq>
                                )
                            }
                        </Content.TabDesc>
                    </Content.TabContent>
                </Content>
            </Modal>
        </>
    )
}