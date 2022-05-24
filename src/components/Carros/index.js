import React from 'react'
import './carros.css'
import car from '../../assets/renault.png'
import { HiCheck } from 'react-icons/hi'
import jeep from '../../assets/jeep.png'


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
                    <h2>Renault Duster</h2>
                    <span>1.6 16V SCE FLEX INTENSE X-TRONIC 2021</span>
                    <div className="check">
                        <div className="icon-check">
                            <HiCheck color="#00b4c7" size={25} />
                            <div className="p-carros">
                                <p>Ar Condicionado</p>
                            </div>
                        </div>
                        <div className="icon-check">
                            <HiCheck color="#00b4c7" size={25} />
                            <div className="p-carros">
                                <p>Freios ABS - com EBD</p>
                            </div>
                        </div>
                        <div className="icon-check">
                            <HiCheck color="#00b4c7" size={25} />
                            <div className="p-carros">
                                <p>Trava/Abertura elétrica das portas</p>
                            </div>
                        </div>
                        <div className="icon-check">
                            <HiCheck color="#00b4c7" size={25} />
                            <div className="p-carros">
                                <p>Cintos de segurança com 3 pontos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jeep-content">
                <div className="text-jeep">
                <h2>JEEP COMPASS</h2>
                    <span>2.0 16V diesel LONGITUDE AUTOMÁTICO</span>
                    <div className="check">
                    <div className="icon-check">
                            <HiCheck color="#00b4c7" size={25} />
                            <div className="p-carros">
                                <p>4 X 4</p>
                            </div>
                        </div>
                        <div className="icon-check">
                            <HiCheck color="#00b4c7" size={25} />
                            <div className="p-carros">
                                <p>Ar Condicionado</p>
                            </div>
                        </div>
                        <div className="icon-check">
                            <HiCheck color="#00b4c7" size={25} />
                            <div className="p-carros">
                                <p>Freios ABS - com EBD</p>
                            </div>
                        </div>
                        <div className="icon-check">
                            <HiCheck color="#00b4c7" size={25} />
                            <div className="p-carros">
                                <p>Trava/Abertura elétrica das portas</p>
                            </div>
                        </div>
                        <div className="icon-check">
                            <HiCheck color="#00b4c7" size={25} />
                            <div className="p-carros">
                                <p>Cintos de segurança com 3 pontos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="compass-img">
                    <img src={jeep} alt="Sistema Logo" />
                </div>
            </div>
        </section>
    )
}

export default Carros
