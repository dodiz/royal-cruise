import styled from "styled-components";

export const Container = styled.div`
padding: 2em;
@media (min-width: 480px) {
}
`
export const Title = styled.div`
font-family: "Special Elite";
font-size: 1.8em;
margin-bottom: .5em;
`
export const SmallText = styled.p`
font-family: "Special Elite";
cursor: pointer;
font-size: 1em;
padding: 2em 0 0 0;

&:hover {
  color: var(--secondcolor);
}
`
export const SubTitle = styled.h3`
padding: 0.5em 0;
color: var(--secondtext);
margin-bottom: 0.8em;
font-weight: normal;
`
export const Base = styled.form``

export const Label = styled.label`
color: var(--thirdtext);
font-size: 1.3em;
margin-bottom: 0.4em;
`
export const Color = styled.input`
box-sizing: border-box;
padding: 1em;
outline: none;
border: 1px solid rgba(255, 255, 255, .15);
&:focus {
  border: 1px solid var(--secondcolor);
}
`

export const Input = styled.input`
box-sizing: border-box;
width: 100%;
background: rgba(255, 255, 255, .05);
padding: 0.6em 0.8em;
outline: none;
font-size: .9em;
font-family: "Courier New";
color: var(--secondtext);
border: 1px solid rgba(255, 255, 255, .15);
&:disabled {
  background: rgba(0, 0, 0, .05);
  color: rgba(255, 0, 0, .6);
}
&:focus {
  border: 1px solid var(--secondcolor);
}
`
export const TextArea = styled.textarea`
resize: none;
background: rgba(255, 255, 255, .05);
box-sizing: border-box;
height: 5em;
padding: 0.6em 0.8em;
width: 100%;
border: 1px solid rgba(255, 255, 255, .15);
outline: none;
font-size: .9em;
font-family: "Courier New";
color: var(--secondtext);
transition: height .5s;
&:disabled {background: rgba(0, 0, 0, .05);
color: rgba(255, 0, 0, .6);
}
&:focus {
  border: 1px solid var(--secondcolor);
  ${({ still }) => !still && "height: 15em"};
}
`

export const Suggestion = styled.div`
color: orange;
padding: 1em 0;
font-size: 0.9em;
height: 0;
animation: show 0.5s ease forwards;

@keyframes show {
    from {
        opacity: 0;
        height: 0;
    }
    to {
        opacity: 1;
        height: auto;
    }
}
`

export const Field = styled.div`
position: relative;
  & ${Label} {
    font-size: 1em;
    text-transform: uppercase;
    font-family: "Special Elite";
    position: absolute;
    top: 1.8em;
    transform: translateY(-50%);
    left: 0.6em;
    transition: all 0.2s;
    cursor: text;
}
  & ${Input} {
    padding: 1.6em 0.7em .6em 0.6em;
    margin-bottom: 1.7em;
}
  & ${Input}:focus + ${Label}, & ${Input}:valid + ${Label} {
    top: 1.2em;
    font-size: 0.8em;
}
  & ${Suggestion} {
    position: relative;
    bottom: 1.7em;
}
`;

export const Button = styled.button`
padding: 0.5em 1.2em .3em 1.2em;
font-size: 1.1em;
font-family: "Special Elite";
text-transform: uppercase;
background: var(--secondcolor);
background: ${({ red }) => red && "rgba(255, 0, 0, .8)"};
border: 0;
border-radius: 5px;
color: white;
cursor: pointer;
margin-top: 1em;
outline: none;
text-shadow: 1px 1px 5px #000;

transition: transform .3s;
transform: scale(${({ isActive }) => isActive ? 1.1 : 1});
border: ${({ isActive }) => isActive ? "2px solid var(--secondyellow)" : "none"};
animation: ${({ animate }) => `slideUpIn .5s ${animate} forwards`};
opacity: ${({ animate }) => animate && 0};

  &:disabled {
    filter: brightness(55%);
    cursor: no-drop;
}
&:hover {
  box-shadow: inset 0 0 50px rgba(255, 255, 255, .3);
}
`

export const Error = styled.div`
color: red;
font-size: 0.8em;
padding: 1em 0.5em;
max-width: 60%;
margin: auto;
animation: showError 0.5s forwards;

@keyframes showError {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`
export const Alert = styled.div`
background: ${({ warning }) => warning && "rgba(255, 255, 91, .5);"};
background: ${({ confirm }) => confirm && "rgba(0, 255, 0, .4)"};
background: ${({ alert }) => alert && "rgba(255, 0, 0, .5)"};
font-family: "Syne";
margin-bottom: 1em;
padding: 1em;
text-align: center;
color: white;
color: ${({ warning }) => warning && "#333"};
opacity: 0;
animation: slideDownIn .5s forwards ${({ hide }) => hide && ", slideUpOut .5s 4.5s forwards"};
${Button} {display: block; margin: auto; margin-top: 1em;}
`
export const Select = styled.select`
border: 1px solid var(--maingrey);
background: rgba(255, 255, 255, .05);
padding: 0.6em 0.8em;
max-width: 200px;
width: 100%;
outline: none;
font-size: 1.2em;
color: var(--secondtext);
&:disabled {
  background: rgba(0, 0, 0, .05);
  color: rgba(255, 0, 0, .6);
}
`
export const Option = styled.option`
background: rgba(0, 0, 0, .9);
`

export const FileText = styled.span`
padding: 0.3em 1.5em;
font-size: 1.1em;
background: ${({ hasFile }) => hasFile ? "rgba(255, 0, 0, .5)" : "var(--secondcolor)"};
border: 0;
border-radius: 5px;
color: white;
cursor: pointer;
margin-top: 1em;
outline: none;
margin-right: 2em;
display: inline-block;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
max-width: 15em;
vertical-align: bottom;
`
export const File = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
  

`
export const FileLabel = styled.label`

cursor: pointer;`

export const CheckboxSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--maingrey);
  transition: .4s;
  border-radius: 34px;

&::before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 4px;
  bottom: 4px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 5px #000;
  transition: .4s;
}
`
export const Checkbox = styled.input`
&:checked + ${CheckboxSlider} {
  background: var(--secondcolor);
}
&:focus + ${CheckboxSlider} {
  box-shadow: 0 0 1px #2196F3;
}
&:checked + ${CheckboxSlider}:before {
  transform: translateX(24px);
}

`
export const CheckboxLabel = styled.label`
cursor: pointer;
position: relative;
display: inline-block;
width: 50px;
height: 25px;
${Checkbox} {
  opacity: 0;
  width: 0;
  height: 0;
}
`
export const Radio = styled.div`
cursor: pointer;
display: flex;
align-items: center;
${Label} {
  margin: 0;
  margin-left: 1em;
}
`
export const Flex = styled.div`
display: flex;
align-items: center;
`