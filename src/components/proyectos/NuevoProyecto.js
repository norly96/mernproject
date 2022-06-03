import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Logo from "../../assets/logo.png";
import proyectoContext from '../../context/proyectos/proyectoContext';

const useStyles = makeStyles((theme) => ({
    /* root: {
      height: '100vh',
    }, */
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logo: {
      width: '50%',
      margin: theme.spacing(3),
    },
    form: {
      width: '80%', // Fix IE 11 issue.
      marginTop: theme.spacing(4),
    },
    submit: {
      //margin: theme.spacing(3, 0, 2),
      marginTop: theme.spacing(1),
      
    },
    color: {
      backgroundColor: theme.palette.error.main,
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      margin: theme.spacing(1,0,0),
    }
  }));
  
   

const NuevoProyecto = () => {
    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario,errorformulario,mostrarFormulario,agregarProyecto,mostrarError} = proyectosContext;

    //State para Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: '',
    });
  
    //Extraer nombre de proyecto
    const {nombre} = proyecto;
  
    const OnChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value,
        })
    }

    //Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
      e.preventDefault();

      //Validar el proyecto
    if(nombre === ''){
      mostrarError();
      return;
    }
      //Agregar al state
      agregarProyecto(proyecto)

      //Reiniciar el form
      guardarProyecto({
        nombre: '',
      })
    }


    
    //Mostrar el formulario
    const onClickForm = () => {
      mostrarFormulario();
    }

    const classes = useStyles();
    return (
    
        <div className={classes.paper}>
        <img src={Logo} className={classes.logo} alt="logo" />
          <Button onClick={onClickForm} variant="contained" color="primary">Nuevo Proyecto</Button>

          {
            formulario
            ?
            (
              <form className={classes.form} noValidate onSubmit={onSubmitProyecto}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Nombre Proyecto"
              name="nombre"
              onChange={OnChangeProyecto}
              value={nombre}
              
            />
            <Button fullWidth  type="submit" variant="contained" color="primary" className={classes.submit}>Agregar Proyecto</Button>
          </form>
            )
            : null
          }
          
          { errorformulario ? <Typography variant="subtitle2" className={classes.color} ><strong>El Nombre del Proyecto es Obligatorio</strong></Typography> : null}
          
        </div>
    
    )
}

export default NuevoProyecto;
