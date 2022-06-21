import React, {Fragment, useContext, useEffect} from 'react';
import Sidebar from '../layout/Sidebar';
import Main from '../layout/Main';
import Appbar from '../layout/Appbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AuthContext from '../../context/auth/authContext'
import style from './proyectos.module.css'
import Mern from '../../assets/logo.png'

const Proyectos = () => {

  // Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const {usuarioAutenticado} = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, [])


    return (
       
    <main className={style.container}>
        {/* <header className={style.header}>
            <h1>Hola Usuario</h1>
            <button>Cerrar Sesion</button>
        </header> */}
        <Appbar/>
      

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

export default Proyectos;

 {/* <Fragment >
            <Box>
                <Appbar/><br/>
              <Container maxWidth={false}>
                <Grid container spacing={3} >
                  <Grid item lg={4} md={12} xl={5} xs={12}>
                    <Sidebar/>
                  </Grid>
                  <Grid item lg={8} md={12} xl={7} xs={12}>
                    <Main/>
                  </Grid>
                </Grid>
              </Container>         
            </Box>
        </Fragment> */}
