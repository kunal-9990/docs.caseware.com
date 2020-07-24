import React from 'react'
import Fade from 'react-reveal/Fade'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlaylistGridItem from './PlaylistGridItem'

const settings = {
  arrows: true,
  dots: false,
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

const PlaylistGrid = ( props ) => {
  console.log(props)
  let playlistSlider = props.playlist.map((slide, i) => 
    <PlaylistGridItem 
      slide={slide} 
      key={i}
    />
  )
  return (
    <Fade bottom>
      <div className="playlist">
        <div className="inner-container">
          {props.header && <h2>{props.header}</h2>}
          {props.description && <span>{props.description}</span>}
        </div>
        <Slider {...settings}>
          {playlistSlider}
        </Slider>
      </div>
    </Fade>
  )
}

export default PlaylistGrid