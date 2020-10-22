import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    
    @font-face {
        font-family: 'royal';
        src: url('https://dodiz.github.io/re7-webfont.woff2') format('woff2')
    }
    body {
        font-size: ${({ settings }) => settings.fontSize};
    }
    :root {
	/*VARS*/
        --maintext: rgb(194, 193, 188);
        --mainlightgrey: rgb(164, 163, 158);
        --secondcolor: rgba(204, 204, 153, 1);
        --maingrey: rgb(92, 92, 92);
        --mainfont: 'royal';
        --mainfontspace: 1px;
    }
    #root {

    }
    body, html, div, ul, li, nav, header, aside, article, main {
        color: var(--maintext);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
        background: black;
    }
    a {
        font-family: inherit;
        text-decoration: inherit;
        color: inherit;
    }
    /* ANIMATIONS */

    @keyframes slideBg {
        0% {background-position: 0% 30%} 
        50% {background-position: 100% 71%} 
        100% {background-position: 0% 30%}
    }
    @keyframes slideUpIn {
        from {opacity: 0; transform: translateY(50px)}
        to {opacity: 1; transform: translateY(0)}
    }
    @keyframes slideUpOut {
        from {opacity: 1; transform: translateY(0)}
        to {opacity: 0; transform: translateY(-100%)}
    }
    @keyframes slideDownIn {
        from {opacity: 0; transform: translateY(-50px)}
        to {opacity: 1; transform: translateY(0)}
    }
    @keyframes slideRightIn {
        from {opacity: 0; transform: translateX(-50px)}
        to {opacity: 1; transform: translateY(0)}
    }
    @keyframes slideLeftIn {
        from {opacity: 0; transform: translateX(50px)}
        to {opacity: 1; transform: translateY(0)}
    }
    @keyframes scaleIn {
        from {transform: scale(0)}
        to {transform: scale(1)}
    }
    @keyframes rotate {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(359deg);
        }
    }
    @keyframes openBox {
        0% {
            width: 0;
            height: 0;
        }
        100% {
            width: max-content;
            height: max-content;
        }
    }
    /* SCROLLBAR */
    ::-webkit-scrollbar {
        width: 11px;
        height: 11px
    }
    ::-webkit-scrollbar-button {
        width: 0;
        height: 0
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(204,204,153,.12);
        border: 0 none #FFFFFF;
        border-radius: 0; -moz-border-radius: 0
    }
    ::-webkit-scrollbar-thumb:active {
        background: #4E5B4A
    }
    ::-webkit-scrollbar-track {
        background: rgba(204,204,153,.12);
        border: 0 none #FFFFFF;
        border-radius: 0; -moz-border-radius: 0
    }
    ::-webkit-scrollbar-corner {
        background: transparent
    }


        /* BOOTSTRAP */
    .modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
    }

    .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;   
    }

    .modal.fade .modal-dialog {
    transition: transform .3s ease-out;
    transform: scale(0);
    margin: 2em auto;
    }

    @media (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
        transition: none;
    }
    }

    .modal.show .modal-dialog {
    transform: scale(1);
    }

    .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
    }

    .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    }

    .modal-backdrop.fade {
    opacity: 0;
    }

    .modal-backdrop.show {
    opacity: 0.5;
    }

    @media (min-width: 576px) {
    .modal-dialog {
        max-width: 500px;
        margin: 1.75rem auto;
    }
    }

    .modal-sm {
    max-width: 300px;
    }

    @media (min-width: 992px) {
    .modal-lg,
    .modal-xl {
        max-width: 800px;
    }
    }
    .modal-xxl {
        max-width: 1200px;
    }   
`