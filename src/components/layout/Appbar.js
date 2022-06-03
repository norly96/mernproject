import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import AuthContext from '../../context/auth/authContext';

const useStyles = makeStyles((theme) => ({
  vet: {
    //backgroundColor: theme.palette.secondary.main,
    
  },
  logo: {
    width: "10%",
    marginRight: theme.spacing(9),
  },
  bar:{
    flexGrow: 1,
  },
  
}));

 const Appbar = () => {

  // Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const {usuario, usuarioAutenticado, cerrarSesion} = authContext;

  useEffect(() => {
    usuarioAutenticado();
    
  }, []);

  const classes = useStyles();

  return (
<>
    <AppBar color="primary" position="relative" elevation={2}>
      <Toolbar sx={{ height: 64 }}>
        {usuario ? <Typography variant="h6" className={classes.bar}> Hola <span>{usuario.nombre}</span> </Typography> : null }
          <Button onClick={()=> cerrarSesion()} color="secondary" variant="contained" position="right" className={classes.vet}><strong>Cerrar Sesión</strong></Button>
      </Toolbar>
  </AppBar>
  
  </>
      
  )
}

export default Appbar;