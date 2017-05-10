import React, { Component } from 'react';
import store from '../store'
import { Provider } from 'react-redux'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Paper from 'material-ui/Paper'
import './App.css';

class App extends Component {
  render() {
    const style = {
      paper: {
        minHeight: '100vw',
      },
      h1: {
        maxWidth: '960px',
        margin: '0 auto',
      }
    }
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Provider store={store}>
          <Paper style={style.paper}>
            <h1 style={style.h1}>Поиск роликов из сети Youtube</h1>
            {this.props.children}
          </Paper>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
