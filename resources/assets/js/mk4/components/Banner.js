import React from 'react'

const Banner = props => {

  const BannerStyle = {
    background: props.background ? 'url(' + props.background + ')' : '#0082AD',
    backgroundSize: 'cover'
  }
  
  return (
    <section className="whats-new__banner" style={BannerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="banner__wrapper">
              <h1><span>{ props.product }</span> What's New</h1>
              <p dangerouslySetInnerHTML={{__html: props.strapline }} />
            </div>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default Banner