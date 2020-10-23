import styled from "styled-components"

export const Container = styled.div``
export const Box = styled.div`
margin-top: 1em;
`
export const BoxHeader = styled.div`
padding: 1em;
background: rgba(0, 0, 0, .4);
cursor: pointer;
&:hover {
    background: rgba(0, 0, 0, .2);
}
`
export const BoxBody = styled.div`
display: ${({ hide }) => hide && "none"};
padding: .8em;
background: rgba(0, 0, 0, .1);

`
export const Date = styled.div`
font-size: .8em;
`
export const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
svg {
    height: 30px;
    width:30px;
    fill: white;
    transform: rotate(${({ hide }) => !hide && "90deg"});
}
`
export const Title = styled.div`
text-transform: uppercase;
font-size: 1.2em;
`