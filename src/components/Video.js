import React, {Component} from 'react'
import PropTypes from 'prop-types'

const Video = ({vid}) => {
  return (
    <div>
      <p>{vid.title}</p>
      <img src = {vid.img} />
    </div>
  )
}

Video.propTypes = {

}

export default Video
