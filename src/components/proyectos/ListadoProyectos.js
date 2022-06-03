import React, {useContext,useEffect} from 'react';
import ProyectoItem from './ProyectoItem';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import AlertaContext from '../../context/alertas/alertaContext';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    /* root: {
      height: '100vh',
    }, */
    paper: {
       width: '30%',
    },
    paper1: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
    },
  
    logo: {
        margin: theme.spacing(0, 0, 1),
        alignItems: 'center',
        width: '80%',
    },
    form: {
      width: '80%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      flexGrow: 1,
    },
    center: {
      justifyContent: 'center',
      display: 'flex',
    },
    alert: {
      margin: theme.spacing(0,0,1),
    }
  }));

 const ListadoProyectos = () => {
    const classes = useStyles();

    //Extraer proyectos del state initial
    const proyectosContext = useContext(proyectoContext);
    const {mensaje,proyectos, obtenerProyectos} = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    //Obtener proyectos
    useEffect(() => {

      //Si hay un error
      if(mensaje) {
        mostrarAlerta(mensaje.msg, mensaje.categoria);
      }
      obtenerProyectos();
      // eslint-disable-next-line
    }, [mensaje])
    
    //Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <Typography variant="h5" className={classes.paper1} ><strong>No hay Proyectos</strong></Typography>;
    
    

    return (
        <Grid>
          { alerta ? (<Alert className={classes.alert} severity="error">{alerta.msg}</Alert>) : null }
          <Box className={classes.center}>
            <Typography variant="h5" className={classes.paper1} ><strong>Listado de Proyectos</strong></Typography>
          </Box>
          
          <TransitionGroup>
            {proyectos.map(proyecto => (
              <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
                      <ProyectoItem  proyecto={proyecto}/>
              </CSSTransition>        
                  ))} 
          </TransitionGroup>        
        </Grid>
    )
}

export default ListadoProyectos;


