import { Container, Linha, Linha2, Coluna, Coluna1, Coluna2, Span1, Span0, Span2} from "./styles"

export default function Portifolio(){
    return(
        <Container id="section3">
            <Linha>
                <Coluna>
                        <span>🔗 Portifólio</span>
                        <h1>Projetos</h1>
                </Coluna>
            </Linha>
            <Linha2>
                <Coluna1>
                    <h3>Notas</h3>
                    <p>Aplicação desenvolvida com React para ser um bloco de notas remoto, protegido por login e senha.</p>
                    <div>
                        <Span0>Online</Span0>
                        <Span1>React</Span1>
                    </div>
                    <a href="https://notas-project.netlify.app/login" target="_blank">
                    <img src="https://camo.githubusercontent.com/e09a81b5b23a6383b5c0adef2ebded4a554bf21fdea6f96945c7dc9cfa41acd0/68747470733a2f2f692e696d6775722e636f6d2f69797333566b322e706e67" alt="imagem do projeto" />
                    </a>
                </Coluna1>
                    
                <Coluna2>
                    <h3>Gerenciador de chamados</h3>
                    <p>Aplicação desenvolvida com React para gerenciar chamados de clientes, protegido por login e senha.</p>
                    <div>
                        <Span0>Online</Span0>
                        <Span1>React</Span1>
                        <Span2>Firebase</Span2>
                    </div>
                    <a href="https://gerenciador-chamados.netlify.app/" target="_blank">
                    <img src="https://camo.githubusercontent.com/fcdb2b166e039def7e4d61efe2f6334557fa69b077f631fba6d4883ccd1321dc/68747470733a2f2f692e696d6775722e636f6d2f655a59324c4a462e706e67" alt="imagem do projeto" />
                    </a>
                </Coluna2>

                <Coluna1>
                    <h3>Jota Flix</h3>
                    <p>Aplicação desenvolvida com React consumindo API de filmes do The Movie DB.</p>
                    <div>
                        <Span0>Online</Span0>
                        <Span1>React</Span1>
                    </div>
                    <a href="https://jota-flix.netlify.app/" target="_blank">
                    <img src="https://i.imgur.com/FNNJmrB.png" alt="imagem do projeto" />
                    </a>
                </Coluna1>

                <Coluna1>
                    <h3>Currículo HTML</h3>
                    <p>Um dos primeiros sites que desenvolvi, esse no caso é um curriculo HTML bem simples.</p>
                    <div>
                        <Span1>HTML</Span1>
                        <Span1>CSS</Span1>
                    </div>
                    <a href="https://joaolucasmota.github.io/Curriculo-HTML/">
                    <img src="https://user-images.githubusercontent.com/86432480/207411231-f642f800-0ad0-4864-8f1f-6ae9b423cf7e.gif" alt="imagem do projeto" />
                    </a>
                </Coluna1>

                <Coluna1>
                    <h3>Chat GPT API</h3>
                    <p>Consumi uma API do Chat GPT e fiz uma interface de conversa no whatsapp.</p>
                    <div>
                        <Span1>React</Span1>
                        <Span1>TypeScript</Span1>
                    </div>
                    <a href="https://github.com/joaolucasMota/chat-GPT">
                    <img src="https://i.imgur.com/TWjTin4.gif" alt="imagem do projeto" />
                    </a>
                </Coluna1>

                <Coluna1>
                    <h3>Stone Book</h3>
                    <p>Aplicação onde a pessoa pode criar uma conta e deixar uma mensagem gravada.</p>
                    <div>
                        <Span1>React</Span1>
                        <Span1>Firebase</Span1>
                    </div>
                    <a href="https://github.com/joaolucasMota/stone-book">
                    <img src="https://i.imgur.com/gesUoeo.gif" alt="imagem do projeto" />
                    </a>
                </Coluna1>

                <Coluna1>
                    <h3>Site Nutrição</h3>
                    <p>Site desenvolvido como trabalho de freelancer</p>
                    <div>
                        <Span0>Online</Span0>
                        <Span1>React</Span1>
                        <Span1>TS</Span1>
                    </div>
                    <a href="https://nutri-emily-cadete.netlify.app/">
                    <img src="https://i.imgur.com/BgCgwop.png" alt="imagem do projeto" />
                    </a>
                </Coluna1>

                <Coluna1>
                    <h3>LP Nutrição</h3>
                    <p>Landing Page desenvolvida como trabalho da matéria de Web Standards da faculdade.</p>
                    <div>
                        <Span0>Online</Span0>
                        <Span1>SCSS</Span1>
                        <Span1>HTML</Span1>
                    </div>
                    <a href="https://nutricionista-emilyc.netlify.app/">
                    <img src="https://i.imgur.com/dtpBTSc.png" alt="imagem do projeto" />
                    </a>
                </Coluna1>

                <Coluna1>
                    <h3>Site Marcenaria</h3>
                    <p>Site de uma marcenaria feito para um amigo.</p>
                    <div>
                        <Span0>Online</Span0>
                        <Span1>SCSS</Span1>
                        <Span1>HTML</Span1>
                    </div>
                    <a href="https://mognus.netlify.app/">
                    <img src="https://i.imgur.com/pOh29jM.png" alt="imagem do projeto" />
                    </a>
                </Coluna1>

                <Coluna1>
                    <h3>Minhas Finanças</h3>
                    <p>Projeto desenvolvido em ANgular para controle de finanças.</p>
                    <div>
                        <Span1>Angular</Span1>
                        <Span1>Material UI</Span1>
                    </div>
                    <a href="https://mognus.netlify.app/">
                    <img src="https://i.imgur.com/RyZOCUh.png" alt="imagem do projeto" />
                    </a>
                </Coluna1>
            </Linha2>
        </Container>
    )
}