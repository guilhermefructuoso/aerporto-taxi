import React from "react";
import "./home.css";
import { useForm } from "react-hook-form";

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);


  return (
    <section id="home">
      <div className="home-container">
        <div className="h1-content">
          <h1>Escolha o melhor serviço<br/> de táxi em Porto Seguro!</h1>
          <div className="span-home">
          <span>Prestando serviço de qualidade desde 2019</span>
          </div>
        </div>
      </div>
      <div className="content-home">
        <div className="form-home">
          <div className='teste'>
            <div className="title-form">
            <h3>Solicite seu orçamento!</h3>
            </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome</label>
            <input  className={errors.name ? "red-border" : ""}
              placeholder="Digite seu nome..."
              {...register("name", { required: true })}
            />
            <label>E-mail</label>
            <input className={errors.email ? "red-border" : ""}
              placeholder="Digite seu e-mail..."
              {...register("email", { required: true })}
            />
            <label>Telefone</label>
            <input className={errors.phone ? "red-border" : ""}
              placeholder="Digite seu telefone..."
              {...register("phone", { required: true })}
            />
          
            <label>Destino</label>
            <input className={errors.destination ? "red-border" : ""}
              placeholder="Digite seu destino..."
              {...register("destination", { required: true })}
            />

            <label>Mensagem</label>
            <textarea
              placeholder="Digite sua mensagem..."
              {...register("message")}
            />

            <div className="contact-button">
              <input type="submit" />
            </div>
          </form>
          </div>
         
        </div>
      </div>


    </section>
  );
}

export default Home;
