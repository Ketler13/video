import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'

const Video = ({vid}) => {
  return (
    <div>
      <Link to={`/video/${vid.id}`}>
        <p>{vid.title}</p>
      </Link>
      <img src={vid.img} alt='Poster'/>
    </div>
  )
}

Video.propTypes = {
  vid: PropTypes.object
}

export default Video
