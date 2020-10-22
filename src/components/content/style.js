import styled from "styled-components"

export const Container = styled.div`
display: ${({ flex }) => flex && "flex"};
width: 100%;
`
export const Page = styled.div`
padding: 2em 0;
width: 100%;
max-height: 100vh;
overflow: auto;
opacity: 0;
animation: slideUpIn .3s forwards;
@media(min-width: 480px) {
    padding: 0;
}
`
export const Side = styled.div``

export const Loading = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Icon = styled.div`
  animation: ${({ spin }) => spin && "rotate 1s ease-out infinite"};
`
export const Void = styled.span`
font-size: inherit;
color: inherit;
font-family: inherit;
`
export const CloseModal = styled.div`
position: absolute;
top: -10px;
right: -10px;
background: red;
svg {
    width: 20px;
    height: 20px;
    fill: white;
}
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
cursor: pointer;
`
export const Tabs = styled.div`
display: flex;
background: rgba(255, 255, 255, .1);
`
export const Tab = styled.div`
display:flex;
align-items: center;
text-align: center;
padding: .4em .8em;
font-size: 1.2em;
font-family: "Special Elite";
cursor: pointer;
border-right: 1px solid rgba(0, 0, 0, .3);
border-bottom: ${({ current, id }) => current === id && "2px solid var(--secondcolor)"};
`
export const TabContent = styled.div`
display: ${({ current, id }) => current !== id && "none"};
line-height: 1.5em;
font-family: 'Courier New', Courier, monospace;
background: rgba(0, 0, 0, .5);
ul {
    margin-top: 1em;
}
li {
    margin-top: 1em;
}

`
export const TabImage = styled.div`
background: linear-gradient(to top, black 5%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 85%, black 95% ), url(${({ bg }) => bg}) 100% no-repeat, black;
background-position: center;
height: 200px;
`
export const TabDesc = styled.div`
padding: 2em;
`
export const Main = styled.div`
width: 100%;
height: 100vh;
display: flex;
`
export const Background = styled.div`
    
    position: fixed; top: 0; left: 0;
    width: 100%; height: 100vh;
    z-index: -1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: showBg .5s forwards, ${({ isStatic }) => !isStatic && "fadeBg"} ${({ time }) => time}s infinite;
    filter: ${({ isStatic }) => !isStatic && "brightness(.6)"};
    background-image: url(${({ bg }) => bg});
@keyframes showBg {
    from {opacity: 0}
    to {opacity: 1}
}
@keyframes fadeBg {
    89% {filter: brightness(.6); transform: rotate(0)}
    90% {filter: brightness(1); transform: rotate(1deg) }
    92% {filter: brightness(.8); transform: rotate(-1deg) sepia(50%); }
    93% {filter: brightness(1) sepia(100%)} 
    100% {filter: brightness(.6); transform: rotate(0)}
}
`
export const PopupBackground = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: url("${({ bg }) => bg}");
z-index: -1;
`

export const Frame = styled.div`
width: 100%;
`
export const Box = styled.div`
background: red;
width: 80%;
animation: openBox 3s forwards;
`
export const Description = styled.div`
padding: .5em;
font-family: "Courier New";
`

/* ASIDE */
export const AsideIcon = styled.div`
filter: grayscale(${({ showNav }) => showNav ? "100%" : "0"});
transition: filter .3s;
background: url(${({ icon }) => icon});
background-size: 100%;
width: 50px;
height: 50px;
position: fixed;
top: 1em;
left: 1.5em;
z-index: 100;
@media(min-width: 480px) {
    display: none;
}
`

export const Aside = styled.div`
    width: 260px;
    height: 100vh;
    padding: 3em 0;
    overflow: auto;
    background: linear-gradient(${({ right }) => right ? "-90deg" : "90deg"}, rgba(0, 0, 0, .7) 80%, rgba(0, 0, 0, 0) 100%);
    background-size: 100%;
    visibility: ${({ showNav }) => showNav ? "unset" : "hidden"};
    transform: translateX(${({ showNav, right }) => showNav ? "0" : right ? "50%" : "-50%"});
    opacity: ${({ showNav }) => showNav ? 1 : 0};
    transition: transform .5s, opacity .5s; 
    position: fixed;
    z-index: 9;
    top: 0;
    ${({ right }) => right ? "right: 0" : "left: 0"};

@media(min-width: 480px) {
    width: unset;
    position: unset;
    visibility: unset;
    transform: unset;
    opacity: unset;
    text-align: unset;
    background: unset;
    box-shadow: unset;
    overflow-x: hidden;
}
`
export const AsideMenu = styled.div`
animation: slideRightIn .3s forwards;
`
export const AsideOption = styled.div`
white-space: nowrap;
font-family: "Special Elite";
font-size: 1.3em;
text-transform: uppercase;
padding: .7em 4em;
cursor: pointer;
text-shadow: 0 0 1px #000, 1px 0 0px #000, 0 1px 0px #000, 1px 1px 0px #000, -1px 0 0px #000, 0 -1px 0px #000, -1px -1px 0px #000;
transition: padding .3s;
//animation: slideRightIn .3s ${({ delay }) => delay}s forwards;

&:hover {
    padding-left: 5em;
    color: var(--secondcolor);
}
`
export const AsideFooter = styled.div`
position: absolute;
bottom: 0;
left: 0;
display: flex;
justify-content: flex-end;
padding: 1.2em;
svg {
    cursor: pointer;
    fill: white; width: 40px;
}
&:hover svg {
    transition: transform .5s;
    transform: rotate(58deg);
    fill: var(--secondcolor)
}
`