import React, {useState, useContext, useEffect} from 'react';
import style from './iniciarSesion.module.css'
import Mern from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/auth/authContext'





const IniciarSesion = (props) => {

  //Extraer los valores del Context
  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta} = alertaContext;

  const authContext = useContext(AuthContext);
  const {mensaje,autenticado, iniciarSesion} = authContext;


  //En caso de que el password o usuario no exista
  useEffect(() => {
    if(autenticado){
      props.history.push('/proyectos');
    }
    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, props.history]);

  //Estado para iniciar sesion
  const [usuario,guardarUsuario] = useState({
    email: '',
    password: ''
  });
  
  const {email,password} = usuario;
  
  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  
  }

  //Cuando el usuario quiere iniciar seesion
  const onSubmit = e => {
    e.preventDefault();
  
  //Validar que no haya campos vacios
    if(email.trim() === '' || password.trim() === ''){
      mostrarAlerta('Todos los campos son obligatorios','alerta-error');
       console.log('SE Hizo')
    }
  
  //Pasarlo al action
    iniciarSesion({email,password});

    
  }
    
  

  return (
    
    <section className={style.container}>
      
        <form className={style.box} onSubmit={onSubmit}>
          {alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
          <img src={Mern} className={style.logo} alt='logo' />
          <h1 className={style.title}>Iniciar Sesion</h1>
          
          <input className={style.input}  id='email' name='email' value={email} onChange={onChange} placeholder='Correo Electrónico'/>
          <input className={style.input}  id='password' type='password' name='password' value={password} onChange={onChange} placeholder='Contraseña'/>

          <button className={style.button}  type='submit' /* onClick={()=> alertSuccess()} */ >Iniciar</button>
          <Link to={"/nueva-cuenta"}><p>¿No tienes cuenta? Regístrate</p></Link>
          
        </form>
 
    </section>
    
  )
}

export default IniciarSesion