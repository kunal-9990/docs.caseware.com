import React from 'react'
import Fade from 'react-reveal/Fade'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  arrows: true,
  dots: true,
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

const Slide = ({ image, title, url, i }) => 
  <div className="slide" key={i}>
    <div style={{backgroundImage: 'url(' + image.url + ')', backgroundSize: 'cover'}}>
      <div className="slide__ribbon">
        <h2>{title}</h2>
        <a href={url} target="_blank" rel="noopener">Learn more &#8250;</a>
      </div>
    </div>
  </div>

const MonitorSlide = ({ image, title, url, i }) => 
<div className="slide" key={i}>
  <div className="slide__monitor" style={{backgroundImage: 'url(/img/banner.jpg)', backgroundSize: 'cover'}}>
    <div className="wrapper">
      <div style={{backgroundImage: 'url(' + image.url + ')', backgroundSize: 'cover'}} className="screen"/>
      <img src="/img/monitor.png" className="monitor" />
    </div>
    <div className="slide__ribbon">
      <h2>{title}</h2>
      <a href={url} target="_blank" rel="noopener">Learn more &#8250;</a>
    </div>
  </div>
</div>


const Carousel = ({ carousel }) => {

  let desktopSlider = carousel.map((slide, i) => 
    slide.image_type === 'screenshot' ? (
      <MonitorSlide
        image={slide.image}
        title={slide.title}
        url={slide.url}
        key={i}
      />
    ) : ( 
      <Slide
        image={slide.image}
        title={slide.title}
        url={slide.url}
        key={i}
      />
    )
  )
  
  return (
    <Fade bottom>
      <div className="carousel">
        <div className="slide slide--mobile"> 
        {carousel[0].image_type === 'screenshot' ? (
          <MonitorSlide
            image={carousel[0].image}
            title={carousel[0].title}
            url={carousel[0].url}
          />
        ) : ( 
          <Slide
            image={carousel[0].image}
            title={carousel[0].title}
            url={carousel[0].url}
          />
        )}
        </div>
        <Slider {...settings}>
          {desktopSlider}
        </Slider>
      </div>
    </Fade>
  )
}

export default Carousel