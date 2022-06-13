import React from 'react'
import './carrossel.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import line from '../../assets/line.png'
import espelho from '../../assets/praiadoespelho.png'
import trancoso from '../../assets/trancoso.png'
import caraiva from '../../assets/caraiva.png'
import arraial from '../../assets/arraial.png'
import clubmed from '../../assets/clubmed.png'
import standre from '../../assets/santoandre.png'
import pitinga from '../../assets/pitinga.png'
import cabralia from '../../assets/cabralia.png'
import coroa from '../../assets/coroavermelha.png'

function Carrossel() {
    const responsive = {
        desktop: {
            breakpoint: { max: 1920, min: 1800 },
            items: 5,
        },
        teste: {
            breakpoint: { max: 1800, min: 1440 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1440, min: 1072 },
            items: 3,
        },

        miniTablet: {
            breakpoint: { max: 1072, min: 700 },
            items: 2,
        },

        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
        },
    }

    return (
        <section id="destinos">
            <div className="carousel-container">
                <div className="carrossel-content">
                    <div className="title-destino">
                        <h1>Principais destinos</h1>
                    </div>
                    <div className="text-destinos">
                        <p>
                            É quase impossível definir qual é a praia mais
                            bonita da Bahia, já que o estado possui uma das
                            costas litorâneas mais incríveis do mundo. Por isso,
                            abaixo você confere alguns resumos dos principais
                            destinos que são realizados pelos turistas no dia a
                            dia.
                            <br />{' '}
                            <strong>
                                Venha para a Bahia estamos te esperando!
                            </strong>
                        </p>
                    </div>
                    <Carousel
                        responsive={responsive}
                        autoPlaySpeed={30000}
                    >
                        <div className="new-card">
                            <div className="card">
                                <img src={espelho} alt="Praia do Espelho" />
                            </div>
                            <div className="h2__img">
                                <h2>Praia do Espelho</h2>
                                <img
                                    src={line}
                                    width="200px"
                                    height="2px"
                                    alt=""
                                />
                            </div>

                            <p>
                                É o destino perfeito para quem busca relaxar
                                diante do mar da Bahia. Com ótimas pousadas,
                                bons restaurantes e quiosques com pé na areia, a
                                praia reúne sua beleza natural, rusticidade e
                                com muito charme. O mar transparente, falésias
                                coloridas, piscinas naturais, as faixas de areia
                                deserta e a repleta quantidade de coqueiros,
                                molduram uma paisagem extraordinária. A Praia do
                                Espelho é certeza de felicidade e calmaria!
                            </p>
                        </div>
                        <div className="new-card">
                            <div className="card">
                                <img src={trancoso} alt="trancoso" />
                            </div>
                            <div className="h2__img">
                                <h2>Trancoso</h2>
                                <img
                                    src={line}
                                    width="200px"
                                    height="2px"
                                    alt=""
                                />
                            </div>

                            <p>
                                Localizado a menos de 30 km de Porto Seguro, o
                                vilarejo é cercado por incríveis praias e uma
                                natureza surpreendente com o clima ameno o ano
                                inteiro. Há alguns anos a região deixou de ser a
                                vila rústica e isolada, que foi descoberta pelos
                                hippes nos anos 70 para se tornar o destino
                                turístico dos antenados e vips. O Quadrado,
                                praça que fica localizada no centro, emoldurada
                                por casinhas coloridas e pela igreja branca,
                                continua a ser o coração do local.
                            </p>
                        </div>
                        <div className="new-card">
                            <div className="card">
                                <img src={caraiva} alt="caraiva" />
                            </div>

                            <div className="h2__img">
                                <h2>Caraíva</h2>
                                <img
                                    src={line}
                                    width="200px"
                                    height="2px"
                                    alt=""
                                />
                            </div>

                            <p>
                                Para chegar em Caraíva é preciso cruzar o rio de
                                canoa, os carros ficam do lado de lá. É
                                recomendado ir com trajes e bagagem adequada
                                para circular nas ruazinhas de areia fofa do
                                vilarejo. O mar nem sempre está azul claro, na
                                maré enchente o rio deságua na praia e deixa o
                                mar turvo. A recente chegada da luz elétrica faz
                                com que os caminhos são pouco iluminados, uma
                                lanterna é acessório obrigatório. Fique de olho
                                nas pinturas das casas de lá.
                            </p>
                        </div>
                        <div className="new-card">
                            <div className="card">
                                <img src={arraial} alt="arraial d'ajuda" />
                            </div>

                            <div className="h2__img">
                                <h2>Arraial d'Ajuda</h2>
                                <img
                                    src={line}
                                    width="200px"
                                    height="2px"
                                    alt=""
                                />
                            </div>

                            <p>
                                Um destino pra lá de especial, com belezas
                                naturais exuberantes, riqueza histórica e um
                                povo acolhedor. Você encontra entretenimento
                                para todas as idades e estilos, gastronomia
                                local e internacional e opções de hospedagem
                                para todos os gostos. É o lugar para quem busca
                                relaxar e também para quem quer agito, é para os
                                que querem conhecer a cada dia um lugar
                                diferente e também para quem quer só ficar
                                relaxando à beira mar.
                            </p>
                        </div>
                        <div className="new-card">
                            <div className="card">
                                <img src={clubmed} alt="club med" />
                            </div>
                            <div className="h2__img">
                                <h2>Club Med</h2>
                                <img
                                    src={line}
                                    width="200px"
                                    height="2px"
                                    alt=""
                                />
                            </div>

                            <p>
                                Famoso internacionalmente por seu alto nível, o
                                resort fica localizado no alto de um penhasco, a
                                cerca de 20 minutos do centrinho de Trancoso. O
                                resort oferece uma incrível experiência All
                                Inclusive sobre as falésias da Praia do Taípe,
                                no sul da Bahia. O resort tem vista sem igual
                                para o mar e acesso exclusivo à praia, por meio
                                de trilhas entre as falésias e também a opção de
                                ir elevador panorâmico.
                            </p>
                        </div>
                        <div className="new-card">
                            <div className="card">
                                <img src={standre} alt="Sistema Logo" />
                            </div>

                            <div className="h2__img">
                                <h2>Santo André</h2>
                                <img
                                    src={line}
                                    width="200px"
                                    height="2px"
                                    alt=""
                                />
                            </div>
                            <p>
                                Com pouco mais de 900 habitantes o vilarejo
                                possui 13 quilômetros de costa e diversas praias
                                belíssimas, entre elas a Coroa Vermelha, Marlin
                                Azul, Praia do Guaiú e Praia das Tartarugas,
                                nome que não foi dado à toa, afinal, uma das
                                principais características é a aparição das
                                tartarugas na água. O sossego e rusticidade é
                                garantido o ano inteiro, até no verão. Mesmo
                                pequena, apenas com uma rua principal, Santo
                                André oferece bons passeios!
                            </p>
                        </div>
                        <div className="new-card">
                            <div className="card">
                                <img src={pitinga} alt="praia da pitinga" />
                            </div>
                            <div className="h2__img">
                                <h2>Praia da Pitinga</h2>
                                <img
                                    src={line}
                                    width="200px"
                                    height="2px"
                                    alt=""
                                />
                            </div>
                            <p>
                                Banhada com água transparente e morna, as ondas
                                fortes quebram nos recifes próximos a orla, já
                                na maré baixa, formam piscinas naturais onde é
                                possível ver pequenos peixes, uma das principais
                                atrações turísticas. Cerca de meia hora de
                                caminhada a partir de Mucugê ou de carro (dez
                                minutos por estrada de terra a partir do
                                centro). A enseada emoldurada por falésias
                                multicoloridas é famosa pelo charme de suas
                                pousadas e barracas.
                            </p>
                        </div>
                        <div className="new-card">
                            <div className="card">
                                <img src={cabralia} alt="Cabrália" />
                            </div>
                            <div className="h2__img">
                                <h2>Cabrália</h2>
                                <img
                                    src={line}
                                    width="200px"
                                    height="2px"
                                    alt=""
                                />
                            </div>
                            <p>
                                Vizinha de Porto Seguro, Santa Cruz Cabrália,
                                encanta os turistas com suas lindas praias e
                                passeios incríveis. São 23 quilômetros de Porto,
                                é dona do cenário da primeira missa rezada no
                                Brasil, em 1500 (uma cruz simbólica demarca o
                                local na praia de Coroa Vermelha) tem paisagens
                                típicas do Sul da Bahia e da Costa do
                                Descobrimento, emolduradas por um mar de águas
                                cristalinas protegido por recifes e vegetação de
                                mata Atlântica.
                            </p>
                        </div>
                        <div className="new-card">
                            <div className="card">
                                <img
                                    src={coroa}
                                    alt="Praia da Coroa Vermelha"
                                />
                            </div>
                            <div className="h2__img">
                                <h2>Coroa Vermelha</h2>
                                <img
                                    src={line}
                                    width="200px"
                                    height="2px"
                                    alt=""
                                />
                            </div>
                            <p>
                                Localizada em Santa Cruz Cabrália e conhecida
                                como um dos marcos principais do descobrimento
                                do Brasil, Coroa Vermelha atrai turistas que
                                chegam em busca de tranquilidade. Lá é possível
                                caminhar pela areia, tomar uma água de coco e
                                conhecer sobre a cultura de algumas tribos
                                indígenas. Concentra hotéis, pousadas e lojinhas
                                de artesanato produzido pelos índios pataxós. O
                                lugar das águas calmas e piscinas naturais.
                            </p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Carrossel
