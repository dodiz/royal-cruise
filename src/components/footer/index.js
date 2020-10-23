import React from "react"
import {
    Container
} from "./style"

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}