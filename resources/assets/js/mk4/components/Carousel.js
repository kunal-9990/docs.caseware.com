import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Carousel extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.carousel)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    

    let slider = this.props.carousel.map((slide, i) => (
        <div key={i}><h1>{slide.title}</h1></div>
    ))
    return (
      <Slider {...settings} >
        {slider}
      </Slider>

    )
  }
}

export default Carousel