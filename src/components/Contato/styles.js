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
`;


export const Coluna = styled.div.attrs({
    
})`
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
        color: #7b4ae2;
    }
    div{
        display: flex;
        flex-direction: row;
    }

        
`;

export const Vamosconv = styled.a`
    padding:10px;
    border: 1px solid #090e16;
    transition: all 0.5s ease-in-out;
    color: #7b4ae2;
    border: 1px solid #7b4ae2;
    border-radius: 10px;
    @media (max-width: 767px) {
        font-size: 1em;
        padding: 3px;
    }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmailLink = styled.div`
  color: #84868a ;
  margin-left: 2em;
  @media (max-width: 767px) {
        font-size: .6em;
    }
`;

export const CopyButton = styled.button`
  background-color: #090e16;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const Voltar = styled.a`
    background-color: #090e16;
    margin-top: 4em;
    margin-bottom: 4em;
    cursor: pointer;
    color: #7b4ae2;
    &:hover{
        color: #7b4ae2;
    }
`;
