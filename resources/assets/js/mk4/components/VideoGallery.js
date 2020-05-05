import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Slide = ({ url, i }) => 
  <div className="slide iframe-video-wrapper" key={i}>
        <iframe  
      src={url} 
      className="yt-video-iframe" 
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>


const VideoGallery = ({ videos, cta, label, link }) => {

  const settings = {
    customPaging: function(i) {
      return (
        <div className="thumbnails__block" style={{backgroundImage: 'url(' + videos[i].thumbnail.url + ')', backgroundSize: 'cover'}}>
          <div></div>
        </div>
      );
    },
    dots: true,
    dotsClass: "thumbnails",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: "unslick",
      slidesToShow: 1
    }]
  }

  let desktopSlider = videos.map((slide, i) => (
    <Slide
      url={slide.url}
      key={i}
    />
  ))

  return (
    <div className="video-gallery">
      <div className="slide slide--mobile">  
        <Slide
          url={videos[0].url}
        />
        { cta && (<a href={ link } className="mk4btn" target="_blank">{ label }</a> )}
      </div>
      <Slider {...settings}>
        {desktopSlider}
      </Slider>
    </div>
  )
}

export default VideoGallery