import React, { useRef, useState } from "react"
import {
    Container,
    Title,
    Chat,
    Role,
    Avatar,
    RoleContent,
    RoleTop,
    PgName,
    Date,
    RoleMessage,
    Action,
    ActionBox,
    ActionInput,
    ActionIcon,
    ActionPopup
} from "./style"

import { IMAGES } from "../../constants"

export default function Land({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Land.Title = function LandTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Land.Chat = React.forwardRef(({ children, ...restProps }, ref) => {
    if (!ref) ref = useRef(null)

    return <Chat ref={ref} {...restProps}>{children}</Chat>
})
Land.Role = function LandRole({ children, ...restProps }) {
    return <Role {...restProps}>{children}</Role>
}
Land.Avatar = function LandAvatar({ children, ...restProps }) {
    return <Avatar {...restProps}>{children}</Avatar>
}
Land.RoleContent = function LandRoleContent({ children, ...restProps }) {
    return <RoleContent {...restProps}>{children}</RoleContent>
}
Land.RoleTop = function LandRoleTop({ children, ...restProps }) {
    return <RoleTop {...restProps}>{children}</RoleTop>
}
Land.PgName = function LandPgName({ children, ...restProps }) {
    return <PgName {...restProps}>{children}</PgName>
}
Land.Date = function LandDate({ children, ...restProps }) {
    return <Date {...restProps}>{children}</Date>
}
Land.RoleMessage = function LandRoleMessage({ children, ...restProps }) {
    return <RoleMessage {...restProps}>{children}</RoleMessage>
}
Land.Action = function LandAction({ children, ...restProps }) {
    return <Action {...restProps}>{children}</Action>
}
Land.ActionBox = function LandActionBox({ children, ...restProps }) {
    return <ActionBox {...restProps}>{children}</ActionBox>
}
Land.ActionInput = function LandActionInput({ children, ...restProps }) {
    return <ActionInput {...restProps}>{children}</ActionInput>
}
Land.ActionIconPopup = function LandActionIconPopup({ Icon, children, ...restProps }) {

    const [show, setShow] = useState(false)

    return (
        <>
            <ActionPopup bg={IMAGES.LANDPOPUPBG} show={show}>{children}</ActionPopup>
            <ActionIcon {...restProps} onClick={() => setShow(prev => !prev)}><Icon /></ActionIcon>
        </>
    )
}