import React, { Component } from 'react';
import store from '../store'
import { Provider } from 'react-redux'
import '../App.css';
import Search from '../components/Search'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Search />
      </Provider>
    );
  }
}

export default App;
