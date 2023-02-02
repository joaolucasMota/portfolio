
import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em;
    margin-bottom: 3em;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const NavItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #14142a;
    width: 1000px;
    padding: .5em;
    border-radius: 10px;
`;

export const NavLink = styled.a`
    margin-right: 1em;
    color: #84868a;

    &:hover{
        color: #f1f1f1;
    }

`;