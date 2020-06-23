import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal'
import YouTube from 'react-youtube'
Modal.setAppElement('#main');


const YouTubeOptions = {
  // height: '390',
  // width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
}

const VideoLightbox = ({ item, handleCloseModal }) => {
  console.log(item)

  return(
    <div className="video-lightbox__container">
      <div className="video-lightbox__header">
        <button 
          onClick={handleCloseModal}
          name="close"
          aria-label="close"
        >&times;</button>
      </div>
      <div className="video-lightbox__content">
        <YouTube videoId={item.acf.youtube_id} opts={YouTubeOptions} onReady={this._onReady} />
        <div className="video-lightbox__details">
          <h2 dangerouslySetInnerHTML={{__html: item.title}}></h2>
          <div dangerouslySetInnerHTML={{__html: item.acf.description}} />
        </div>
      </div>
    </div>
  )
  }

class VideoGridItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: this.props.item.slug === this.props.slug ? true : false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ modalOpen: true })
    window.history.pushState({}, 'videos', '/videos/' + this.props.item.slug)
  }
  
  handleCloseModal () {
    this.setState({ modalOpen: false });
    window.history.pushState({}, '/videos/' + this.props.item.slug, '/videos')
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
            ></div>
            <div className="grid-item__wrapper">
              <h2 dangerouslySetInnerHTML={{__html: item.title}}></h2>
              {/* <div className="grid-item__hover-content">
                <div>
                  { item.excerpt && (<div dangerouslySetInnerHTML={{__html: item.excerpt.rendered}} className="grid-item__excerpt" />)} 
                  <div className="grid-item__filter">
                    { item.postFilters.length > 0 && (<FontAwesomeIcon icon={ item.postFilters.length > 1 ? faTags : faTag } />) }
                    { item.postFilters.join(', ')} 
                  </div>
                </div>
              </div> */}
              <div className="arrow-cta"><div>Read More</div></div>
            </div>
          </div>
        </Fade>
        {/* --- Modal --- */}
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.handleCloseModal}
          contentLabel="Video Lightbox"
          id={item.slug}
          portalClassName="video-lightbox"
          overlayClassName="video-lightbox__overlay"
          className="video-lightbox__wrapper"
        >
          <VideoLightbox item={item} handleCloseModal={this.handleCloseModal} />
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