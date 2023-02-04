import { Container, Linha, Coluna1, Coluna2, Coluna3, MobileCol } from "./styles";
import {FaGithub, FaLinkedin, FaStackOverflow, FaDownload, FaWhatsapp} from "react-icons/fa";
import Cv from "../../assets/CV.pdf";
import React, { useContext } from 'react';
import { AuthContext } from "../../contexts/width";


export default function Home(){

    const {width} = useContext(AuthContext);

    return(
        <Container id="section9">
            {width > 767 ? (
            <Linha>
                <Coluna1>
                    <span>✌ Saudações</span>
                    <h1>João L. Mota</h1>
                    <p>Front-end Developer</p>
                    <a 
                    alt="link para linkedin" 
                    href="https://www.linkedin.com/in/joao-lucas-mota-125966232/" 
                    target="_blank"
                    >
                        <FaLinkedin className="icone" size={24}/>
                    </a>
                    <a 
                    alt="link para github" 
                    href="https://github.com/joaolucasMota" 
                    target="_blank"
                    >
                        <FaGithub size={24}/>
                    </a>
                    <a href="#">
                        <FaStackOverflow size={24}/>
                    </a>
                </Coluna1>

                <Coluna2>
                    <img src="https://i.pinimg.com/originals/09/c6/29/09c62903beeba336dc9da76eb5c9a107.gif"></img>
                </Coluna2>
                
                <Coluna3>
                    <a alt="link para download do CV" href={Cv} download>Baixar CV  <FaDownload size={13}/></a>
                    <br />
                    <div><a alt="link para meu whatsapp" href="https://wa.me/5511993482318" target="_blank"><FaWhatsapp/> Vamos conversar</a></div>
                    
                </Coluna3>
            </Linha>
            ) : (
                <Linha>
                    <Coluna1>
                        <a href="https://www.linkedin.com/in/joao-lucas-mota-125966232/" target="_blank">
                            <FaLinkedin className="icone" size={40}/>
                        </a>
                        <a href="https://github.com/joaolucasMota" target="_blank">
                            <FaGithub size={40}/>
                        </a>
                        <a href="#">
                            <FaStackOverflow size={40}/>
                        </a>
                    </Coluna1>

                    <Coluna2>
                        <img src="https://i.pinimg.com/originals/09/c6/29/09c62903beeba336dc9da76eb5c9a107.gif"></img>
                    </Coluna2>
                    <MobileCol>
                        <span>✌ Saudações</span>
                        <h1>João Lucas Mota</h1>
                        <p>Front-end Developer</p>
                    </MobileCol>
                    <Coluna3>
                        <a href={Cv} download>Baixar CV  <FaDownload size={13}/></a>
                        <a href="https://wa.me/5511993482318" target="_blank"><FaWhatsapp/> Vamos conversar</a>
                    </Coluna3>

                </Linha>
            )}
        </Container>
    );
}