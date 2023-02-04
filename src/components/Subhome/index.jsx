import {Container, Linha, Coluna, Titulo, Conteudo} from "./styles"

export default function Subhome(){
    return(
        <Container>
            <Linha>
                <Coluna>
                    <Titulo>Desenvolvedor</Titulo>
                    <Conteudo>Front-end</Conteudo>
                </Coluna>
            </Linha>
        </Container>
    )
}