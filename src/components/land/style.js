import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
`
export const Title = styled.div`
font-family: "Special Elite";
text-transform: uppercase;
font-size: 2em;
padding: .3em 0;
color: var(--mainlightgrey);
border-bottom: 1px solid rgba(255, 255, 255, .05);

`
export const Chat = styled.div`
background: rgba(0, 0, 0, .5);
padding: 1em;
overflow: auto;
height: 100%;

`
export const Role = styled.div`
box-shadow: 0 0 20px 0px rgba(0, 0, 0, .5);
border-radius: ${({ reverse }) => reverse ? "20px 0 0 20px" : "0 20px 20px 0"};

@media(min-width: 480px) {
    margin: ${({ reverse }) => reverse ? "2em 0 0 80px" : "2em 80px 0 0"};
}
`

export const RoleTop = styled.div`
background: rgba(255, 255, 255, .05);
display: flex;
align-items: center;
padding: 0 .6em;
justify-content: space-between;
flex-direction: ${({ reverse }) => reverse && "row-reverse"};
border-radius: ${({ reverse }) => reverse ? "20px 0 0 0" : "0 20px 0 0"};
`
export const PgName = styled.div`
text-transform: uppercase;
font-family: "Special Elite";
`
export const Date = styled.div`
padding: .5em;
font-weight: bold;
font-family: "Special Elite";
`
export const RoleContent = styled.div`
width: 100%;
background: ${({ reverse }) => reverse ? "rgba(204, 204, 153, .12)" : "rgba(153, 204, 204, .06)"};
border-radius: ${({ reverse }) => reverse ? "0 0 0 20px" : "0 0 20px 0"};
`
export const Avatar = styled.div`
height: 110px;
width: 100px;
margin: .6em .6em .3em .6em;
background: url("${({ bg }) => bg}") no-repeat;
background-size: 100%;
float: ${({ reverse }) => reverse ? "right" : "left"};
`
export const RoleMessage = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
text-align: justify;
padding: .7em;
font-size: .9em;
min-height: 120px;
`
export const Action = styled.div`
align-items: center;
justify-content: center;
background: rgba(0, 0, 0, .5);
padding: .5em;
`
export const ActionBox = styled.div`
padding: .4em;
background: rgba(204,204,153,.12);
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 50px;
`
export const ActionInput = styled.input`
width: 100%;
background: none;
border: none;
outline: none;
color: rgba(255, 255, 255, .8);
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
padding: .3em;
font-size: 1em;
box-sizing: border-box;
`
export const ActionIcon = styled.div`
height: 30px;
width: 30px;
border-radius: 50px;
svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    transition: all .5s;
    fill: grey;
}
svg:hover {
    fill: white;
}
`
export const ActionPopup = styled.div`
transition: all .3s;
transform: scale(${({ show }) => show ? "1" : "0"});
height: 200px;
background: url("${({ bg }) => bg}");
position: absolute;
bottom: 5em;
padding: .5em;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, .5);
`
export const ActionPopupTitle = styled.div``
export const ActionPopupField = styled.div``