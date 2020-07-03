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
      modalOpen: this.props.open, // TODO - check for cookie here? (i.e. regionCookie ? false : true)
      dropdownOptions: [],
      selectedRegion: ''
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
  }

  handleOpenModal () {
    this.setState({ modalOpen: true })
  }
  
  handleCloseModal () {
    this.setState({ modalOpen: false });
  }

  handleRegionChange (region) {
    console.log("SELECTED REGION: " + region.label)
    this.setState({ 
      selectedRegion: region.value 
    }, () => window.location.href = '/' + this.state.selectedRegion) // TODO - fix to include page and language parameters
  }

  render() {
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
            regionOptions={regionOptions}
          />
        </Modal>
    )
  }
}

export default RegionLightbox