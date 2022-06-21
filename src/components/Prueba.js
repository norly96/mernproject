import React from 'react'
import style from './p.module.css'
import Mern from '../assets/logo.png'

const Prueba = () => {
  return (
    <main className={style.container}>
      <header className={style.header}>
        <h1>Hola Usuario</h1>
        <button>Cerrar Sesion</button>
      </header>

    <div className={style.content}>
      <section className={style.aside}>
        <img src={Mern} className={style.logo} alt='logo' />
        <hr/>
        <button>Nuevo Proyecto</button>

        <div>
          <h1 className={style.title}>Listado de Proyectos</h1>
          <div>
            
          </div>
        </div>
      </section>

      <section className={style.main}>
        main
      </section>
    </div>
      
    </main>
  )
}

export default Prueba