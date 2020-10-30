import React from 'react'
import Fade from 'react-reveal/Fade'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const ArrowPrev = ({ className, onClick }) => (
  <div onClick={onClick} className={className + ' custom-slick-arrow custom-slick-arrow--carousel custom-slick-arrow--prev'}>
      <FontAwesomeIcon icon={faChevronLeft} />
  </div>
)
const ArrowNext = ({ className, onClick }) => (
  <div onClick={onClick} className={className + ' custom-slick-arrow custom-slick-arrow--carousel custom-slick-arrow--next'}>      
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const settings = {
  arrows: true,
  prevArrow: <ArrowPrev />,
  nextArrow: <ArrowNext />,
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

const Slide = ({ image, title, label, url, i }) => 
  <div className="slide" key={i}>
    {(!title && !label) ? (
      url ? (
      <a href={url} target="_blank" rel="noopener">
        <div style={{backgroundImage: 'url(' + image.url + ')', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
        </div>
      </a>
      ) : ( <div style={{backgroundImage: 'url(' + image.url + ')', backgroundSize: 'cover', backgroundPosition: 'center center'}}></div> )
    ) : (
      <div style={{backgroundImage: 'url(' + image.url + ')', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
        <div className="slide__ribbon">
          {(url && !title && !label) && <h1>yes</h1>}
          {title && <h2>{title}</h2>}
          {url && <a href={url} target="_blank" rel="noopener">{ label ? label : 'Learn more'}</a>}
        </div>
      </div>
    )}
  </div>

const MonitorSlide = ({ image, title, label, url, i }) => 
<div className="slide" key={i}>
  <div className="slide__monitor" style={{backgroundImage: 'url(/img/banner.jpg)', backgroundSize: 'cover'}}>
    <div className="wrapper">
      <div style={{backgroundImage: 'url(' + image.url + ')', backgroundSize: 'cover'}} className="screen"/>
      <img src="/img/monitor.png" className="monitor" />
    </div>
    <div className="slide__ribbon">
      <h2>{title}</h2>
      <a href={url} target="_blank" rel="noopener">{ label ? label : 'Learn more'}</a>
    </div>
  </div>
</div>


const Carousel = ( props ) => {

  let carouselSlider = props.carousel.map((slide, i) => 
    slide.image_type === 'screenshot' ? (
      <MonitorSlide
        image={slide.image}
        title={slide.title}
        label={slide.label}
        url={slide.url}
        key={i}
      />
    ) : ( 
      <Slide
        image={slide.image}
        title={slide.title}
        label={slide.label}
        url={slide.url}
        key={i}
      />
    )
  )
  
  return (
    <Fade bottom>
      <div className="carousel">
        <div className="inner-container">
          {props.header && <h2>{props.header}</h2>}
          {props.description && <div dangerouslySetInnerHTML={{__html: props.description}}></div>}
        </div>
        <Slider {...settings}>
          {carouselSlider}
        </Slider>
      </div>
    </Fade>
  )
}

export default Carousel