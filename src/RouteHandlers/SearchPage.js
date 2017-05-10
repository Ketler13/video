import React, {Component} from 'react';
import Search from '../components/Search'
import VideoList from '../components/VideoList'

class SearchPage extends Component {
  render() {
    const style = {
      maxWidth: '960px',
      margin: '0 auto',
      marginTop: '20px',
    }
    return (
      <div style={style}>
        <Search />
        <VideoList />
      </div>
    );
  }
}

export default SearchPage;
