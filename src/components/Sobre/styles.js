import styled from "styled-components";

export const Container = styled.div.attrs({
    className: "container container-padrao"
})`
    display: flex;    
    justify-content: center;
    margin-top: 10em;
    margin-bottom: 10em;
`;

export const Linha = styled.div.attrs({
    className: "row row-padrao"
})`
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1000px;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Coluna1 = styled.div.attrs({
    className: "col"
})`
    & img{
        height:300px;
        width:300px;
        border-radius: 50%;
        background-size: cover;
        box-shadow: 0 0 10px 2px #7b4ae2;
    }

    @media (max-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: center;

        & img{
            height:250px;
            width:250px;
            border-radius: 50%;
            background-size: cover;
            box-shadow: 0 0 10px 2px #7b4ae2;
        }
    }

`;

export const Coluna2 = styled.div.attrs({
    className: "col"
})`
    margin-left: -5em;

    @media (max-width: 767px) {
        margin: 0;
    }


    & span{
        background-color: #14142a;
        border-radius: 4px;
        padding: 5px;
        color: #7b4ae2;
    }

    h1{
        padding-top: .5em;
        font-weight: bold;
        margin-bottom: 5px;
        color: #f1f1f1
    }

    p{
        color: #84868a;
        margin: 0;
     }
`;