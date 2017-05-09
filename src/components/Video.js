import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'

const Video = ({vid}) => {
  return (
    <div>
      <Link to = {`/videos/${vid.id}`}>
        <p>{vid.title}</p>
      </Link>
      <img src = {vid.img} />
    </div>
  )
}

Video.propTypes = {

}

export default Video
