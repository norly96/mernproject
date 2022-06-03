import React, { useContext } from 'react';
import Tareas from './Tareas';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { Grid,Table, Typography } from '@material-ui/core';


  const useStyles = makeStyles((theme) => ({

    color: {
      backgroundColor: theme.palette.secondary.main,
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
      margin: theme.spacing(0,0,2),
    },
    margin: {
      margin: theme.spacing(2,25,1),
    }

  }));
  
const ListadoTareas = () => {
    const classes = useStyles();

    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto } = proyectosContext;

    //Obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const {tareasproyecto} = tareasContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return <Typography variant="h5" className={classes.color}><strong>Selecciona un Proyecto</strong></Typography>

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    //Eliminar un Proyecto
    const onClickEliminar = () => {
      eliminarProyecto(proyectoActual._id)
    }
    return (
        <Grid>
           <Box className={classes.center}>
            <Typography variant="h5" className={classes.color} ><strong>Proyecto: {proyectoActual.nombre}</strong></Typography>
          </Box >
          <Table>
          {tareasproyecto.length === 0
                ? (<Typography variant="h4" className={classes.center}><strong>No hay Tareas</strong></Typography>)
                :tareasproyecto.map(tarea=>(
                  
                    <Tareas key={tarea.id} tarea={tarea}/>
                   
                ))
                }
          </Table>  
          <Button className={classes.margin} variant="contained" color="primary" onClick={onClickEliminar} >Eliminar Proyecto</Button> 
        </Grid> 
        
    )
}

export default ListadoTareas;