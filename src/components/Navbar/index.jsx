
import {Nav, NavItem, NavLink} from "./styles"

export default function Navbar(){
    return(
        <Nav id="section1">
            <NavItem id="section0">
                <NavLink
                active
                href="#section1"
                >
                    Home
                </NavLink>
                <NavLink
                active
                href="#section2"
                >
                    Sobre mim
                </NavLink>
                <NavLink
                active
                href="#section3"
                >
                    Portifolio
                </NavLink>
                <NavLink
                active
                href="#section4"
                >
                    Skills
                </NavLink>
                <NavLink
                active
                href="#section5"
                >
                    Contato
                </NavLink>
            </NavItem>
            
        </Nav>
    );
}