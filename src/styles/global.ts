import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --input-background: #e7e9ee;
        --input-border: #d7d7d7;
        --text: #969CB3;
        --title: #363F5F;
        --white: #FFFFFF;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --green: #33CC95;
        --green-light: rgba(51, 204, 149, 0.1);
        --red: #E62E4D;
        --red-light: rgba(230, 46, 77, 0.1);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }

        @media(max-width: 728px){
            font-size: 87.5%;
        }
        background: var(--background);

    }

    body: {
        -webkit-font-smothing: antialiased;
    }

    body, input, text-area, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: var(--text);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        border: 0;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        padding: 3rem;

        background: var(--background);
        position: relative;
        border-radius: 0.25rem;
    }

    .close-button {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;

        border-radius: 50%;
        background: transparent;
      }
`;