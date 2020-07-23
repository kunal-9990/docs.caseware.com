import React from 'react'

const Banner = ({ banner, backgroundType }) => {

  let ctas = ''
  if (banner.cta) {
    ctas = banner.cta.map((button, i) => (
      <a href={button.cta_link} target="_blank" key={i} rel="noopener">
        {button.cta_label}
      </a>
    ))
  }

  return (
    <section 
      className={'banner banner--' + (backgroundType ? backgroundType : banner.banner_background_type)} 
      style={(() => {
        switch (backgroundType ? backgroundType : banner.banner_background_type) {
          case 'solid' : 
            return {
              backgroundColor: banner.background_color
            }
          case 'large':
          case 'small':
            return {
              backgroundImage: 'url(' + banner.background_image.url + ')',
              backgroundSize: 'cover'
            }
          case 'none':
          default:
            return []
        }
      })()}
    >
      <div className="container container--mk4">
        <div className="row">
          <div className="col-sm-12">
            <div className="banner__wrapper">
              <div>
                <h1 className="banner-size">
                  {(banner.product_logo && banner.product_logo.url) && (<img class="product-logo" src={banner.product_logo.url} alt="" />)}
                  {banner.header}
                </h1>
              
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

export default Banner