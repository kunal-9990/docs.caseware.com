import React from 'react'
import YouTube from 'react-youtube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons'

const YouTubeOptions = {
  // height: '390',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
}

const VideoLightbox = ({ item, videoPage, handleCloseModal }) => {
  // let videoTags = item.videoFilters.join(', ')
  
  let videoTags = item.videoFilters.map((filter, i) => 
    <React.Fragment key={i}>
      <a href={videoPage + '#' + filter.replace(/ /g, '-').toLowerCase() } rel="noopener" key={i} >{ filter }</a>
      { i + 1 !== item.videoFilters.length && <span>, </span> }
    </React.Fragment>
  )
  return(
    <div className="video-lightbox__container">
      <div className="lightbox__header">
        <button 
          onClick={handleCloseModal}
          name="close"
          aria-label="close"
        >&times;</button>
      </div>
      <div className="video-lightbox__content">
        <YouTube 
          videoId={item.acf.youtube_id} 
          opts={YouTubeOptions} 
          onReady={this._onReady} 
          containerClassName="iframe-video-wrapper"
        />
      </div>
      <div className="video-lightbox__details">
        {(item.acf.video_title || item.acf.video_title_prepend) ? (
          <div className="video-lightbox__title">
            { item.acf.video_title_prepend && <h3>{ item.acf.video_title_prepend }</h3> }
            { item.acf.video_title && <h1>{ item.acf.video_title }</h1> }
          </div>
        ) : (
          <div className="video-lightbox__title"><h2 dangerouslySetInnerHTML={{__html: item.title.rendered}}></h2></div>
        )}
        <div className="video-lightbox__description">
          <div className="grid-item__filter">
            { item.videoFilters.length > 0 && (<FontAwesomeIcon icon={ item.videoFilters.length > 1 ? faTags : faTag } />) }
            { videoTags } 
          </div>
          <div dangerouslySetInnerHTML={{__html: item.acf.description}} />
        </div>
        {(item.acf.cta && (item.acf.cta.strapline || item.acf.cta.button_link)) && (
          <div className="video-lightbox__cta">
            {item.acf.cta.strapline && <p>{ item.acf.cta.strapline} </p>}
            {(item.acf.cta.button_label && item.acf.cta.button_link) && (
              <a href={item.acf.cta.button_link} className="mk4btn" target="_blanks">
                { item.acf.cta.button_label }
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoLightbox