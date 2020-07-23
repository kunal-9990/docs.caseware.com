import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ReactPaginate from 'react-paginate';
import Dropdown from '../../Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons'



const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // responsive: [{
  //   breakpoint: 768,
  //   settings: "unslick",
  //   slidesToShow: 1
  // }]
}

const PlaylistSlide = ({ }) => {

}

class Playlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.props)
    let playlistSlider = this.props.playlist.map((slide, i) => <PlaylistSlide />)
    return (
      <Fade bottom>
        <div className="playlist">
          <div className="inner-container">
            {props.header && <h2>{this.props.header}</h2>}
            {props.description && <span>{this.props.description}</span>}
          </div>
          <Slider {...settings}>
            {playlistSlider}
          </Slider>
        </div>
      </Fade>
    )
  }
}

export default Playlist