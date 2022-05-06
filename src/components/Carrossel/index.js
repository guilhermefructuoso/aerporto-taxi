import React from "react";
import "./carrossel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import teste from "../../assets/espelho.png";
import trancoso from "../../assets/trancoso.png";
import caraiva from "../../assets/caraiva.png";
import arraial from "../../assets/arraial.png";
import clubmed from "../../assets/clubmed.png";

function Carrossel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 1072 },
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
  };

  return (
    <section id="destinos">
      <div className="carrossel-content">
        <div className="title-destino">
          <h1>NOSSOS PRINCIPAIS DESTINOS!</h1>
        </div>
        <Carousel className="cards-carrossel" responsive={responsive}>
          <div className="card">
            <img src={teste} alt="Sistema Logo" />
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
            <img src={teste} alt="Sistema Logo" />
          </div>
          <div className="card">
            <img src={teste} alt="Sistema Logo" />
          </div>
          <div className="card">
            <img src={teste} alt="Sistema Logo" />
          </div>
        </Carousel>
        ;
      </div>
    </section>
  );
}

export default Carrossel;
