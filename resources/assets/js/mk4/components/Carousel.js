import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
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
  <div className="slide">
    <div style={{backgroundImage: 'url(' + image.url + ')', backgroundSize: 'cover'}} key={i}>
      <div className="slide__ribbon">
        <h2>{title}</h2>
        <a href={url} target="_blank">Learn more &#8250;</a>
      </div>
    </div>
  </div>


const Carousel = ({ carousel }) => {

  let desktopSlider = carousel.map((slide, i) => (
    <Slide
      image={slide.image}
      title={slide.title}
      url={slide.url}
      key={i}
    />
  ))

  return (
    <div className="container home__carousel">
      <div className="row">
        <div className="col-sm-12">
          <div className="slide slide--mobile">  
            <Slide
              image={carousel[0].image}
              title={carousel[0].title}
              url={carousel[0].url}
            />
          </div>
          <Slider {...settings}>
            {desktopSlider}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Carousel