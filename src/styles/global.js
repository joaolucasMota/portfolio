import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body, #root{
    min-height: 100vh;
    }

    body{
        background-color: #090e16;
        font-family: 'M PLUS Rounded 1c', sans-serif;
    }

    a,i{
    transition: .5s;
    text-decoration: none;
    color: inherit;
}
`;