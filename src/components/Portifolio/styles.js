import styled from "styled-components";

export const Container = styled.div.attrs({
    className: "container "
})`

`;

export const Linha = styled.div.attrs({
    className: "row"
})`

`;


export const Coluna = styled.div`
    margin-bottom: 1em;
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
`;

export const Linha2 = styled.div.attrs({
    className: "row d-flex"
})`
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const Coluna1 = styled.div`

    width: 250px;
    height: 350px;
    overflow: hidden;
    position: relative;
    color: #f1f1f1;
    border: 1px solid  #7b4ae2;
    border-radius: 10px;
    margin: 1em;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;

    & img{
        width: 100%;
        height: 8em;
        opacity: 0.5;
        transition: opacity 0.5s ease;
        border-radius: 10px;
        margin-top: .5em;
        
    }
    img:hover{
        opacity: 1;
        
    }

    p{
        font-size: .8em;
        margin-bottom: 5em;
        color: #84868a;
    }

    @media (max-width: 767px) {
        flex: 0 0 auto;
    }
`;

export const Coluna2 = styled.div`

    width: 250px;
    height: 350px;
    overflow: hidden;
    position: relative;
    color: #f1f1f1;
    border: 1px solid  #7b4ae2;
    border-radius: 10px;
    margin: 1em;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;

    & img{
        width: 100%;
        height: 8em;
        opacity: 0.5;
        transition: opacity 0.5s ease;
        border-radius: 10px;
        margin-top: .5em;
        
    }
    img:hover{
        opacity: 1;
        
    }

    p{
        font-size: .8em;
        margin-bottom: 2em;
        color: #84868a;
    }
`;

export const Span2 = styled.span`
    background-color: #14142a;
    padding: .2em .5em;
    margin-left: .5em;
    margin-right: 1em;
    border-radius: 4px;
    font-size: .9em;
    font-weight: bold;
    color: #7b4ae2;
`;

export const Span0 = styled.span`
    background-color: #1c4e3b;
    padding: .2em .5em;
    margin-left: .5em;
    margin-right: 1em;
    border-radius: 4px;
    font-size: .9em;
    font-weight: bold;
    color: #4ae290;
`;

export const Span1 = styled.span`
    background-color: #14142a;
    padding: .2em .5em;
    margin-left: .5em;
    margin-right: 1em;
    border-radius: 4px;
    font-size: .9em;
    font-weight: bold;
    color: #7b4ae2;
`;



