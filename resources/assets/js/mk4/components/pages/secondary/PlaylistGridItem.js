import React, { Component } from 'react'
import Modal from 'react-modal'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import VideoLightbox from '../../VideoLightbox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons'

Modal.setAppElement('#main');

class PlaylistGridItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: this.props.slide.slug === this.props.slug ? true : false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.videoOverviewUrl = window.location.href
  }

  componentDidMount() {
    if (this.props.slug) {
      this.videoOverviewUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/'))
    }
    if (window.location.hash) {
      this.videoOverviewUrl = window.location.href.split("#")[0];
    }
  }

  handleOpenModal () {
    console.log("Click")
    this.setState({ modalOpen: true })
    window.history.pushState(null, null, this.videoOverviewUrl + '/' + this.props.slide.slug)
  }
  
  handleCloseModal () {
    this.setState({ modalOpen: false });
    window.history.pushState(null, null, this.videoOverviewUrl)
  }

  render() {
    console.log("thislide", this.props.slide)
    return (
      <React.Fragment>
        <div 
          key={this.props.key} 
          onClick={() => this.handleOpenModal()}
          className="playlist__slide"
        >
            <div className="playlist__thumbnail">
              <img src={this.props.slide.acf.thumbnail_image.url} alt={this.props.slide.acf.thumbnail_image.alt} />
              {this.props.slide.acf.time && <div className="time">{this.props.slide.acf.time}</div>}
            </div>
            {(this.props.slide.acf.video_title_prepend || this.props.slide.acf.video_title) ? (
              <div className="playlist__details">
                {this.props.slide.acf.video_title_prepend && <span>{this.props.slide.acf.video_title_prepend}</span>}
                {this.props.slide.acf.video_title && <h3>{this.props.slide.acf.video_title}</h3>}
              </div>
            ) : (
              <div className="playlist__details">
                <h3 dangerouslySetInnerHTML={{__html: this.props.slide.title.rendered}}></h3>
              </div>
            )}
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.handleCloseModal}
          contentLabel="Video Lightbox"
          id={this.props.slide.slug}
          portalClassName="lightbox"
          overlayClassName="lightbox__overlay"
          className="lightbox__video"
        >
          <VideoLightbox 
            item={this.props.slide} 
            videoPage={this.videoOverviewUrl}
            handleCloseModal={this.handleCloseModal} 
          />
        </Modal>
      </React.Fragment>
   )
  }
}

export default PlaylistGridItem

