import React, { useState, useEffect } from "react"

import { Admin, Page, Form } from "../components"
import { COLLECTIONS } from "../constants"
import { useFirestore } from "../hooks"
import { pgInfo } from "../data"
import { formatDate } from "../utils"

export default function ApprovePg() {

    const { getCollection, deleteDoc, addDoc, addDocName } = useFirestore()
    const [pgList, setPgList] = useState([])

    const refreshPgs = () => {
        getCollection(COLLECTIONS.TOAPPROVE)
            .then(res => {
                setPgList(res.docs)
            })
    }

    useEffect(() => {
        refreshPgs()
    }, [])

    const approvePg = key => {
        const data = pgList[key].data()
        data.user = pgList[key].id
        delete data.date

        addDocName(COLLECTIONS.ACTORS, data.actor.toLowerCase(), { user: pgList[key].id })
        addDoc(COLLECTIONS.PGS, data)
            .then(() => {
                rejectPg(data.user)
            })
    }
    const rejectPg = doc => {
        deleteDoc(COLLECTIONS.TOAPPROVE, doc)
            .then(refreshPgs)
    }

    return (
        <>
            <Page.Title>Richieste di approvazione</Page.Title>
            {
                pgList.map((el, i) => {
                    const data = el.data()
                    return (
                        <Admin.Box
                            key={i}
                            date={formatDate(data.date.toDate())}
                            title={`Richiesta inviata da ${data.user}`}
                        >
                            <Page.SubTitle>Anagrafica</Page.SubTitle>
                            <Page.Fields>
                                {
                                    pgInfo.personal.map((field, i) =>
                                        <Page.Field key={i} title={field.title}>
                                            <Page.Input>{data.personal[field.name]}</Page.Input>
                                        </Page.Field>
                                    )
                                }
                                <Page.Field title={"Background"}>
                                    <Page.Input>{data.background}</Page.Input>
                                </Page.Field>
                            </Page.Fields>
                            <Page.SubTitle>Tratti somatici</Page.SubTitle>
                            <Page.Fields>
                                {
                                    pgInfo.body.map((field, i) =>
                                        <Page.Field key={i} title={field.title}>
                                            <Page.Input>{data.body[field.name]}</Page.Input>
                                        </Page.Field>
                                    )
                                }
                            </Page.Fields>
                            <Page.SubTitle>Dati GDR</Page.SubTitle>
                            <Page.Fields>
                                <Page.Field title={"Prestavolto"}>
                                    <Page.Input>{data.actor}</Page.Input>
                                </Page.Field>
                            </Page.Fields>
                            <Form.Button green style={{ marginRight: "2em" }} onClick={() => approvePg(i)}>Approva</Form.Button>
                            <Form.Button red onClick={() => rejectPg(el.id)}>Respingi</Form.Button>
                        </Admin.Box>
                    )
                })
            }
        </>
    )
}