import React, { Component } from 'react';
import store from '../store'
import { Provider } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    const style = {
      paper: {
        minHeight: '100vw',
        maxWidth: '960px',
        margin: '0 auto',
      }
    }
    return (
      <Provider store={store}>
        <div style={style.paper}>
          <h1>YOU<span className='logo-red-part'>TEN</span></h1>
          <h2>10 лучших роликов</h2>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

export default App;
