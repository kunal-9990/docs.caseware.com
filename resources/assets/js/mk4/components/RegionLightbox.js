import React, { Component } from 'react'
import Dropdown from './Dropdown'
import Modal from 'react-modal'
Modal.setAppElement('body');

const RegionWrapper = ({ handleCloseModal, handleRegionChange, regionOptions, handleDismissModal }) => (
  <div className="region-lightbox">
      <div className="lightbox__header">
        <button 
          onClick={handleCloseModal}
          name="close"
          aria-label="close"
        >&times;</button>
      </div>
      <div className="message">
        <p>You're visiting a page outside of your detected region.</p>
      </div>
      {/* <Dropdown 
        options={regionOptions} 
        onChange={handleRegionChange}
        placeholder="Select Region"
        isMulti={false}
      /> */}
      <div className="btn-container">
        <button 
          onClick={handleDismissModal}
          name="continue"
          aria-label="continue"
          className="mk4btn"
        >Continue and dismiss</button>
        <button 
          onClick={handleRegionChange}
          name="redirect"
          aria-label="redirect"
          className="mk4btn"
        >Change to my region's site</button>
        
      </div>
  </div>
)

class RegionLightbox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: this.props.open,
      dropdownOptions: [],
      selectedRegion: ''
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDismissModal = this.handleDismissModal.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
  }

  handleOpenModal () {
    this.setState({ modalOpen: true })
  }
  
  handleCloseModal () {
    this.setState({ modalOpen: false });
  }

  handleDismissModal () {
    document.cookie = "modalDismissed=1;path=/";
    this.setState({ modalOpen: false });
  }

  handleRegionChange () {
    window.location.href = this.props.redirect;
  }

  render() {
    let redirect = this.props.redirect;

    let regionOptions = [
      { "value": "ca", "label": "Canada" },
      { "value": "us", "label": "USA" }
    ]

    return (
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.handleCloseModal}
          contentLabel="Region Lightbox"
          portalClassName="lightbox"
          overlayClassName="lightbox__overlay"
          className="lightbox__region"
        >
          <RegionWrapper 
            handleCloseModal={this.handleCloseModal}
            handleRegionChange={this.handleRegionChange}
            handleDismissModal={this.handleDismissModal}
            regionOptions={regionOptions}
          />
        </Modal>
    )
  }
}

export default RegionLightbox