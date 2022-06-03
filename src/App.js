  import React from 'react';
  import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
  import Login from './components/auth/IniciarSesion';
  import NuevaCuenta from './components/auth/RegistrarSesion';
  import Proyectos from './components/proyectos/Proyectos';
  import ProyectoState from './context/proyectos/ProyectoState';
  import TareaState from './context/tareas/TareaState';
  import AlertaState from './context/alertas/AlertaState';
  import AuthState from './context/auth/AuthState';
  import Prueba from './components/Prueba';
  import {ThemeProvider} from '@material-ui/core/styles';
  import theme from './temaGlobal';
  import CssBaseline from '@material-ui/core/CssBaseline';
  import tokenAuth from './config/token';
  import RutaPrivada from './components/rutas/RutaPrivada';


  //TODO: Pagina 404
  //TODO: alertas validacion auth

  //Revisar si tenemos un token
  const token = localStorage.getItem('token');
    if(token){
      tokenAuth(token);
    }

  function App() {
    console.log(process.env.REACT_APP_BACKEND_URL);
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <ProyectoState>
        <TareaState>
          <AlertaState>
            <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
            <RutaPrivada exact path="/proyectos" component={Proyectos}/>
            <Route exact path="/prueba" component={Prueba}/>
            </Switch>
          </Router>
          </AuthState>
          </AlertaState>
        </TareaState>  
      </ProyectoState>
      </ThemeProvider>
    );
  }

  export default App;
