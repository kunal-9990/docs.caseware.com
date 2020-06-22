import React from 'react'

const VideoLightbox = ({ item, closeModal }) => {
  return (
    <div>
    <h1>Video Lightbox!</h1>
    <p>{item.slug}</p>
    <p>{item.title}</p>
    <button onClick={closeModal}>Close</button>
    </div>
  )
}

export default VideoLightbox