import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal';
Modal.setAppElement('#main');

class VideoGridItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ modalOpen: true });
  }
  
  handleCloseModal () {
    this.setState({ modalOpen: false });
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