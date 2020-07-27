import React, { Component } from 'react'
import Modal from 'react-modal'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import VideoLightbox from '../../VideoLightbox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons'

Modal.setAppElement('#main');

class PlaylistGridItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: this.props.slide.slug === this.props.slug ? true : false,
      item: this.props.slide
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

    let tagList = this.props.slide.tags.map(id => this.props.tags.results.find(o => o.id === id).name);
    let catList = this.props.slide.categories.filter(c => c !== 1).map(id => this.props.categories.results.find(o => o.id === id).name);
    
    this.setState({
      item: ({...this.state.item, videoFilters:catList.concat(tagList) })
    })
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
    // console.log("lide bad:", this.props.slide)
    console.log("!", this.state.item)

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
            <div className="playlist__details">
              {(this.props.slide.acf.video_title_prepend || this.props.slide.acf.video_title) ? (
                <React.Fragment>
                  {this.props.slide.acf.video_title_prepend && <span>{this.props.slide.acf.video_title_prepend}</span>}
                  {this.props.slide.acf.video_title && <h3>{this.props.slide.acf.video_title}</h3>}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <h3 dangerouslySetInnerHTML={{__html: this.props.slide.title.rendered}}></h3>
                </React.Fragment>
              )}
              {this.state.item.videoFilters && (
                <div className="grid-item__filter">
                  { this.state.item.videoFilters.length > 0 && (<FontAwesomeIcon icon={ this.state.item.videoFilters.length > 1 ? faTags : faTag } />) }
                  { this.state.item.videoFilters.join(', ')} 
                </div>
              )}
            </div>
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
            item={this.state.item} 
            videoPage={this.videoOverviewUrl}
            handleCloseModal={this.handleCloseModal} 
          />
        </Modal>
      </React.Fragment>
   )
  }
}

export default PlaylistGridItem

