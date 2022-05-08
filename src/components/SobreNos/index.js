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
                <h1>SOBRE NÓS</h1>
                <div className="text-sobre">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
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
                            <div className='p-footer'>
                                <p>ATENDIMENTO</p>
                            </div>
                        </div>
                        <div className="icon">
                            <img src={security} alt="icone segurança" />
                            <div className='p-footer'>
                                <p>SEGURANÇA</p>
                            </div>
                        </div>
                        <div className="icon">
                            <img src={confort} alt="icone conforto" />
                            <div className='p-footer'>
                                <p>CONFORTO</p>
                            </div>
                        </div>

                        <div className="icon">
                            <img src={quality} alt="icone qualidade" />
                            <div className='p-footer'>
                                <p>QUALIDADE</p>
                            </div>
                        </div>
                        <div className="icon">
                            <img src={punctuality} alt="icone pontualidade" />
                            <div className='p-footer'>
                                <p>PONTUALIDADE</p>   
                            </div>
                        </div>
                        <div className="icon">
                            <img src={pet} alt="icone petfriendely" />
                            <div className='p-footer'>
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
