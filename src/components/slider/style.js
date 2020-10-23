import styled from "styled-components"

export const Container = styled.div`
position: relative;
padding: 1em;
`

export const Title = styled.div`
font-family: "Special Elite";
text-transform: uppercase;
margin-bottom: .7em;
text-align: center;
font-size: 1.5em;
`
export const Description = styled.div`
font-family: "Courier New";
text-transform: uppercase;
margin-top: .8em;
padding: 1em;
text-align: center;
`

export const Main = styled.div`
position: relative;
height: 100px;
width: ${({ width }) => width}px;
margin: 0 auto;
overflow: hidden;
white-space: nowrap;
`

export const Content = styled.div`
transform: translateX(-${({ translate }) => translate}px);
transition: transform ease-out ${({ transition }) => transition}s;
height: 100%;
width: ${({ width }) => width}px;
display: flex;
align-items: center;
`

export const Slide = styled.div`
height: ${({ width }) => width}px;
width: ${({ width }) => width}px;
background-image: url('${({ content }) => content}');
background-size: 100% 100%;
background-repeat: no-repeat;
background-position: center;
transition: .5s all;
transform: scale(${({ active }) => !active && ".5"});
`

export const Arrow = styled.div`
display: ${({ hide }) => hide ? "none" : "flex"};
position: absolute;
bottom: 3em;
${({ direction }) => direction === 'right' ? `right: 0` : `left: 0`};
height: 25px;
width: 25px;
justify-content: center;
cursor: pointer;
align-items: center;
transition: transform ease-in 0.1s;
svg {
    fill: white;
    width: 30px;
    height: 30px;
}
&:hover {
    svg {
        fill: var(--secondcolor);
    }
}
`
