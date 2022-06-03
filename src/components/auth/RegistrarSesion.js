import React, {useState, useContext, useEffect} from 'react';
import style from './iniciarSesion.module.css'
import Mern from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/auth/authContext'

const RegistrarSesion = (props) => {

  //extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta} = alertaContext;

  const authContext = useContext(AuthContext);
  const {mensaje,autenticado, registrarUsuario} = authContext;

  //En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
  useEffect(() => {
    if(autenticado){
      props.history.push('/proyectos');
    }

    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, props.history]);


  //State para iniciae sesion
  const [usuario,guardarUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  });

  const {nombre,email,password,confirmar} = usuario;

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
    if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
      }  

    //Password minimo de 6 caract
    if(password.length < 6) {
      mostrarAlerta('La contraseña debe ser de al menos 6 caracteres', 'alerta-error')
      return;
    }

    //Los 2 password son iguales
    if(password !== confirmar) {
      mostrarAlerta('Las contraseñas no son iguales', 'alerta-error')
      return;
    }

    //Pasarlo al action
    registrarUsuario({
      nombre,
      email,
      password
    });
  }
  return (

    <section className={style.container}>
      
        <form className={style.box} onSubmit={onSubmit}>
          {alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
          <img src={Mern} className={style.logo} alt='logo' />
          <h1 className={style.title}>Registrarte</h1>
          
          <input className={style.input}  id='nombre' name='nombre' value={nombre} onChange={onChange} placeholder='Nombre'/>
          <input className={style.input}  id='email' name='email' value={email} onChange={onChange} placeholder='Correo Electrónico'/>
          <input className={style.input}  id='password' type='password' name='password' value={password} onChange={onChange} placeholder='Contraseña'/>
          <input className={style.input}  id='confirmar' type='password' name='confirmar' value={confirmar} onChange={onChange} placeholder='Confirmar Contraseña'/>

          <button className={style.button}  type='submit' >Registrarse</button>
          <Link to={"/"}><p>¿Tienes cuenta? Inicia Sesion</p></Link>
          
        </form>
 
    </section>

  )
}

export default RegistrarSesion