import React from 'react'

const Video = (props) => {
  const src = `https://www.youtube.com/embed/${props.params.id}?autoplay=1`
  return (
    <div>
      <iframe width="560" height="315" src={src} frameBorder="1" allowFullScreen={true}></iframe>
    </div>
  )
}

export default Video
