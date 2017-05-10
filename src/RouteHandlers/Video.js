import React from 'react'

const Video = (props) => {
  const src = `https://www.youtube.com/embed/${props.params.id}`
  return (
    <div>
      <iframe
        width="560"
        height="315"
        className='embededVideo'
        src={src}
        frameBorder="1"
        allowFullScreen={true}
      >
      </iframe>
    </div>
  )
}

export default Video
