import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Video from './Video'

const VideoList = ({vids, error, loading, loaded}) => {
  const noVidsYet = !loaded && !loading && !error
  const vidsAreLoading = !!loading
  const loadingFailed = !!error && !loading && !!loaded
  if (!vids || !vids.length) return <div>No vids</div>
  const videoList = vids.map(vid => {
    return (
      <li key = {vid.id}>
        <Video vid = {vid} />
      </li>
    )
  })
  return (
    <ul>{videoList}</ul>
  )
}

VideoList.propTypes = {

}

export default connect(store => {
  const { vids, error, loading, loaded } = store.video
  return {
    vids, error, loading, loaded
  }
})(VideoList)
