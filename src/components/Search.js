import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { loadVideos, setInputValue } from '../AC'

class Search extends Component {
  static propTypes = {

  }

  handleChange = ev => {
    this.props.setInputValue(ev.target.value)
  }

  render() {
    return (
      <div>
        <input type = 'text' value = {this.props.value} onChange = {this.handleChange}/>
        <button onClick = {this.props.loadVideos}>Search</button>
      </div>
    )
  }
}

export default connect(store => {
  return {
    value: store.video.inputValue
  }
}, {loadVideos, setInputValue})(Search)
