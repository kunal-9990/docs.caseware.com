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


const VideoGallery = ({ videos }) => {

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
    <div className="container home__video">
      <div className="row">
        <div className="col-sm-12">
          {/* <div className="slide slide--mobile">  
            <Slide
              image={carousel[0].image}
              title={carousel[0].title}
              url={carousel[0].url}
            />
          </div> */}
          <Slider {...settings}>
            {desktopSlider}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default VideoGallery