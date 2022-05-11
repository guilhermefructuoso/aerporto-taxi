import React from 'react'
import './carros.css'
import car from '../../assets/renault.png'
import text from '../../assets/text-renault.png'
import jeep from '../../assets/jeep.png'
import textJeep from '../../assets/text-jeep.png'

function Carros() {
    return (
        <section id="carros">
            <div className="carros-container">
                <div className="h1-carros">
                    <h1>CONHEÇA NOSSOS CARROS </h1>
                </div>
                <div className="p-sobre">
                    <p>
                        A frota é composta por carros SUVS e equipados com
                        ar-condicionado para o melhor conforto. Todos os
                        motoristas conhecem o sul da Bahia como a palma de sua
                        mão e buscam sempre atender os clientes com todo o
                        conhecimento que adquiriram durante anos.
                    </p>
                </div>
            </div>
            <div className="renault-content">
                <div className="duster-img">
                    <img src={car} alt="Sistema Logo" />
                </div>
                <div className="text-renault">
                    <img src={text} alt="Sistema Logo" />
                </div>
            </div>

            <div className="jeep-content">
                <div className="text-jeep">
                    <img src={textJeep} alt="Sistema Logo" />
                </div>
                <div className="compass-img">
                    <img src={jeep} alt="Sistema Logo" />
                </div>
            </div>
        </section>
    )
}

export default Carros
