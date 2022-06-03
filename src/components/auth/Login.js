import React, {useState, useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import login from "../../assets/login.jpg";
import Alert from '@material-ui/lab/Alert';
import Mern from "../../assets/logo.png";
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
     
      MERNProject
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${login})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    margin: theme.spacing(5),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 const Login = (props) =>  {

  
  //extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta} = alertaContext;

  const authContext = useContext(AuthContext);
  const {mensaje,autenticado, iniciarSesion} = authContext;

    //En caso de que el password o usuario no exista
    useEffect(() => {
      if(autenticado){
        props.history.push('/proyectos');
      }
  
      if(mensaje){
        mostrarAlerta(mensaje.msg, mensaje.categoria);
      }
    }, [mensaje, autenticado, props.history]);

  const classes = useStyles();

  //State para iniciae sesion
  const [usuario,guardarUsuario] = useState({
    email: '',
    password: ''
  });

  const {email,password} = usuario;

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })

  }

  //Cuando el usuario quiere iniciar seesion
  const onSubmit = e => {
    e.preventDefault();

    //Validar que no haya campos vacios
    if(email.trim() === '' || password.trim() === ''){
      mostrarAlerta('Todos los campos son obligatorios','alerta-error');
    }

    //Pasarlo al action
    iniciarSesion({email,password});
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <img src={Mern} className={classes.logo} alt="logo" />
          
          <Typography variant="h5">
            Iniciar Sesión
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"  
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={onChange}
            />
            { alerta ? (<Alert severity="error">{alerta.msg}</Alert>) : null }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Iniciar
            </Button>
            <Grid container>
              <Grid item>
                <Link to={"/nueva-cuenta"}>
                  ¿No tienes cuenta? Regístrate
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
