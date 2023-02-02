import styled from "styled-components";

export const Container = styled.div.attrs({
    className: "container"
})`
    display: flex;    
    justify-content: center;
    margin-top: 5em;
    margin-bottom: 5em;
`;

export const Linha = styled.div.attrs({
    className: "row"
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
    background-color: none;
    flex-direction: start;

    & span{
        background-color: #14142a;
        border-radius: 4px;
        padding: 5px;
        color: #7b4ae2;
    }

    h1{
        padding-top: .5em;
        font-weight: bold;
        margin: 0;
        color: #f1f1f1
    }

    p{
        color: #84868a;
        margin: 0;
     }

    svg{
        margin-right: 1em;
        color: #84868a;
        transition: all 0.5s ease-in-out;
    }

    svg:hover{
        color: #f1f1f1
    }

    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        margin-top: -4em;
        
        & a{
            margin-left:2em;
        }
    }

`;

export const Coluna2 = styled.div.attrs({
    className: "col"
})`

    & img{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        box-shadow: 0 0 10px 2px #7b4ae2;
    }
    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        margin-top: 2em;
        margin-bottom: 1em;

        & img{
        width: 250px;
        height: 250px;
        border-radius: 50%;
        box-shadow: 0 0 10px 2px #7b4ae2;
        
        }

    }
`;

export const Coluna3 = styled.div.attrs({
    className: "col"
})`
    color: #7b4ae2;
    text-align: right;

    & div{
        margin-top:1.5em;
    }
    
    a{
        padding:10px;
        border: 1px solid #090e16;
        transition: all 0.5s ease-in-out;
        
    } 
    
    a:hover{
        border: 1px solid #7b4ae2;
        color: #7b4ae2;
        border-radius: 10px;
    }

    svg{
        color: #7b4ae2;
    }

    @media (max-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: center;
        
        & a{
            margin-left:10px;
            margin-top: .5em;
        }
    }
`;

export const MobileCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & span{
        background-color: #33245F;
        border-radius: 4px;
        padding: 5px;
        color: #7b4ae2;
        margin-top: 1em;
        margin-bottom: .3em;
    }

    h1{
        font-weight: bold;
        margin: 0;
        color: #f1f1f1
    }

    p{
        color: #84868a;
        margin: 0;
     }
`;