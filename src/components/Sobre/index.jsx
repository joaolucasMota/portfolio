import { Linha, Container, Coluna1, Coluna2 } from "./styles";
import Eu from "../../assets/minhafoto.jpg"
import React, { useState, useEffect } from 'react';


export default function SobreMim(){

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, []);

    return(
        <Container id="section2">
            {width > 767 ? (
            <Linha>
                <Coluna1>
                    <img src={Eu} alt="minha foto" />
                </Coluna1>
                <Coluna2>
                    <span>🧐 Sobre mim</span>
                    <h1>João Lucas Mota</h1>
                    <p>🖐️ Meu nome é João Lucas Mota Marques Dias, mas pode me chamar de João</p>
                    <br />
                    <p>📚 Estudando constantemente tecnologias Front-end a um ano.</p>
                    <p>🎓 Terceiro semestre de Análise e Desenvolvimento de Sistemas</p>
                    <p>💡 Interesse em desenvolvimento Front-end com React JS</p>
                    <br />
                    <p>💭 "Se você pode sonhar, você pode fazer"</p>
                </Coluna2>
            </Linha>
            ) : (
                <Linha>
                    <Coluna1>
                        <img src={Eu} alt="minha foto" />
                    </Coluna1>
                    <Coluna2>
                        <span>🧐 Sobre mim</span>
                        <h1>João Lucas Mota</h1>
                        <p>Mas pode me chamar de João. Desenvolvo interfaces e estudo tecnologias Front-end a pouco mais de um ano, tenho conhecimento em criação de landing page, blog, site institucional, pequenos sistemas para cadastro de pessoas ou empresas com autenticação de login e senha integrando com o Firebase. Venha me apresentar o seu projeto ou ideia para que possamos conversar.</p>
                        <br />
                        <p>💭 "Se você pode sonhar, você pode fazer"</p>
                    </Coluna2>
                </Linha>
            )}
        </Container>
    )
}