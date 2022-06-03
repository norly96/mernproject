import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
      
  margin: {
    backgroundColor: theme.palette.success.main,
    color: 'black',
    '&:hover': {
      backgroundColor: theme.palette.success.light,
      color: 'black',
  }, 
     margin: theme.spacing(0, 2, 0),
    },
  colorDelete: {
    backgroundColor: theme.palette.error.main,
    color: 'black',
    '&:hover': {
      backgroundColor: theme.palette.error.light,
      color: 'black',
  }  
  },
  }));

const Tareas = ({tarea}) => {
    const classes = useStyles();

      //Extraer proyectos de state inicial
      const proyectosContext = useContext(proyectoContext);
      const {proyecto } = proyectosContext;

     //Obtener la funcion del context del tarea
     const tareasContext = useContext(tareaContext);
     const {eliminarTarea,obtenerTareas,actualizarTarea,guardarTareaActual} = tareasContext;

     //Extraer el proyecto
     const [proyectoActual] = proyecto;

     //Funcion que se ejecuta caundo usuario presiona btn de eliminar tarea
     const tareaEliminar = id => {
      eliminarTarea(id, proyectoActual._id);
      obtenerTareas(proyectoActual.id)
     }

     //Funcion que modifica estado de las tareas
     const cambiarEstado = tarea => {
        if(tarea.estado) {
          tarea.estado = false;
        }else{
          tarea.estado = true
        }
        actualizarTarea(tarea);
     }

     //Agreaga una tarea actual cunado el usuario desea editarla
     const seleccionarTarea = tarea => {
       guardarTareaActual(tarea);
     } 

    return (
      <TableBody>
          <TableRow hover key={tarea.nombre}>
              <TableCell align="left">
                {tarea.nombre}
              </TableCell>
                  <TableCell align="left">
                  {tarea.estado
                              ?
                              (
                                  <Button variant="contained" onClick={() => cambiarEstado(tarea)}  color="primary">Completo</Button>
                              )
                            :
                            (
                                <Button variant="contained" onClick={() => cambiarEstado(tarea)}  label="Incompleto" color='default'>Incompleto</Button>
                            )
                            }
                  </TableCell>
              <TableCell>
                      <Button className={classes.margin} variant="contained" startIcon={<EditIcon />} onClick={()=> seleccionarTarea(tarea)} >EDITAR</Button>
                      <Button className={classes.colorDelete} variant="contained" startIcon={<DeleteIcon />}  onClick={()=> tareaEliminar(tarea._id)}>ELIMINAR</Button>
              </TableCell>
        </TableRow> 
    </TableBody>       
    )
}

export default Tareas;
