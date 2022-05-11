import React from 'react'
import './carrossel.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import espelho from '../../assets/espelho.png'
import trancoso from '../../assets/trancoso.png'
import caraiva from '../../assets/caraiva.png'
import arraial from '../../assets/arraial.png'
import clubmed from '../../assets/clubmed.png'
import morrosp from '../../assets/santo-andre.png'
import pitinga from '../../assets/card-pitinga.png'
import cabralia from '../../assets/cabralia.png'
import coroa from '../../assets/coroa.png'

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
                <div className='text-destinos'>
                    <p>
                        É quase impossível definir qual é a praia mais bonita da
                        Bahia, já que o estado possui uma das costas litorâneas
                        mais incríveis do mundo. Por isso, abaixo você confere
                        alguns resumos dos principais destinos que são
                        realizados pelos turistas no dia a dia.<br/> Venha para a
                        Bahia estamos te esperando!
                    </p>
                </div>
                <Carousel className="cards-carrossel" responsive={responsive}>
                    <div className="card">
                        <img src={espelho} alt="Sistema Logo" />
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
