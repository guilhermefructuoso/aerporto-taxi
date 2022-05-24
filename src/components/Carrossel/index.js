import React from 'react'
import './carrossel.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import line from '../../assets/line.png'
import espelho from '../../assets/praiadoespelho.png'
import trancoso from '../../assets/card-trancoso-bahia.png'
import caraiva from '../../assets/card-caraiva-bahia.png'
import arraial from '../../assets/card-arraial-dajuda.png'
import clubmed from '../../assets/card-club-med-trancoso.png'
import morrosp from '../../assets/card-praia-santo-andre-bahia.png'
import pitinga from '../../assets/card-praia-da-pitinga.png'
import cabralia from '../../assets/card-praia-cabralia.png'
import coroa from '../../assets/card-praia-coroa-vermelha.png'

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
            <div className="carrossel-content">
                <div className="title-destino">
                    <h1>PRINCIPAIS DESTINOS</h1>
                </div>
                <div className="text-destinos">
                    <p>
                        É quase impossível definir qual é a praia mais bonita da
                        Bahia, já que o estado possui uma das costas litorâneas
                        mais incríveis do mundo. Por isso, abaixo você confere
                        alguns resumos dos principais destinos que são
                        realizados pelos turistas no dia a dia.
                        <br />{' '}
                        <strong>
                            Venha para a Bahia estamos te esperando!
                        </strong>
                    </p>
                </div>
                <Carousel className="cards-carrossel" responsive={responsive}>
                    <div className="new-card">
                        <div className="card">
                            <img src={espelho} alt="Praia do Espelho" />
                        </div>
                        <h2>Praia do Espelho</h2>
                        <img
                            src={line}
                            width="200px"
                            height="2px"
                            alt="Praia do Espelho"
                        />

                        <p>
                            É o destino perfeito para quem busca relaxar diante
                            do mar da Bahia. Com ótimas pousadas, bons
                            restaurantes e quiosques com pé na areia, a praia
                            reúne sua beleza natural, rusticidade e com muito
                            charme. O mar transparente, falésias coloridas,
                            piscinas naturais, as faixas de areia deserta e a
                            repleta quantidade de coqueiros, molduram uma
                            paisagem extraordinária. A Praia do Espelho é
                            certeza de felicidade e calmaria!
                        </p>
                    </div>

                    <div className="card">
                        <img src={trancoso} alt="Sistema Logo" />
                    </div>
                    <div className="card">
                        <img src={caraiva} alt="Sistema Logo" />
                    </div>
                    <div className="card">
                        <img src={arraial} alt="Sistema Logo" />
                    </div>
                    <div className="card">
                        <img src={clubmed} alt="Sistema Logo" />
                    </div>
                    <div className="card">
                        <img src={morrosp} alt="Sistema Logo" />
                    </div>
                    <div className="card">
                        <img src={pitinga} alt="Sistema Logo" />
                    </div>
                    <div className="card">
                        <img src={cabralia} alt="Sistema Logo" />
                    </div>
                    <div className="card">
                        <img src={coroa} alt="Sistema Logo" />
                    </div>
                </Carousel>
                ;
            </div>
        </section>
    )
}

export default Carrossel
