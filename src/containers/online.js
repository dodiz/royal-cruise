import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { Paper } from "../components"
import { IMAGES, ROUTES } from "../constants"
import { PgContext } from "../context"

export default function OnlineContainer({ filter }) {

    const { onlinePgs } = useContext(PgContext)
    return (
        <Paper style={{ width: filter && "70%", margin: "auto", padding: ".7em" }} bg={IMAGES.ONLINEBG}>
            <Paper.Title style={{ border: "0", fontSize: ".9em" }}>A bordo</Paper.Title>
            <Paper.Fields style={{ marginTop: ".5em", overflow: "auto", maxHeight: "200px", color: "white" }}>
                {
                    onlinePgs.map((el, i) =>
                        (!filter || el.path === `${ROUTES.LAND}/${filter}`) && (el.pg) &&
                        <Paper.Field
                            key={i}
                            style={{ display: "flex" }}
                            title={el.pg.split(" ")[0]}
                        >
                            {!filter ?
                                el.location ?
                                    <Link to={el.path} style={{ fontSize: ".8em" }}>{el.location}</Link>
                                    :
                                    "Mappa"
                                :
                                null
                            }
                        </Paper.Field>
                    )}
            </Paper.Fields>
        </Paper >
    )
}