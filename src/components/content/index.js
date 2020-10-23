import React, { useState, useEffect } from "react"
import {
    Background,
    Container,
    Page,
    Side,
    Box,
    Loading,
    Icon,
    CloseModal,
    PopupBackground,
    Void,
    Tabs,
    Tab,
    TabContent,
    TabImage,
    TabDesc,
    Main,
    Frame,
    Description,
    Aside,
    AsideIcon,
    AsideMenu,
    AsideOption,
    AsideFooter
} from "./style"

import { CloseIcon } from "../../svg"

export default function Content({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Content.Page = function ContentPage({ children, ...restProps }) {
    return <Page {...restProps}>{children}</Page>
}
Content.Side = function ContentSide({ children, ...restProps }) {
    return <Side {...restProps}>{children}</Side>
}
Content.Loading = function ContentLoading({ children, ...restProps }) {
    return <Loading {...restProps}>{children}</Loading>
}
Content.Icon = function ContentIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>
}
Content.Void = function ContentVoid({ children, ...restProps }) {
    return <Void {...restProps}>{children}</Void>
}
Content.CloseModal = function ContentCloseModal({ ...restProps }) {
    return <CloseModal {...restProps}><CloseIcon /></CloseModal>
}
Content.Tabs = function ContentTabs({ children, ...restProps }) {
    return <Tabs {...restProps}>{children}</Tabs>
}
Content.Tab = function ContentTab({ children, ...restProps }) {
    return <Tab {...restProps}>{children}</Tab>
}
Content.TabContent = function ContentTabContent({ children, ...restProps }) {
    return <TabContent {...restProps}>{children}</TabContent>
}
Content.TabImage = function ContentTabimage({ ...restProps }) {
    return <TabImage {...restProps} />
}
Content.TabDesc = function ContentTabDesc({ ...restProps }) {
    return <TabDesc {...restProps} />
}
Content.Main = function ContentMain({ children, ...restProps }) {
    return <Main {...restProps}>{children}</Main>
}
Content.Background = function ContentBackground({ isStatic, ...restProps }) {

    const [time, setTime] = useState(0)

    useEffect(() => {
        !isStatic &&
            setTimeout(async () => await setTime(prev => Math.floor(Math.random() * 10) + 5), time * 1000)
    }, [time])

    return <Background time={String(time)} isStatic={isStatic} {...restProps} />
}
Content.PopupBackground = function ContentPopupBackground({ ...restProps }) {
    return <PopupBackground {...restProps} />
}
Content.Frame = function ContentFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}
Content.Box = function ContentBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}
Content.Description = function ContentDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
}

/* SIDE MENU */

Content.Aside = function ContentAside({ children, ...restProps }) {
    return <Aside {...restProps}>{children}</Aside>
}
Content.AsideIcon = function ContentAsideIcon({ ...restProps }) {
    return <AsideIcon {...restProps} />
}
Content.AsideMenu = function ContentAsideMenu({ children, ...restProps }) {
    return <AsideMenu {...restProps}>{children}</AsideMenu>
}
Content.AsideOption = function ContentAsideOption({ children, ...restProps }) {
    return <AsideOption {...restProps}>{children}</AsideOption>
}
Content.AsideFooter = function ContentAsideOption({ children, ...restProps }) {
    return <AsideFooter {...restProps}>{children}</AsideFooter>
}