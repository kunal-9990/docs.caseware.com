import React from 'react'
import Fade from 'react-reveal/Fade'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Slide = ({ url, i }) => 
  <div className="slide iframe-video-wrapper" key={i}>
    <iframe  
      src={url+'?enablejsapi=1&rel=0'}
      className="yt-video-iframe" 
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>


const VideoGallery = ({ videos, cta, label, link }) => {
  console.log(videos)
  const settings = {
    customPaging: function(i) {
      return (
        <div 
          className="thumbnails__block" 
          style={{backgroundImage: 'url(' + videos[i].thumbnail.url + ')', backgroundSize: 'cover'}}
          title={ videos[i].video_title }
        >
          {/* <div><span>{ videos[i].video_title }</span></div> */}
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
    <Fade bottom>
      <div className="video-gallery">
        <div className="slide slide--mobile">  
          <Slide
            url={videos[0].url}
          />
          { cta && (<a href={ link } className="mk4btn" target="_blank" rel="noopener">{ label }</a> )}
        </div>
        <Slider {...settings}>
          {desktopSlider}
        </Slider>
      </div>
    </Fade>
  )
}

export default VideoGallery