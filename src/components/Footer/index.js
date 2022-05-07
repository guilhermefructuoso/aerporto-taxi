import React from "react";
import "./footer.css";
import logo from "../../assets/logo-footer.png";
import icon from "../../assets/insta-icon.png";
import line from "../../assets/line.png";

function Footer() {
  return (
    <div className="footer-content">
      <div className="footer-container">
        <div className="logo-footer">
          <img src={logo} alt="Sistema Logo" />
        </div>
        <div className="h3-footer">
          <h3>CONTRATE NOSSO SERVIÇO!</h3>
        </div>
        <div className="h3-footer">
          <div className="contact">
            <h3>CONTATO</h3>
          </div>
          <div className="email">
            <label>+55 73 2020-2020</label>
            <label>email@email.com.br</label>
          </div>
        </div>
        <div className="social">
          <div>
            <h3>SIGA-NOS:</h3>
          </div>
          <div className="insta">
            <img src={icon} alt="Sistema Logo" />
          </div>
        </div>
      </div>
      <div className="rodape">
        <div className="linha">
          <img src={line} alt="Sistema Logo" />
        </div>
        <div>
          <p>AeroPorto 2022 © Desenvolvido por Agência </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
