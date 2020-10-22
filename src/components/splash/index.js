import React, { useState } from "react"
import {
    Container,
    Hamburger,
    HamburgerLine,
    Nav,
    Menu,
    Option,
    Main,
    Bar,
    Title,
    SubTitle,
    Jumbotron,
    Header,
    Body,
    Description,
    Faq,
    FaqHeader,
    FaqBody
} from "./style"


export default function Splash({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Splash.Hamburger = function SplashHamburger({ ...restProps }) {
    return (
        <Hamburger {...restProps} >
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
        </Hamburger>
    )
}
Splash.Nav = function SplashNav({ children, ...restProps }) {
    return <Nav {...restProps}>{children}</Nav>
}
Splash.Menu = function SplashMenu({ children, ...restProps }) {
    return <Menu {...restProps}>{children}</Menu>
}
Splash.Option = function SplashOption({ children, ...restProps }) {
    return <Option {...restProps}>{children}</Option>
}
Splash.Main = function SplashMain({ children, ...restProps }) {
    return <Main {...restProps}>{children}</Main>
}
Splash.Bar = function SplashBar({ children, ...restProps }) {
    return <Bar {...restProps}>{children}</Bar>
}
Splash.Title = function SplashTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Splash.SubTitle = function SplashSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Splash.Jumbotron = function SplashJumbotron({ children, ...restProps }) {
    return <Jumbotron {...restProps}>{children}</Jumbotron>
}
Splash.Header = function SplashItem({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}
Splash.Body = function SplashBody({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>
}
Splash.Description = function SplashDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
}
Splash.Faq = function SplashFaq({ title, children, ...restProps }) {

    const [show, setShow] = useState(false)

    return (
        <Faq>
            <FaqHeader onClick={() => setShow(prev => !prev)}>{title}</FaqHeader>
            <FaqBody show={show}>{children}</FaqBody>
        </Faq>
    )
}