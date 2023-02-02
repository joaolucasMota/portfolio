import {Container, Linha, Coluna} from "./styles";
import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaJs, FaGithub, FaFigma } from "react-icons/fa";
import {SiFirebase, SiStyledcomponents, SiVite} from "react-icons/si"
import { useState, useEffect } from "react";

export default function Skills(){

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, []);

    return(
        <Container id="section4">
            <Linha>
                <Coluna>
                    <span>🤹 Skills - Experiências</span>
                    {width > 767 ? (<h1>Tecnologias e Habilidades</h1>
                    ) :(
                    <h2>Tecnologias e Habilidades</h2>)
                    }
                    <div>
                        <FaReact size= {width > 767 ? 70 : 35}/>
                        <FaHtml5 size={width > 767 ? 70 : 35}/>
                        <FaCss3 size={width > 767 ? 70 : 35}/>
                        <FaBootstrap size={width > 767 ? 70 : 35}/>
                        <FaFigma size={width > 767 ? 70 : 35}/>
                        <div>
                            <FaJs size={width > 767 ? 70 : 35}/>
                            <SiFirebase size={width > 767 ? 70 : 35}/>
                            <SiStyledcomponents size={width > 767 ? 70 : 35}/>
                            <FaGithub size={width > 767 ? 70 : 35}/>
                            <SiVite size={width > 767 ? 70 : 35}/>
                        </div>
                    </div>
                </Coluna>
            </Linha>
        </Container>
    )
}