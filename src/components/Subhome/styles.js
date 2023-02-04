import styled from "styled-components";

export const Container = styled.div`
    border-top: 1px solid #201a3f;
    border-bottom: 1px solid #201a3f;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Linha = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1000px;
    padding: 5em;
`;

export const Coluna = styled.div`
    background-color: #201a3f ;
    padding: 4em;
    width: 1000px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 0 4em;
    @media (max-width: 767px) {
        width: 400px;
    }
`;

export const Titulo = styled.label`
    color: #8b60e5;
    font-size: 1.5em;
    @media (max-width: 767px) {
        font-size: 1em;
    }
`;

export const Conteudo = styled.h1`
    color: #8b60e5;
    font-size: 4em;
    font-weight: bold;
    @media (max-width: 767px) {
        font-size: 3em;
    }
`;