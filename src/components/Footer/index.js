import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import './footer.css'
import logo from '../../assets/logo.svg'
import icon from '../../assets/insta-icon.png'
import line from '../../assets/line.png'
import card from '../../assets/cartoes.png'
import card1 from '../../assets/cartoes1.png'
import bark from '../../assets/barkout.svg'

function Footer() {
    const isTablet = useMediaQuery('(max-width: 1280px)')
    return (
        <div className="footer-content">
            <div className="footer-container">
                <div className="logo-footer">
                    <img src={logo} alt="Sistema Logo" />
                </div>
                <div className="h3-footer">
                    <div className="contact">
                        <h3>CONTATO:</h3>
                    </div>
                    <div className="email">
                        <a
                            href="http://wa.me/557388988024?text=Olá, gostaria de fazer um orçamento!"
                            target="-blank"
                            alt="telefone"
                        >
                            +55 73 98898-8024 - Porto Seguro <br/>
                            
                        </a>
                        <a
                            href="http://wa.me/5573999089183?text=Olá, gostaria de fazer um orçamento!"
                            target="-blank"
                            alt="telefone"
                        >
                            +55 73 99908-9183 - Trancoso 
                            
                        </a>
                        <address>
                            <a
                                href="mailto:portosegurotaxi1@gmail.com"
                                alt="telefone"
                                target="-blank"
                            >
                                portosegurotaxi1@gmail.com
                            </a>
                        </address>
                    </div>
                </div>
                <div className="social">
                    <div className="follow">
                        <h3>SIGA-NOS:</h3>
                    </div>
                    <div className="insta">
                        <a
                            href="https://www.instagram.com/portoseguro.taxi/"
                            target="-blank"
                        >
                            <img src={icon} alt="icone instagram" />
                        </a>
                    </div>
                </div>
                <div className="pagamentos">
                    <div className="h3-footer">
                        <h3>PAGAMENTOS:</h3>
                        {isTablet ? (
                            <div className="cartoes">
                                <img src={card1} alt="pagamentos" />
                            </div>
                        ) : (
                            <div className="cartoes">
                                <img src={card} alt="pagamentos" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="rodape">
                <div className="linha">
                    <img src={line} alt="Sistema Logo" />
                </div>
                <div className="p-footer">
                    <p>PortoSeguro 2022 © Desenvolvido por</p>
                    <div>
                        <a
                            href="https://www.instagram.com/agenciabarkout/"
                            target="-blank"
                        >
                            {' '}
                            <img src={bark} alt="Sistema Logo" />{' '}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
