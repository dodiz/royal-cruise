import React, { useState } from "react"
import {
    Container,
    Box,
    BoxHeader,
    BoxBody,
    Date,
    Content,
    Title
} from "./style"

import { RightArrow } from "../../svg"

export default function Admin({ children, ...restProps }) {
    return null
}
Admin.Box = function AdminBox({ title, date, children, ...restProps }) {

    const [hide, setHide] = useState(true)

    return (
        <Box {...restProps}>
            <BoxHeader onClick={() => setHide(prev => !prev)}>
                <Date>{date}</Date>
                <Content hide={hide}>
                    <Title>{title}</Title>
                    <RightArrow />
                </Content>
            </BoxHeader>
            <BoxBody hide={hide}>
                {children}
            </BoxBody>
        </Box>
    )
}