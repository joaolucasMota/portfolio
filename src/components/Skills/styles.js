import styled from "styled-components";

export const Container = styled.div.attrs({
    className: "container"
})`
    margin-top: 8em;
    display: flex;
    justify-content: center;
`;

export const Linha = styled.div.attrs({
    className: "row"
})`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Coluna = styled.div`
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

     & span{
        background-color: #14142a;
        border-radius: 4px;
        padding: 5px;
        color: #7b4ae2;
    }

    h1{
        padding-top: .2em;
        font-weight: bold;
        margin-bottom: 2em;
        color: #f1f1f1
    }
    h2{
        padding-top: .2em;
        font-weight: bold;
        margin-bottom: 2em;
        color: #f1f1f1
    }

    svg{
        color: #422c7c;
        margin-right: 1em;
        margin-bottom: 2em;
    }
`;