import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swa');

    html, body, #root {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
