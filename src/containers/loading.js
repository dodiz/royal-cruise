import React from "react"
import { Content } from "../components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export default function Loading({ ...restProps }) {
    return (
        <Content.Loading {...restProps}>
            <Content.Icon style={{ fontSize: "5em", color: "white" }} spin>
                <FontAwesomeIcon icon={faSpinner} />
            </Content.Icon>
        </Content.Loading>
    )
}