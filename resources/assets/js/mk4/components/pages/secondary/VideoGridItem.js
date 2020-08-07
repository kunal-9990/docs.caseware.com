import React, { Component } from 'react'
import VideoLightbox from '../../VideoLightbox'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons'
// let fetchVideoInfo = require('youtube-info');

Modal.setAppElement('#main');

class VideoGridItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: this.props.item.slug === this.props.slug ? true : false
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
    this.setState({ modalOpen: true })
    window.history.pushState(null, null, this.videoOverviewUrl + '/' + this.props.item.slug)
  }
  
  handleCloseModal () {
    this.setState({ modalOpen: false });
    window.history.pushState(null, null, this.videoOverviewUrl)
  }

  render() {
    const item = this.props.item
    return (
      <React.Fragment>
        {/* --- Grid Item --- */}
        <Fade bottom>
          <div className="grid-item" onClick={this.handleOpenModal} >
            <div 
              style={{ background: item.acf.thumbnail_image ? `url(` + item.acf.thumbnail_image.url + `) center center / cover` : "#CCC"}}
              className="grid-item__bg"
            >
            </div>
            <div className="grid-item__play">
              <img src="/img/play.png" className="play-btn" alt="play" />
            </div>
            <div className="grid-item__wrapper">
              <h2 dangerouslySetInnerHTML={{__html: item.title}}></h2>
              <div className="grid-item__hover-content">
                <div>
                  <div className="grid-item__filter">
                    { item.videoFilters.length > 0 && (<FontAwesomeIcon icon={ item.videoFilters.length > 1 ? faTags : faTag } />) }
                    { item.videoFilters.join(', ')} 
                  </div>
                </div>
              </div>
              <div className="arrow-cta"><div>Watch Now</div></div>
            </div>
          </div>
        </Fade>
        {/* --- Modal --- */}
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.handleCloseModal}
          contentLabel="Video Lightbox"
          id={item.slug}
          portalClassName="lightbox"
          overlayClassName="lightbox__overlay"
          className="lightbox__video"
        >
          <VideoLightbox 
            item={item} 
            videoPage={this.videoOverviewUrl}
            handleCloseModal={this.handleCloseModal} 
          />
        </Modal>
      </React.Fragment>
    )
  }
}

export default VideoGridItem



// class VideoLightbox extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       videos: [],
//       loading: true
//     }
//   }
//   componentDidMount() {
//     var that = this;
//     var API_key = "RlosKtcCJVii9rsOvIB5gg";
//     var channelID = "UCRlosKtcCJVii9rsOvIB5gg";
//     var maxResults = 10;
//     var url =
//       "https://www.googleapis.com/youtube/v3/search?key=" +
//       API_key +
//       "&channelId=" +
//       channelID +
//       "&part=snippet,id&order=date&maxResults=" +
//       maxResults;
//     fetch(url)
//       .then(function(response) {
//         if (response.status >= 400) {
//           throw new Error("Bad response from server");
//         }
//         return response.json();
//       })
//       .then(function(data) {
//         that.setState({ videos: data.items, loading: false });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
//   render() {
//     if (this.state.loading) {
//       return null;
//     }
//     return (
//       <div className="App">
//         <YouTube
//           videoId={this.state.videos[1].id.videoId}
//           opts={{
//             height: "390",
//             width: "640",
//             playerVars: {
//               autoplay: 1
//             }
//           }}
//           onReady={this._onReady}
//         />
//       </div>
//     );
//   }
// }