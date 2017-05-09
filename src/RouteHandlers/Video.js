import React, {Component} from 'react'
import PropTypes from 'prop-types'

const Video = (props) => {
  const src = `https://www.youtube.com/embed/${props.params.id}?autoplay=1`
  return (
    <div>
      <iframe width="560" height="315" src={src} frameborder="1"></iframe>
    </div>
  )
}

Video.propTypes = {

}

export default Video
