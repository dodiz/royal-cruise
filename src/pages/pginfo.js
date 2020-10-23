import React, { useContext, useState } from "react"

import { Content, Paper } from "../components"
import { PgSliderContainer, MenuContainer } from "../containers"
import { PgContext } from "../context"
import { IMAGES } from "../constants"
import { pgInfo } from "../data"

export default function PgInfo() {
    const [tab, setTab] = useState(0)
    const { userPgs, currentPg } = useContext(PgContext)
    return (
        <>
            <Content.Background bg={IMAGES.METALBG} isStatic={true} style={{ filter: "brightness(.8)" }} />
            <Content flex>
                <Content.Page>
                    {currentPg !== null &&
                        <Paper style={{ padding: "2em", margin: "2em 0 0 2em" }} bg={IMAGES.PAPERBG}>
                            <Paper.Flex style={{ borderBottom: "3px solid rgba(0, 0, 0, .2)" }}>
                                <Paper.Title style={{ fontSize: "2em" }}>Scheda</Paper.Title>
                                <Paper.Tabs>
                                    <Paper.Tab id={0} onClick={e => setTab(e.target.id)}>Anagrafica</Paper.Tab>
                                    <Paper.Tab id={1} onClick={e => setTab(e.target.id)}>Background</Paper.Tab>
                                    <Paper.Tab id={2} onClick={e => setTab(e.target.id)}>Conoscenze</Paper.Tab>
                                    <Paper.Tab id={3} onClick={e => setTab(e.target.id)}>Diario</Paper.Tab>
                                    <Paper.Tab id={4} onClick={e => setTab(e.target.id)}>Skill</Paper.Tab>
                                    <Paper.Tab id={5} onClick={e => setTab(e.target.id)}>Inventario</Paper.Tab>
                                </Paper.Tabs>
                            </Paper.Flex>
                            <Paper.TabContent tab={tab} id={0}>
                                <Paper.Flex>
                                    <Paper.Image />
                                    <Paper.Fields>
                                        {pgInfo.personal.map((el, i) =>
                                            <Paper.Field key={i} line title={el.title}>{userPgs[currentPg].personal[el.name]}</Paper.Field>
                                        )}
                                        {pgInfo.body.map((el, i) =>
                                            <Paper.Field key={i} line title={el.title}>{userPgs[currentPg].body[el.name]}</Paper.Field>
                                        )}
                                    </Paper.Fields>
                                </Paper.Flex>
                            </Paper.TabContent>
                            <Paper.TabContent tab={tab} id={1}>
                                <Paper.Fields>
                                    <Paper.Field textarea title={"Background"}>
                                        {userPgs[currentPg].background}
                                    </Paper.Field>
                                </Paper.Fields>
                            </Paper.TabContent>
                            <Paper.TabContent tab={tab} id={2}>
                                conoscenze
                    </Paper.TabContent>
                            <Paper.TabContent tab={tab} id={3}>
                                diario
                    </Paper.TabContent>
                            <Paper.TabContent tab={tab} id={4}>
                                skill
                    </Paper.TabContent>
                            <Paper.TabContent tab={tab} id={5}>
                                inventory
                    </Paper.TabContent>
                        </Paper>
                    }
                </Content.Page>
                <MenuContainer icon={IMAGES.MENU_ICON} right>
                    <PgSliderContainer />
                </MenuContainer>
            </Content>
        </>
    )
}