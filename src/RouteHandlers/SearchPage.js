import React, { Component } from 'react';
import store from '../store'
import { Provider } from 'react-redux'
import '../App.css';
import Search from '../components/Search'
import VideoList from '../components/VideoList'

class SearchPage extends Component {
  render() {
    return (
      <div>
        <Search />
        <VideoList />
      </div>
    );
  }
}

export default SearchPage;
