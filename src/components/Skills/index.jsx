import {Container, Linha, Coluna} from "./styles";
import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaJs, FaGithub, FaFigma } from "react-icons/fa";
import {SiFirebase, SiStyledcomponents, SiVite, SiNextdotjs, SiRuby, SiGit, SiPython, SiAngular, SiTsnode, SiSass, SiMysql, SiNetlify, SiPhp } from "react-icons/si"
import { useContext } from "react";
import { AuthContext } from "../../contexts/width";

export default function Skills(){

    const {width} = useContext(AuthContext);

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
                        <FaReact size= {width > 767 ? 110 : 50}/>
                        <FaHtml5 size={width > 767 ? 110 : 50}/>
                        <FaCss3 size={width > 767 ? 110 : 50}/>
                        <FaBootstrap size={width > 767 ? 110 : 50}/>
                        <FaFigma size={width > 767 ? 110 : 50}/>
                        <div>
                            <FaJs size={width > 767 ? 110 : 50}/>
                            <SiFirebase size={width > 767 ? 110 : 50}/>
                            <SiStyledcomponents size={width > 767 ? 110 : 50}/>
                            <FaGithub size={width > 767 ? 110 : 50}/>
                            <SiVite size={width > 767 ? 110 : 50}/>
                        </div>
                        <div>
                            <SiNextdotjs size={width > 767 ? 110 : 50}/>
                            <SiRuby size={width > 767 ? 110 : 50}/>
                            <SiGit size={width > 767 ? 110 : 50}/>
                            <SiPython size={width > 767 ? 110 : 50}/>
                            <SiAngular size={width > 767 ? 110 : 50}/>
                        </div>
                        <div>
                            <SiTsnode size={width > 767 ? 110 : 50}/>
                            <SiSass size={width > 767 ? 110 : 50}/>
                            <SiMysql size={width > 767 ? 110 : 50}/>
                            <SiNetlify size={width > 767 ? 110 : 50}/>
                            <SiPhp size={width > 767 ? 110 : 50}/>
                        </div>
                    </div>
                </Coluna>
            </Linha>
        </Container>
    )
}