
import { Container, Linha, Coluna, EmailContainer, EmailLink, CopyButton, Voltar, Vamosconv} from "./styles";
import { FaWhatsapp, FaCopy, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import {HiOutlineArrowUp} from "react-icons/hi";

export default function Contato(){

    const [copiado, setCopiado] = useState(false)

    const copyEmail = () => {
        navigator.clipboard.writeText('joaolucasmmd@gmail.com').then(
           async function() {
                setCopiado(true);
                await new Promise(resolve => setTimeout(resolve, 2000));
                setCopiado(false)
            }
        );

    };

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, []);

    return(
        <Container id="section5">
            <Linha>
                <Coluna>
                    <span>📫 Contatos</span>
                    {width > 767 ?(<h1>Entre em contato comigo</h1>
                    ):(
                        <h2>Entre em contato comigo</h2>
                    )}
                    
                    <div>
                        <Vamosconv href="https://wa.me/5511993482318" target="_blank"><FaWhatsapp/> Vamos conversar</Vamosconv>
                        <EmailContainer>
                            <EmailLink>joaolucasmmd@gmail.com</EmailLink>
                            <CopyButton onClick={copyEmail}>{copiado ? <FaCheck/> : <FaCopy/>} </CopyButton>
                        </EmailContainer>
                    </div>
                    <div>
                        <Voltar active href="#section9">Voltar ao topo<HiOutlineArrowUp size={20}/></Voltar>
                    </div>
                    
                </Coluna>
            </Linha>
        </Container>
    )
}