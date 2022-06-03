import React, {useContext,useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const useStyles = makeStyles((theme) => ({
    
    form: {
        marginTop: theme.spacing(3),
      },
    submit: {
        margin: theme.spacing(1, 0, 2),
      },
    box: {
        margin: theme.spacing(1, 5),
      },
    color: {
        backgroundColor: theme.palette.error.main,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
      }
      
  }));


 const FormTarea = () => {
    const classes = useStyles();

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

      //Obtener la funcion del context de tarea
      const tareasContext = useContext(tareaContext);
      const {tareaseleccionada, errortarea,agregarTarea,validarTarea,obtenerTareas,actualizarTarea,limpiarTarea} = tareasContext;

    //Effect que detecta si hay tarea seleccionada
    useEffect(() => {
      if(tareaseleccionada !== null){
        guardarTarea(tareaseleccionada)
      } else {
        guardarTarea({
          nombre: ''
        })
      }
    }, [tareaseleccionada])  


    //State del fomrulario
    const [tarea, guardarTarea] = useState({
      nombre: '',
    })

    //Extraer nombre del proyecto
    const {nombre} = tarea;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    //Leer los valores del formulario
    const handleChange = e => {
      guardarTarea({
        ...tarea,
        [e.target.name] : e.target.value
      })
    }

    const onSubmit = e => {
      e.preventDefault();

      //Validar 
      if(nombre.trim() === ''){
        validarTarea();
        return;
      }

      //Revisar si es editar o es agregar tarea
      if(tareaseleccionada === null) {
          //tarea nueva
          //Agregar la nueva Tarea al state de tareas
          tarea.proyecto = proyectoActual._id;
          //tarea.estado = false;
          agregarTarea(tarea);
      } else {
          //Actualizar tarea existente
          actualizarTarea(tarea);

          //Elimina tareaseleccionada del state
          limpiarTarea();
      }
      
      //Obtener y filtrar las tareas del proyecto actual
      obtenerTareas(proyectoActual.id);
      //Reiniciar el Formulario
      guardarTarea({
        nombre: ''
      })
    }

    return (
        
        <Box className={classes.box}>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField inputProps={{ maxLength: 30 }}  variant="outlined" required fullWidth id="tarea" label="Nombre Tarea" name="nombre" autoComplete="tarea" value={nombre} onChange={handleChange}/>               
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{ tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea' }</Button>       
          </form>
          {errortarea ? <Typography variant="subtitle2" className={classes.color}><strong>El Nombre de la Tarea es Obligatorio</strong></Typography>: null}
        </Box>
    )
}

export default FormTarea;