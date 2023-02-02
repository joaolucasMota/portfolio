import styled from "styled-components";

export const Container = styled.div`
 background-color: #14142a;
 height: 4em;
 @media (max-width: 767px) {
        height: 6em;
    }
`;

export const Linha = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Coluna = styled.div`
    & svg{
        margin: 1em;
        color: #898995;
    }
`;

export const Coluna2 = styled.div`
    color: #898995;
    align-items: flex-end;
`;