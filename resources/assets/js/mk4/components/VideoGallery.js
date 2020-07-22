import React from 'react'
import Fade from 'react-reveal/Fade'
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


const VideoGallery = ( props ) => {
  const settings = {
    customPaging: function(i) {
      return (
        <div 
          className="thumbnails__block" 
          style={{backgroundImage: 'url(' + props.video_gallery[i].thumbnail.url + ')', backgroundSize: 'cover'}}
          title={ props.video_gallery[i].video_title }
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

  let desktopSlider = props.video_gallery.map((slide, i) => (
    <Slide
      url={slide.url}
      key={i}
    />
  ))

  return (
    <Fade bottom>
      <div className="video-gallery">
        <div className="inner-container">
          {props.header && <h2>{props.header}</h2>}
          {props.description && <div dangerouslySetInnerHTML={{__html: props.description}}></div>}
        </div>
        <div className="slide slide--mobile">  
          <Slide
            url={props.video_gallery[0].url}
          />
          { props.cta && (<a href={ props.cta_link } className="mk4btn" target="_blank" rel="noopener">{ props.cta_label }</a> )}
        </div>
        <Slider {...settings}>
          {desktopSlider}
        </Slider>
      </div>
    </Fade>
  )
}

export default VideoGallery