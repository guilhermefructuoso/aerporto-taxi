import React from 'react'
import { db } from '../../firebaseConnection'
import { addDoc, collection } from 'firebase/firestore'
import './home.css'
import whats from '../../assets/whatsapp.png'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




function Home() {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm({})
    const onSubmit = async (data) => {
        await addDoc(collection(db, "contact"),{
            name: data.name,
            email: data.email,
            phone: data.phone,
            destination: data.destination,
            message: data.message
        })
        .then(()=>{
            toast.success('Mensagem enviada com sucesso!')
        })
        .catch((error)=>{
            alert('ERRO' + error)
        })
       
        await addDoc(collection(db, "mail"), {
            to: 'portosegurotaxi1@gmail.com',
            message: {
              subject: 'Olá, gostaria de fazer um orçamento!',
              html: JSON.stringify(data)
          
            },
        })
        
        reset({
            name: '',
            email: '',
            phone: '',
            destination: '',
            message: '',
        })

       
    }

    return (
        <section id="home">
            <div className="home-container">
                <div className="h1-content">
                    <h1>
                        Escolha o melhor serviço
                        <br /> de táxi em Porto Seguro!
                    </h1>
                    <div className="span-home">
                        <span>Excelência em transporte desde 2016</span>
                    </div>
                </div>
            </div>
                <div className="form-home">
                        <div className="title-form">
                            <h3>Solicite seu orçamento!</h3>
                        </div>
                        <div className='form'>
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <label>Nome*</label>
                            <input 
                                className={errors.name ? 'red-border' : ''}
                                placeholder="Digite seu nome..."
                                {...register('name', { required: true })} 
                            />
                            <label>E-mail*</label>
                            <input 
                                className={errors.email ? 'red-border' : ''}
                                placeholder="Digite seu e-mail..."
                                {...register('email', { required: true })}
                            />
                            <label>Telefone*</label>
                            <input 
                                className={errors.phone ? 'red-border' : ''}
                                placeholder="Digite seu telefone..."
                                {...register('phone', { required: true })}
                            />

                            <label>Destino*</label>
                            <input 
                                className={
                                    errors.destination ? 'red-border' : ''
                                }
                                placeholder="Digite seu destino..."
                                {...register('destination', { required: true })}
                            />

                            <label>Mensagem</label>
                            <textarea 
                                placeholder="Digite sua mensagem..."
                                {...register('message')}
                            />

                            <div className="contact-button">
                                <button id='btn' type="submit">Enviar</button>
                            </div>
                        </form>
                        </div>
                </div>
              
                    <div className="whats">
                        <a
                            href="http://wa.me/557388988024?text=Olá, gostaria de fazer um orçamento!"
                            target="-blank"
                        >
                            <img
                                src={whats}
                                alt="botão whatsapp"
                                width={75}
                                height={75}
                            />
                        </a>
                    </div>
        </section> 
    )
}

export default Home
