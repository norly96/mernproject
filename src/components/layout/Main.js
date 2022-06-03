import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';



const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',justifyContent: 'center',paddingTop: 12,
  },    
}));

 const Main = () =>  {
  const classes = useStyles();
   return (
    <Card>
      <Divider/>
      <CardContent>
        <Box>
          <FormTarea/>
        </Box>
        <Box className={classes.paper}>
          <ListadoTareas/>             
        </Box>
      </CardContent>
      <Divider/>
    </Card>
  );

}

export default Main;

