import React, { useState, useRef, useEffect } from "react"
import {
    Alert,
    Base,
    Button,
    Checkbox,
    CheckboxLabel,
    CheckboxSlider,
    Color,
    Container,
    Error,
    Field,
    Flex,
    File,
    FileLabel,
    FileText,
    Input,
    Option,
    Label,
    SubTitle,
    Radio,
    Title,
    Select,
    SmallText,
    Suggestion,
    TextArea
} from "./style"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileArchive as FileIcon } from "@fortawesome/free-solid-svg-icons"

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}
Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Form.SubTitle = function FormSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Form.SmallText = function FormSmallText({ children, ...restProps }) {
    return <SmallText {...restProps}>{children}</SmallText>
}
Form.Label = function FormLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}
Form.Input = function FormInput({ children, ...restProps }) {
    return <Input required {...restProps}>{children}</Input>
}
Form.Radio = function FormRadio({ title, ...restProps }) {

    const id = Math.floor(Math.random() * 200)

    return (
        <Radio>
            <Label htmlFor={id} >{title}</Label>
            <Input id={id} type={"radio"} style={{ width: "max-content" }} {...restProps} />
        </Radio>
    )
}
Form.Color = function FormColor({ children, ...restProps }) {
    const color = useRef(null)
    const [stateColor, setStateColor] = useState("#000")

    const changeColor = () => {
        setStateColor(color.current.value)
    }

    useEffect(() => {
        color.current.addEventListener("change", changeColor)
        return () => color.current.removeEventListener("change", changeColor)
    }, [])

    return <Color ref={color} style={{ background: stateColor }} type={"color"} {...restProps} />
}
Form.File = React.forwardRef(({ children, ...restProps }, ref) => {

    if (!ref) ref = useRef(null)
    const [fileName, setFileName] = useState("")

    useEffect(() => {
        ref.current.addEventListener("change", async e => {
            if (ref.current.value) setFileName(ref.current.files[0].name)
            else setFileName("")
        })
        const interval = setInterval(() => { if (!ref.current.value) setFileName("") }, 1000) //NEED TO BE FIXED
        return () => clearInterval(interval)
    }, [])

    return (
        <FileLabel >
            <File ref={ref} type={"file"} {...restProps} />
            <FileText hasFile={fileName}><FontAwesomeIcon icon={FileIcon} /> {fileName ? fileName : "Seleziona un file"}</FileText>
        </FileLabel>
    )
})
Form.TextArea = function FormTextArea({ children, ...restProps }) {
    return <TextArea required {...restProps}>{children}</TextArea>
}
Form.Field = React.forwardRef(({ title, suggestion, ...restProps }, ref) => {
    const [showSuggestion, setShowSuggestion] = useState(false)

    if (!ref) ref = useRef(null)

    return (
        <Field>
            <Input
                ref={ref}
                required
                onBlur={
                    ({ target }) =>
                        setShowSuggestion(!target.value)
                }
                {...restProps} />
            <Label onClick={() => ref.current.focus()}>
                {title}
            </Label>
            {(showSuggestion && suggestion) &&
                <Suggestion>{suggestion}</Suggestion>
            }
        </Field>
    )
})

Form.Button = function FormButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}
Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>
}
Form.Alert = function FormAlert({ children, ...restProps }) {
    return <Alert {...restProps}>{children}</Alert>
}
Form.Select = function FormSelect({ children, ...restProps }) {
    return <Select {...restProps}>{children}</Select>
}
Form.Option = function FormOption({ children, ...restProps }) {
    return <Option {...restProps}>{children}</Option>
}
Form.Checkbox = React.forwardRef(({ children, ...restProps }, ref) => {

    if (!ref) ref = useRef(null)

    return (
        <CheckboxLabel>
            <Checkbox ref={ref} type={"checkbox"} {...restProps} />
            <CheckboxSlider>{children}</CheckboxSlider>
        </CheckboxLabel>
    )
})
Form.Flex = function FormFlex({ children, ...restProps }) {
    return <Flex {...restProps}>{children}</Flex>
}