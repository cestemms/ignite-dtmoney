import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --text: #969CB3;
        --title: #363F5F;
        --white: #FFFFFF;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --green: #33CC95;
        --red: #E62E4D;
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
`;