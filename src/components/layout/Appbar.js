import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import style from './appbar.module.css'

 const Appbar = () => {

  // Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const {usuario, usuarioAutenticado, cerrarSesion} = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <header className={style.header}>
      {usuario ? <h1>Hola <span>{usuario.nombre}</span></h1> : null}
      <button onClick={()=> cerrarSesion()}>Cerrar Sesion</button>
    </header>      
  )
}

export default Appbar;

{/* <>
    <AppBar color="primary" position="relative" elevation={2}>
      <Toolbar sx={{ height: 64 }}>
        {usuario ? <Typography variant="h6" className={classes.bar}> Hola <span>{usuario.nombre}</span> </Typography> : null }
          <Button onClick={()=> cerrarSesion()} color="secondary" variant="contained" position="right" className={classes.vet}><strong>Cerrar Sesión</strong></Button>
      </Toolbar>
  </AppBar>
  
  </> */}