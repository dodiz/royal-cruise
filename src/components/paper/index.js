import React from "react"
import {
    Container,
    Image,
    Tabs,
    Tab,
    TabContent,
    Title,
    Fields,
    Field,
    FieldTitle,
    FieldContent,
    Flex
} from "./style"

export default function Paper({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Paper.Flex = function PaperFlex({ children, ...restProps }) {
    return <Flex {...restProps}>{children}</Flex>
}
Paper.Title = function PaperTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Paper.Tabs = function PaperTabs({ children, ...restProps }) {
    return <Tabs {...restProps}>{children}</Tabs>
}
Paper.Tab = function PaperTab({ children, ...restProps }) {
    return <Tab {...restProps}>{children}</Tab>
}
Paper.TabContent = function PaperTabContent({ children, ...restProps }) {
    return <TabContent {...restProps}>{children}</TabContent>
}
Paper.Image = function PaperImage({ children, ...restProps }) {
    return <Image {...restProps} />
}
Paper.Fields = function PaperFields({ children, ...restProps }) {
    return <Fields {...restProps}>{children}</Fields>
}
Paper.Field = function PaperTabField({ title, children, ...restProps }) {
    return (
        <Field {...restProps}>
            <FieldTitle>{title}</FieldTitle>
            <FieldContent>{children}</FieldContent>
        </Field>
    )
}