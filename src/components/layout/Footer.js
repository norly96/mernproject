import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

 const Footer = () => {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="false">
            <Toolbar>
              <Typography variant="body1" color="inherit">
              {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      MERNProject
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
            
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}

export default Footer;
