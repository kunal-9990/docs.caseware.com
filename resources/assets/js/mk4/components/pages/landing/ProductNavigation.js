import React from 'react'
import Fade from 'react-reveal/Fade'

const ProductCta = ({ link, label, accent}) => (
  <div className="product-nav__button">
    <a 
      href={link} 
      target="_blank" 
      style={{ backgroundColor: accent }}
    >
      <span>{ label }</span>
    </a>
  </div>
)

const ProductNavigation = props => {
  let navGrid = props.navigation.map((navItem, key) => (
    <Fade bottom key={key}>
      <div className="product-nav__wrapper">
        <div className="product-nav__title">
          <div>
          { navItem.branding === 'icon' ? 
            navItem.icon && <img src={navItem.icon.url} alt={navItem.icon.alt} /> :
            navItem.text && <h2>{ navItem.text }</h2>
          }
          </div>
          {(props.settings.layout === 'full' && navItem.button.label && navItem.button.link) && 
            <ProductCta label={navItem.button.label} link={navItem.button.link} accent={navItem.accent_colour} />
           }
        </div>
        <div className="product-nav__item" key={key} style={{ borderLeft: '6px solid ' + navItem.accent_colour}}>
          <div>
            { navItem.description && (<span>{ navItem.description }</span>) }
            <div className="product-nav__links">
              { navItem.links && navItem.links.map((link, key) => (
                <div key={key}>
                  <a href={link.link} target="_blank" className="product-nav__cta">{ link.label }<span style={{ color: navItem.accent_colour }}>&#8250;</span></a>
                </div>
              ))}
            </div>
          </div>
           {(props.settings.layout === 'grid' && navItem.button.label && navItem.button.link) && 
            <ProductCta label={navItem.button.label} link={navItem.button.link} accent={navItem.accent_colour} />
           }
        </div>
      </div>
    </Fade>
  ))

  return (
    <div className="product-nav">
      <div className={props.settings.layout === 'full' ? 'product-nav__full' : ('product-nav__grid ' + (navGrid.length > 4 ? 'product-nav__grid--3col' : 'product-nav__grid--2col')) }>
        { navGrid }
      </div>
    </div>
  )
}

export default ProductNavigation