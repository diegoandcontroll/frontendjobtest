import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #F9F9F9;
        --primary: #0F52BA;
        --white: #fff
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }

    body{
        background: var(--background);
    }
   
`;