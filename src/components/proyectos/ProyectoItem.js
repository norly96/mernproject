import React, { useContext} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


 

const useStyles = makeStyles((theme) => ({
    
    margin: {
        margin: theme.spacing(1, 2, 1),
    },
    
  }));

 const ProyectoItem = ({proyecto}) => {
    const classes = useStyles();

    //Obtener el state del proyecto
    const proyectosContext = useContext(proyectoContext);
    const {proyectoActual} = proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {obtenerTareas} = tareasContext;

    //Funcion para agreagar el proyecto actual
    const seleccionarProyecto = id => {
      proyectoActual(id); //Fijar un proyecto actual
      obtenerTareas(id); //Filtrar las tareas cunado se de click

    }
    

    return (
        <Grid item className={classes.margin}>
          <Button fullWidth onClick={() => seleccionarProyecto(proyecto._id)}  variant="contained" color="default"><strong>{proyecto.nombre}</strong></Button>
        </Grid>
    )
}

export default ProyectoItem;
