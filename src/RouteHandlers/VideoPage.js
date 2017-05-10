import React from 'react'
import PropTypes from 'prop-types'
import VideoPageHeader from '../components/VideoPageHeader'

const VideoPage = ({video}) => {
  return (
    <div>
      <VideoPageHeader/>
      {video}
    </div>
  )
}

VideoPage.propTypes = {
  video: PropTypes.object
}

export default VideoPage
