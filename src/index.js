import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#1976d2'
      main: '#2196f3'
    },
    secondary: {
      // main: '#DC004E'
      main: '#b39ddb'
    }
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider> ,document.getElementById('root'));

serviceWorker.unregister();
