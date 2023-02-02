import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import {Container, Linha, Coluna, Coluna2} from "./styles";

export default function Footer(){
    return(
        <Container>
            <Linha>
                <Coluna>
                    <a 
                    alt="link para linkedin" 
                    href="https://www.linkedin.com/in/joao-lucas-mota-125966232/" 
                    target="_blank"
                    >
                        <FaLinkedin className="icone" size={30}/>
                    </a>
                    <a 
                    alt="link para github" 
                    href="https://github.com/joaolucasMota" 
                    target="_blank"
                    >
                        <FaGithub size={30}/>
                    </a>
                    <a href="#">
                        <FaStackOverflow size={30}/>
                    </a>
                </Coluna>

                <Coluna2>
                    Copyright &copy; João Lucas Mota - 2023
                </Coluna2>
            </Linha>
        </Container>
    )
}