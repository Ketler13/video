import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Video from './Video'
import Loader from './Loader'
import LoadingFailed from './LoadingFailed'

const VideoList = ({vids, error, loading, loaded}) => {
  const noVidsYet = !loaded && !loading && !error
  if (noVidsYet) return null

  const vidsAreLoading = !!loading
  if (vidsAreLoading) return <Loader/>

  const loadingFailed = !!error && !loading && !!loaded
  if (loadingFailed) return <LoadingFailed/>

  const videoList = vids.map(vid => {
    return (
      <li key={vid.id}>
        <Video vid={vid} />
      </li>
    )
  })
  return (
    <ul>{videoList}</ul>
  )
}

VideoList.propTypes = {
  vids: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
  loaded: PropTypes.bool
}

export default connect(store => {
  const { vids, error, loading, loaded } = store.video
  return {
    vids, error, loading, loaded
  }
})(VideoList)
