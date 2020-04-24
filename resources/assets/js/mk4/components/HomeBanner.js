import React from 'react'

const HomeBanner = ({ banner }) => {

  const BannerStyle = {
    backgroundImage: 'url(' + banner.background_image.url + ')',
    backgroundSize: 'cover'
  }

  return (
    <section className="home-banner" style={BannerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="home-banner__wrapper">
              <h1>{ banner.header }</h1>
              { banner.strapline && (
                <span>{ banner.strapline }</span>
              ) }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner