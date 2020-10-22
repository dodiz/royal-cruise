import styled from "styled-components"

export const Container = styled.div`
`
export const NavIcon = styled.div`
display: inline-block;
cursor: pointer;
z-index: 98;
fill: var(--maingrey);
`
export const Nav = styled.div`
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    height: 100vh;
    width: 260px;

    visibility: ${({ showNav }) => showNav ? "unset" : "hidden"};
    transform: translateX(${({ showNav }) => showNav ? "0" : "50%"});
    opacity: ${({ showNav }) => showNav ? 1 : 0};
    transition: all .5s; 
    
    & ${NavIcon} {
        
    }
    
`
export const Menu = styled.div`
`
export const Option = styled.div`
&:hover {
}
`