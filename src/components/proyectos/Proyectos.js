import React, {Fragment, useContext, useEffect} from 'react';
import Sidebar from '../layout/Sidebar';
import Main from '../layout/Main';
import Appbar from '../layout/Appbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AuthContext from '../../context/auth/authContext'

const Proyectos = () => {

  // Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const {usuarioAutenticado} = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, [])


    return (
        <Fragment >
            <Box>
                <Appbar/><br/>
              <Container maxWidth={false}>
                <Grid container spacing={3} >
                  <Grid item lg={4} md={12} xl={5} xs={12}>
                    <Sidebar/>
                  </Grid>
                  <Grid item lg={8} md={12} xl={7} xs={12}>
                    <Main/>
                  </Grid>
                </Grid>
              </Container>         
            </Box>
        </Fragment>
    )
}

export default Proyectos;
