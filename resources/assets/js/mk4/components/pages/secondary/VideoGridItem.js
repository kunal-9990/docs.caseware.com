import React, { Component } from 'react'
import Modal from 'react-modal';
Modal.setAppElement('#main');

class VideoGridItem extends Component {
// const VideoItem2 = ({ item }) => {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  // const [modalOpen, setModalOpen] = useState(false);
  handleOpenModal () {
    console.log("OPEN MODAL!!!!")
    this.setState({ modalOpen: true });
  }
  
  handleCloseModal () {
    console.log("close")
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleOpenModal}>Open {this.props.item.title}</button>
        <Modal
          closeTimeoutMS={300}
          isOpen={this.state.modalOpen}
          onRequestClose={this.handleCloseModal}
        >
          <button onClick={this.handleCloseModal}>Close</button>
          <h2>{this.props.item.title}</h2>
        </Modal>
      </React.Fragment>
    )
  }
}

export default VideoGridItem


// const VideoItem = ({ item, openModal, showModal, closeModal }) => {
//   // console.log(item) 
//   return(
//   <Fade bottom>
//     <div className="grid-item" onClick={openModal} >
//       <div 
//         style={{ background: item.acf.thumbnail_image ? `url(` + item.acf.thumbnail_image.url + `) center center / cover` : "#CCC"}}
//         className="grid-item__bg"
//       ></div>
//       <div className="grid-item__wrapper">
//         <h2>{item.title}</h2>
//         {/* <div className="grid-item__hover-content">
//           <div>
//             { item.excerpt && (<div dangerouslySetInnerHTML={{__html: item.excerpt.rendered}} className="grid-item__excerpt" />)} 
//             <div className="grid-item__filter">
//               { item.postFilters.length > 0 && (<FontAwesomeIcon icon={ item.postFilters.length > 1 ? faTags : faTag } />) }
//               { item.postFilters.join(', ')} 
//             </div>
//           </div>
//         </div> */}
//         <div className="arrow-cta"><div>Read More</div></div>
//       </div>

//       <Modal 
//                 isOpen={showModal} 
//                 contentLabel="VideoLightbox"
//                 onRequestClose={closeModal}
//                 // className="video-modal"
//                 // overlayClassName="video-modal-overlay"
//               >
//                 <VideoLightbox item={item} closeModal={closeModal} />
//               </Modal>

//     </div>

//   </Fade>
// )}