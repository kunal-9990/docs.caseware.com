import React, { Component } from 'react'
import Dropdown from './Dropdown'
import Modal from 'react-modal'
Modal.setAppElement('body');

const RegionWrapper = ({ handleCloseModal, handleRegionChange, regionOptions }) => (
  <div className="region-lightbox">
      <div className="lightbox__header">
        <button 
          onClick={handleCloseModal}
          name="close"
          aria-label="close"
        >&times;</button>
      </div>
      <div>
        <p>Choose another country or region to see content specific to your location.</p>
      </div>
      <Dropdown 
        options={regionOptions} 
        onChange={handleRegionChange}
        placeholder="Select Region"
        isMulti={false}
      />
      <button 
        onClick={handleCloseModal}
        name="continue"
        aria-label="continue"
        className="mk4btn"
      >Continue</button>
  </div>
)

class RegionLightbox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // modalOpen: this.props.item.slug === this.props.slug ? true : false
      modalOpen: true,
      dropdownOptions: [],

    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
  }

  handleOpenModal () {
    this.setState({ modalOpen: true })
    // window.history.pushState({}, 'videos', '/videos/' + this.props.item.slug)
  }
  
  handleCloseModal () {
    this.setState({ modalOpen: false });
    // window.history.pushState({}, '/videos/' + this.props.item.slug, '/videos')
  }

  handleRegionChange () {
    console.log("REGION CHANGE")
  }

  render() {
    let regionOptions = [
      { "value": "canada", "label": "Canada" },
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
            handleRegionChange={this.handleRegionChange()}
            regionOptions={regionOptions}
          />
        </Modal>
    )
  }
}

export default RegionLightbox