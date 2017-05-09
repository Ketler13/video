import React, { Component } from 'react';
import store from '../store'
import { Provider } from 'react-redux'
import '../App.css';
import Search from '../components/Search'
import VideoList from '../components/VideoList'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
          <Search />
          <VideoList />
        </div>
      </Provider>
    );
  }
}

export default App;
