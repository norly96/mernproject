import React from 'react';
import ListadoProyectos from '../proyectos/ListadoProyectos';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';


 const Sidebar = () =>  {

   return (
    <Card>
      <Divider/>
      <CardContent>
          <NuevoProyecto/>
          <ListadoProyectos/>
      </CardContent>
      <Divider/>      
    </Card>    
  );

}

export default Sidebar;
