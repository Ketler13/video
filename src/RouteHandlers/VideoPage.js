import React, {Component} from 'react'
import PropTypes from 'prop-types'

const VideoPage = (props) => {
  console.log(props);
  return (
    <div>
      <p>videos</p>
      {props.video}
    </div>
  )
}

VideoPage.propTypes = {

}

export default VideoPage
