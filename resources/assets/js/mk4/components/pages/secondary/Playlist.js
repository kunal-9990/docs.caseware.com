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
  slidesToShow: 3,
  slidesToScroll: 3,
  // responsive: [{
  //   breakpoint: 768,
  //   settings: "unslick",
  //   slidesToShow: 1
  // }]
}

const PlaylistSlide = ({ slide, key }) => (
  <div className="playlist__slide" key={key}>
      <div className="playlist__thumbnail">
        <img src={slide.acf.thumbnail_image.url} alt={slide.acf.thumbnail_image.alt} />
        {slide.acf.time && <div class="time">{slide.acf.time}</div>}
      </div>
      {(slide.acf.video_title_prepend || slide.acf.video_title) ? (
        <div className="playlist__details">
          {slide.acf.video_title_prepend && <span>{slide.acf.video_title_prepend}</span>}
          {slide.acf.video_title && <h3>{slide.acf.video_title}</h3>}
        </div>
      ) : (
        <div className="playlist__details">
          <h3 dangerouslySetInnerHTML={{__html: slide.title.rendered}}></h3>
        </div>
      )}
  </div>
)

class Playlist extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    console.log(this.props)
    let playlistSlider = this.props.playlist.map((slide, i) => <PlaylistSlide slide={slide} key={i} />)
    return (
      <Fade bottom>
        <div className="playlist">
          <div className="inner-container">
            {this.props.header && <h2>{this.props.header}</h2>}
            {this.props.description && <span>{this.props.description}</span>}
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