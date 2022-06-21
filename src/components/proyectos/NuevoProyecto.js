import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import style from './proyectos.module.css'
import Logo from "../../assets/logo.png";
import proyectoContext from '../../context/proyectos/proyectoContext';

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

    
    return (
    
        <div className={style.aside}>
        <img src={Logo} className={style.logo} alt="logo" />
          <button onClick={onClickForm}>Nuevo Proyecto</button>

          {
            formulario
            ?
            (
              <form noValidate onSubmit={onSubmitProyecto}>
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
            <button fullWidth type="submit" >Agregar Proyecto</button>
          </form>
            )
            : null
          }
          
          { errorformulario ? <Typography variant="subtitle2" ><strong>El Nombre del Proyecto es Obligatorio</strong></Typography> : null}
          
        </div>
    
    )
}

export default NuevoProyecto;
