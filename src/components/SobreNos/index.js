import React from 'react'
import './sobre.css'
import useMediaQuery from '@mui/material/useMediaQuery'
import attendance from '../../assets/atendimento.png'
import security from '../../assets/seguranca.png'
import confort from '../../assets/conforto.png'
import quality from '../../assets/qualidade.png'
import punctuality from '../../assets/pontualidade.png'
import pet from '../../assets/pet.png'

function SobreNos() {
    const isMobile = useMediaQuery('(max-width: 700px)')

    return (
        <section id="sobrenos">
            <div className="container-sobre">
                <div className="h1-sobre">
                    <h1>Sobre nós</h1>
                </div>
                <div className="text-sobre">
                    <p>
                        A Porto Seguro – Serviço de Táxi foi criada por 4
                        amigos que se conheceram em 2016 e entre muitas coisas
                        em comum, a paixão por trabalhar com traslado fez com
                        que decidissem abrir a própria empresa. São mais de 6
                        anos atuando com o transporte de pessoas, sempre com
                        muita dedicação e qualidade para fazer da sua viagem um
                        momento inesquecível. Aqui o seu pet é bem-vindo também,
                        tudo o que for mais confortável para você e toda a sua
                        família!
                    </p>
                </div>
                {isMobile ? (
                    <div className="icons-sobre">
                        <div>
                            <div className="icon">
                                <img src={attendance} alt="icone atendimento" />
                                <div>
                                    <p>ATENDIMENTO</p>
                                </div>
                            </div>
                            <div className="icon">
                                <img src={security} alt="icone segurança" />
                                <div>
                                    <p>SEGURANÇA</p>
                                </div>
                            </div>
                            <div className="icon">
                                <img src={confort} alt="icone conforto" />
                                <div>
                                    <p>CONFORTO</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="icon">
                                <img src={quality} alt="icone qualidade" />
                                <div>
                                    <p>QUALIDADE</p>
                                </div>
                            </div>
                            <div className="icon">
                                <img
                                    src={punctuality}
                                    alt="icone pontualidade"
                                />
                                <div>
                                    <p>PONTUALIDADE</p>
                                </div>
                            </div>
                            <div className="icon">
                                <img src={pet} alt="icone petfriendely" />
                                <div>
                                    <p>PET FRIENDLY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="icons-sobre">
                        <div className="icon">
                            <img src={attendance} alt="icone atendimento" />
                            <div className="p-footer">
                                <p>ATENDIMENTO</p>
                            </div>
                        </div>
                        <div className="icon">
                            <img src={security} alt="icone segurança" />
                            <div className="p-footer">
                                <p>SEGURANÇA</p>
                            </div>
                        </div>
                        <div className="icon">
                            <img src={confort} alt="icone conforto" />
                            <div className="p-footer">
                                <p>CONFORTO</p>
                            </div>
                        </div>

                        <div className="icon">
                            <img src={quality} alt="icone qualidade" />
                            <div className="p-footer">
                                <p>QUALIDADE</p>
                            </div>
                        </div>
                        <div className="icon">
                            <img src={punctuality} alt="icone pontualidade" />
                            <div className="p-footer">
                                <p>PONTUALIDADE</p>
                            </div>
                        </div>
                        <div className="icon">
                            <img src={pet} alt="icone petfriendely" />
                            <div className="p-footer">
                                <p>PET FRIENDLY</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default SobreNos
