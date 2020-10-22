import React, { useRef } from "react"
import {
    Container,
    Title,
    Description,
    Main,
    Content,
    Slide,
    Arrow
} from "./style"

export default function Slider({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Slider.Title = function SliderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Slider.Description = function SliderDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
}
Slider.Main = function SliderSlider({ children, ...restProps }) {
    return <Main {...restProps}>{children}</Main>
}
Slider.Content = React.forwardRef(({ children, ...restProps }, ref) => {
    if (!ref) ref = useRef(null)
    return <Content ref={ref} {...restProps}>{children}</Content>
})
Slider.Slide = function SliderSlide({ children, ...restProps }) {
    return <Slide {...restProps}>{children}</Slide>
}
Slider.Arrow = function SliderArrow({ children, ...restProps }) {
    return <Arrow {...restProps}>{children}</Arrow>
}