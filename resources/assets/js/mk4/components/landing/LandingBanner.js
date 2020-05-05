import React from 'react'

const LandingBanner = ({ banner }) => {

  const BannerStyle = {
    backgroundImage: 'url(' + banner.background_image.url + ')',
    backgroundSize: 'cover'
  }

  let ctas = ''
  if (banner.cta) {
    ctas = banner.cta.map((button, i) => (
      <a href={button.cta_link} target="_blank" key={i}>
        {button.cta_label}
      </a>
    ))
  }

  return (
    <section className="landing-banner" style={BannerStyle}>
      <div className="container container--mk4">
        <div className="row">
          <div className="col-sm-12">
            <div className="landing-banner__wrapper">
              <div>
              <h1 className="banner-size">{ banner.header }</h1>
              { banner.strapline && (
                <span>{ banner.strapline }</span>
              ) }
              { banner.cta && (
                <div className="cta">{ ctas }</div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingBanner