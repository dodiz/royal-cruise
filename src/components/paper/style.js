import styled from "styled-components"

export const Container = styled.div`
max-width: 800px;
position: relative;
color: black;
font-family: "Courier new";
animation: scaleRotateIn .5s forwards;

&::before {
    content: "";
    background: url(${({ bg }) => bg}) no-repeat;
    background-size: 100% 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5), inset 0 0 20px rgba(0, 0, 0, .5);
    position: absolute; top: 0; left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: brightness(.4) grayscale(80%);
}
@keyframes scaleRotateIn {
    from {transform: scale(0) rotate(-1deg)}
    to {transform: scale(1) rotate(-1deg)}
}
`
export const Flex = styled.div`
display: flex;`

export const Title = styled.div`
padding: 0 .3em 0 0;
margin-right: .3em;
text-transform: uppercase;
border-right: 3px solid rgba(0, 0, 0, .3);`

export const Tabs = styled.div`
display: flex;
align-items: center;
`
export const Tab = styled.div`
margin-right: 1em;
text-transform: uppercase;
transition: border .5s;
cursor: pointer;
&:hover {
    border-bottom: 1px solid rgba(0, 0, 0, .3);
}
`
export const TabContent = styled.div`
display: ${({ tab, id }) => (tab != id) && "none"};
padding: 1em 0;
padding: .2em;
border: 3px solid rgba(0, 0, 0, .3);
border-top: 0;
border-radius: 2px;
`
export const Fields = styled.div`
width: 100%;
height: 400px;
overflow-y: auto;
&::-webkit-scrollbar {
        width: 7px;
        height: 11px
    }
&::-webkit-scrollbar-thumb {
        background: #374C49;
        border: 0 none #FFFFFF;
        border-radius: 0; -moz-border-radius: 0
    }
&::-webkit-scrollbar-thumb:active {
        background: #4E5B4A
    }
&::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, .5);
        border: 0 none #FFFFFF;
        border-radius: 0; -moz-border-radius: 0
    }
&::-webkit-scrollbar-corner {
        background: transparent
    }
`
export const FieldTitle = styled.div`
font-size: 1.1em;
text-transform: uppercase;
color: rgba(255, 255, 255, .5);
text-shadow: 1px 1px 0 rgba(0, 0, 0, .5);
font-weight: bold;
`
export const FieldContent = styled.div`
border-bottom: 3px dashed rgba(0, 0, 0, .3);
`
export const Image = styled.div`
transform: rotate(2deg);
width: 200px;
height: 250px; 
padding: 2em;
border: 5px solid rgba(0, 0, 0, .8);
position: relative;
background: url("https://pbs.twimg.com/profile_images/996066780828217345/Ovopts97.jpg") no-repeat;
background-position: center;
&::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: rgba(255, 255, 255, .5);
    box-shadow: 0 -5px 20px rgba(0, 0, 0, .5);
}
`
export const Field = styled.div`
padding: .5em;
border-bottom: 2px solid rgba(0, 0, 0, .2);
display: ${({ line }) => line && "flex"};
justify-content: space-between;
${FieldContent} {
    ${({ textarea }) => textarea && "border: 0; margin-top: 1em; max-height: 300px; word-break: break-word;"}
    overflow: auto;
}
${FieldTitle} {
    ${({ textarea }) => textarea && "font-size: 1.4em; letter-spacing: 2px;"}
}
`