import styled from "styled-components"

export const Container = styled.div`
position: relative;
`

export const HamburgerLine = styled.div`
width: 25px;
height: 2px;
background: white;
margin-top: .4em;
transition: .3s;
`
export const Hamburger = styled.div`
position: fixed;
top: 1em;
left: 1.5em;
z-index: 100;
@media(min-width: 480px) {
    display: none;
}
${HamburgerLine}:nth-child(1) {transform: ${({ showNav }) => showNav && "translateY(8px) rotate(-45deg)"};}
${HamburgerLine}:nth-child(2) {opacity: ${({ showNav }) => showNav && 0};}
${HamburgerLine}:nth-child(3) {transform: ${({ showNav }) => showNav && "translateY(-8px) rotate(45deg)"};}
`
export const Nav = styled.div`
    width: 260px;
    height: 100vh;
    background: url(/images/panelbg.webp);
    background-size: 100%;
    visibility: ${({ showNav }) => showNav ? "unset" : "hidden"};
    transform: translateX(${({ showNav }) => showNav ? "0" : "-50%"});
    opacity: ${({ showNav }) => showNav ? 1 : 0};
    transition: all .5s; 
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    box-shadow: 0 0 30px 0 black;

@media(min-width: 480px) {
    position: absolute;
    top: 2em;
    left: unset;
    right: 1em;
    height: unset;
    width: unset;
    visibility: unset;
    transform: unset;
    opacity: unset;
    text-align: unset;
    background: none;
    box-shadow: unset;
}
`

export const Menu = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
padding: 4em 0;
background: rgba(0, 0, 0, .4);

@media(min-width: 480px) {
    flex-direction: row;
    height: unset;
    padding: 0;
}
`
export const Option = styled.a`
padding: .3em .4em;
font-family: var(--mainfont);
letter-spacing: var(--mainfontspace);
text-transform: uppercase;
font-size: 2.5em;
text-align: center;
border-top: 1px solid rgba(255, 255, 255, .2);
border-bottom: 1px solid rgba(255, 255, 255, .4);
cursor: pointer;
&:hover {
    background: rgba(255, 255, 255, .1);
    color: var(--secondcolor);
}
@media(min-width: 480px) {
    border: 0;
}
`
export const Main = styled.div`
height: 100vh;
color: var(--maintext);
position: relative;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 90%, black 100%);
&::before {
    content: "";
    position: absolute; top: 0; left: 0;
    width: 100%; height: 100vh;
    z-index: -1;
    background: url(/images/landbg.webp);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
`
export const Title = styled.div`
text-transform: uppercase;
font-family: var(--mainfont);
letter-spacing: var(--mainfontspace);
`
export const SubTitle = styled.div`
font-style: italic;
margin-top: .5em;
color: var(--secondcolor);
`
export const Bar = styled.div`
position: absolute; bottom: 4em;
left: 50%;
width: 100%;
transform: translateX(-50%);
text-align: center;
animation: slideUpIn 1s, slideBg 5s infinite;
background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 100%);
background-size: 400% 400%;
animation: slideBg 5s infinite;
padding: 1em 0;
${Title} {
    font-size: 3.5em;
}
@media(min-width: 480px) {
    bottom: 8em;
}
`
export const Jumbotron = styled.div`
max-width: 980px;
margin: auto;
margin-bottom: 3em;
border-bottom: 1px solid rgba(255, 255, 255, .3);
@media(min-width: 480px) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: ${({ reverse }) => reverse && "row-reverse"};
    height: 300px;
}
`
export const Header = styled.div`

${Title} {
    font-size: 3em;
    text-align: center;
    padding: .2em 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 100%);
}
@media(min-width: 480px) {
    width: 35%;
    background: url(/images/${({ bg }) => bg});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    ${Title} {
        
    color: var(--secondcolor)
    }
}
`
export const Body = styled.div`
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Courier new;
    text-align: justify;

@media(min-width: 480px) {
    width: 60%
}
`
export const Description = styled.div`
overflow: auto;
max-height: 200px;
padding: 0 1em 0 0;
`
export const Faq = styled.div`
max-width: 980px;
margin: auto;

margin-bottom: 1em;
`
export const FaqHeader = styled.div`
padding: .8em 0 .8em 1em;
font-family: var(--mainfont);
letter-spacing: var(--mainfontspace);
font-size: 2em;
text-transform: uppercase;
border: 4px dashed black;
cursor: pointer;


background: rgba(255, 255, 255, .2);
&:hover {
    background: rgba(255, 255, 255, .25);
}
`
export const FaqBody = styled.div`
padding: 1em;
font-family: 'Courier New';
display: ${({ show }) => !show && "none"};

`
