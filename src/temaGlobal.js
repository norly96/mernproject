import {createTheme} from '@material-ui/core/styles';

const theme = createTheme({
   palette: {
       warning: {
           main: '#ffbf69'
       },
       primary: {
           main: '#011627'
       },
       secondary: {
           main: '#ff9f1c'
       },
       error: {
        main: '#e71d36',
        light: '#a21430'
       },
       info: {
        main: '#ff9f1c'
       },
       success:{
        main: '#2ec4b6',
        light: '#41b2a7',
       }
   }
})

export default theme;