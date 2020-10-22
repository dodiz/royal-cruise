import React, { useState, useEffect } from "react"
import {
    Container,
    Fields,
    Field,
    FHeader,
    FBody,
    Title,
    SplashDescription,
    SubTitle,
    Suggestion,
    Grid,
    GridItem,
    SmallAlert,
    Input,
    SmallTitle
} from "./style"

import { InfoIcon } from "../../svg"

export default function Page({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Page.Title = function PageTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Page.SmallTitle = function PageSmallTitle({ children, ...restProps }) {
    return <SmallTitle {...restProps}>{children}</SmallTitle>
}
Page.SubTitle = function PageSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Page.SplashDescription = function PageSplashDescription({ children, ...restProps }) {
    return <SplashDescription {...restProps}>{children}</SplashDescription>
}
Page.Fields = function PageFields({ children, ...restProps }) {
    return <Fields {...restProps}>{children}</Fields>
}
Page.Field = function PageField({ title, suggestion, setSuggestion, children, ...restProps }) {

    return (
        <Field {...restProps}>
            <FHeader>{title}</FHeader>
            {suggestion &&
                <InfoIcon
                    onClick={() => setSuggestion(prev => (suggestion === prev) ? "" : suggestion)}
                    style={{
                        width: "20px",
                        fill: "var(--mainyellow)",
                        cursor: "pointer"
                    }}
                />
            }
            <FBody>{children}</FBody>
        </Field>
    )
}
Page.Suggestion = function PageSuggestion({ setSuggestion, suggestion, ...restProps }) {

    const [show, setShow] = useState("")

    useEffect(() => {
        setTimeout(() => { setShow(suggestion) }, 300)
    }, [suggestion])

    return (
        <Suggestion
            show={suggestion}
            onClick={() => setSuggestion("")}
            {...restProps}
        >
            {show ? show : suggestion}
        </Suggestion>
    )
}
Page.Grid = function PageGrid({ children, ...restProps }) {
    return <Grid {...restProps}>{children}</Grid>
}
Page.GridItem = function PageGridItem({ children, ...restProps }) {
    return <GridItem {...restProps}>{children}</GridItem>
}
Page.SmallAlert = function PageSmallAlert({ children, ...restProps }) {
    return <SmallAlert {...restProps}>{children}</SmallAlert>
}
Page.Input = function PageInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}