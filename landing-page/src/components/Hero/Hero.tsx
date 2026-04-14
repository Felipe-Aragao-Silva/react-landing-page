// Seção principal da landing page, com titulo, descrição e chamada para ação

import Button from "../Button/Button"; // Importa o componente de botão reutilizável para as chamadas para ação na seção Hero, como "Explorar funcionalidades" e "Saiba mais"
import Statistics from "./components/Statistics";

import './Hero.css'; // Importa o arquivo de estilos específico para a seção Hero, garantindo que os estilos sejam aplicados apenas a esta seção e não afetem outros componentes da página


// Componente de seção principal da landing page, com titulo, descrição e chamada para ação
function Hero() {
    return (
        <section className="hero"> {/* Seção principal da landing page, com classe "hero" para estilização */}
            <div className="container-hero"> {/* Container para centralizar o conteúdo da seção hero */}
                <span className="tagHero">Plataforma de aprendizado do futuro</span> {/* Tagline da plataforma, destacando sua proposta inovadora para o aprendizado */}

                <h1 className="titleHero">Gestão de aprendizado inteligente para <span>escolas técnicas</span></h1> {/* Título principal da seção, destacando a proposta da plataforma para escolas técnicas */}

                <p className="descriptionHero">
                    Centralize avaliações, presença e progresso dos alunos em uma interface intuitiva e potente. Desenvolvido para instituições que buscam excelência acadêmica.
                </p> {/* Descrição da plataforma, destacando suas funcionalidades e benefícios para as escolas técnicas */}

                <div className="buttonsHero"> {/* Container para os botões de chamada para ação, com classe "buttonsHero" para estilização */}
                    <Button
                        label="Explorar funionalidades"
                        onClick={() => { }}
                        filled={true}
                        border={true}
                    /> {/*Botão para explorar funcionalidades, preenchido e com borda*/}

                    <Button
                        label="Saiba mais"
                        onClick={() => { }}
                        filled={false}
                        border={true}
                    /> {/*Botão para saber mais, sem preenchimento e com borda*/}
                </div>

                <div className="statsHero">
                    <Statistics data="+120" description="escolas técnicas" />
                    <Statistics data="+48 mil" description="alunos ativos" />
                    <Statistics data="4.9 ⭐" description="avaliação média" />
                </div>
            </div>

        </section>
    );
}

export default Hero; // Seção principal da landing page, com titulo, descrição e chamada para ação