import React, { useState } from "react"
import ReactHtmlParser from 'react-html-parser'
import { Modal } from "react-bootstrap"

import { Content } from "../components"
import { IMAGES } from "../constants"
import { rules } from "../data"

export default function RulesContainerPopup({ children }) {

    //SHOW MODAL
    const [show, setShow] = useState(false)
    const [tab, setTab] = useState(0)

    return (
        <>
            <Content.Void onClick={() => setShow(true)}>
                {children}
            </Content.Void>
            <Modal size={"xl"} show={show} onHide={() => setShow(false)}>
                <Content style={{ margin: "auto" }}>
                    <Content.PopupBackground bg={IMAGES.RULESBG} />
                    <Content.CloseModal onClick={() => setShow(false)} />
                    <Content.Tabs>
                        {
                            rules.map((el, id) =>
                                <Content.Tab key={id} current={tab} onClick={({ target }) => setTab(parseInt(target.id))} id={el.id}>{el.title}</Content.Tab>
                            )
                        }
                    </Content.Tabs>
                    {
                        rules.map((el, id) =>
                            <Content.TabContent key={id} current={tab} id={el.id}>
                                <Content.TabDesc>
                                    {ReactHtmlParser(el.body)}
                                </Content.TabDesc>
                            </Content.TabContent>
                        )
                    }
                </Content>
            </Modal>
        </>
    )
}