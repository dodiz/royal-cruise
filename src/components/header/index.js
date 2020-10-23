import React from "react"
import {
    Container,
    NavIcon,
    Nav,
    Menu,
    Option
} from "./style"

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Header.NavIcon = ({ children, ...restProps }) => {
    return <NavIcon {...restProps}>{children}</NavIcon>
}
Header.Nav = ({ children, ...restProps }) => {
    return <Nav {...restProps}>{children}</Nav>
}
Header.Menu = ({ children, ...restProps }) => {
    return <Menu {...restProps}>{children}</Menu>
}
Header.Option = ({ children, ...restProps }) => {
    return <Option {...restProps}>{children}</Option>
}