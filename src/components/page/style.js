import styled from "styled-components"

export const Container = styled.div`
font-family: "Courier New";
padding: 1.5em;
`
export const Title = styled.div`
font-family: "Special Elite";
text-transform: uppercase;
font-size: 2em;
padding: .5em 0;
color: var(--mainlightgrey);
border-bottom: 1px solid var(--maingrey);
`
export const SmallTitle = styled.div`
font-family: "Special Elite";
text-transform: uppercase;
font-size: .8em;
color: var(--mainlightgrey);
cursor: pointer;
&:hover {
    color: white;
}
`

export const SplashDescription = styled.div`
line-height: 1.5em;
padding: 1em;
word-wrap: break-word;

`
export const SubTitle = styled.div`
margin-top: 1em;
font-family: "Special Elite";
text-transform: uppercase;
font-size: 1.2em;
padding: .5em;
background: rgba(0, 0, 0, .4);
`
export const Fields = styled.div`
`

export const Field = styled.div`
font-family: "Courier New";
text-transform: uppercase;
padding: .5em;
border-bottom: 1px solid rgba( 0, 0, 0, .2);
align-items: center;
justify-content: space-between;
max-width: 700px;
height: max-content;
overflow: hidden;
input, textarea {
    width: 100%;
}
svg {
    float: right
}
@media(min-width: 480px) {
    
    display: flex;
    input, textarea {
        width: 400px
    }
    
    svg {
        float: unset
    }
}
&:hover {
    cursor: ${({ button }) => button && "pointer"};
    background: ${({ button }) => button && "rgba(255, 255, 255, .05)"};
}
`
export const FHeader = styled.div``
export const FBody = styled.div``

export const Suggestion = styled.div`
position: fixed;
top: 1em;
left: 50%;
transform: translateX(-50%);
display: flex;
align-items: center;
text-align: center;
padding: 1.2em;
overflow-y: auto;
max-width: 300px;
background: rgba(0, 0, 0, .35);
border: 1px solid rgba(255, 255, 255, .15);
transition: all .3s;
cursor: pointer;
text-transform: initial;
z-index: 999;

transform: scale(${({ show }) => show ? "1" : "0"});
visibility: ${({ show }) => show ? "unset" : "hidden"};

&::before {
    content: "X";
    font-weight: bold;
    font-size: .8em;
    padding: .4em;
    position: absolute;
    top: 0;
    right: 0;
    height: 10px;
    width: 10px;
    font-size: "Impact";
    background: rgba(255, 0, 0, .5);
}
@media(min-width: 480px) {
    left: unset; 
    right: 0;
    top: 50%;
    min-height: 200px;
    transform: translateY(-50%) scale(${({ show }) => show ? "1" : "0"});
}
`
export const Grid = styled.div`
margin-top: 2em;
display: grid;
grid-template: repeat(auto-fit, minmax(min-content, max-content)) / repeat(2, minmax(min-content, max-content));
grid-gap: 1em;
@media(min-width: 480px) {
    grid-template-columns: repeat(3, minmax(min-content, max-content));
}

`
export const GridItem = styled.div`
background: rgba(0, 0, 0, .5);
padding: 2em;
text-transform: uppercase;
text-align: center;
font-family: "Special Elite";
position: relative; 
cursor: pointer;
&:hover {
    background: rgba(0, 0, 0, .3);
}
`
export const SmallAlert = styled.div`
position: absolute; top: -10px; right: -10px;
padding: .1em .45em .2em .45em;
font-family: Verdana, sans-serif;
border: 1px solid rgba(255, 255, 255, .4);
border-radius: 100%;
background: rgba(255, 0, 0, .5);
`
export const Input = styled.div`
text-align: right;
width: 400px;
max-height: 150px;
overflow-y: auto;
background: rgba(255, 255, 255, .05);
padding: 0.6em 0.8em;
outline: none;
font-size: .9em;
font-family: "Courier New";
color: var(--secondtext);
border: 1px solid rgba(255, 255, 255, .15);

`
