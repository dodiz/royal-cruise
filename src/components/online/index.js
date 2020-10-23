import React from "react"
import {
    Online,
    Title,
    Field
} from "./style"

export default function Online({children, ...restProps}) {
    return <Online {...restProps}>{children}</Online>
}
Online.Title = function OnlineTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Online.Field = function OnlineField({children, ...restProps}) {
    return <Field {...restProps}>{children}</Field>
}