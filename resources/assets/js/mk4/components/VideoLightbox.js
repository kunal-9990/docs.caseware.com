import React, { Component } from 'react'
import YouTube from 'react-youtube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faTags, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const YouTubeOptions = {
  // height: '390',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
}

const VideoTags = ({ item, videoPage }) => (
  item.videoFilters.map((filter, i) => 
    <React.Fragment key={i}>
      <a href={videoPage + '#' + filter.replace(/ /g, '-').toLowerCase() } rel="noopener" key={i} >{ filter }</a>
      { i + 1 !== item.videoFilters.length && <span>, </span> }
    </React.Fragment>
  )
)

class VideoLightbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    }
  }
  
  toggleDetails() {
    this.setState(prevState => ({ showDetails: !prevState.showDetails }))
  }

  render() {
    return (
      <div className="video-lightbox__container">
        <div>
          <div className="lightbox__header">
            <button 
              onClick={ this.props.handleCloseModal}
              name="close"
              aria-label="close"
            >&times;</button>
          </div>
          <div className="video-lightbox__content">
            <YouTube 
              videoId={this.props.item.acf.youtube_id} 
              opts={YouTubeOptions} 
              onReady={this._onReady} 
              containerClassName="iframe-video-wrapper"
            />
          </div>
        </div>

        <div className="video-lightbox__wrapper">

          {(this.props.item.acf.cta || this.props.item.acf.description !== null) && (
            <div onClick={() => this.toggleDetails()} className="button button--chevron">
              <FontAwesomeIcon icon={faChevronUp} className={this.state.showDetails ? 'down' : 'up'}/>
            </div>
          )}

          <div className="video-lightbox__title">
            {(this.props.item.acf.video_title || this.props.item.acf.video_title_prepend) ? (
              <React.Fragment>
                { this.props.item.acf.video_title_prepend && <h3>{ this.props.item.acf.video_title_prepend }</h3> }
                { this.props.item.acf.video_title && <h1>{ this.props.item.acf.video_title }</h1> }
              </React.Fragment>
              ) : (
              <h2 dangerouslySetInnerHTML={{__html: this.props.item.title.rendered}} />
            )}
          </div>
          <div className="grid-item__filter">
            { this.props.item.videoFilters.length > 0 && (<FontAwesomeIcon icon={ this.props.item.videoFilters.length > 1 ? faTags : faTag } />) }
            { <VideoTags item={this.props.item} videoPage={this.props.videoPage}/> } 
          </div>

          {(this.props.item.acf.cta || this.props.item.acf.description !== null) && (
            <div onClick={() => this.toggleDetails()} className="button button--text">
              {this.state.showDetails ? 'Show Less' : 'Show More'}
            </div>
          )}

          {this.state.showDetails && (
            <div className="video-lightbox__description">
              <div dangerouslySetInnerHTML={{__html: this.props.item.acf.description}} />
              {(this.props.item.acf.cta && (this.props.item.acf.cta.strapline || this.props.item.acf.cta.button_link)) && (
                <div className="video-lightbox__cta">
                  {this.props.item.acf.cta.strapline && <p>{ this.props.item.acf.cta.strapline} </p>}
                  {(this.props.item.acf.cta.button_label && this.props.item.acf.cta.button_link) && (
                    <a href={this.props.item.acf.cta.button_link} className="mk4btn" target="_blanks">
                      { this.props.item.acf.cta.button_label }
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default VideoLightbox