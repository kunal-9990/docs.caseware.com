import React from 'react'
import Fade from 'react-reveal/Fade'

const ProductNavigation = props => {
  let navGrid = props.navigation.map((navItem, key) => (
    <Fade bottom key={key}>
      <div className="product-nav__wrapper">
        { navItem.branding === 'icon' ? 
          navItem.icon && <img src={navItem.icon.url} alt={navItem.icon.alt} /> :
          navItem.text && <h2>{ navItem.text }</h2>
        }
        <div className="product-nav__item" key={key} style={{ borderLeft: '6px solid ' + navItem.accent_colour}}>
          <div>
            { navItem.description && (<span>{ navItem.description }</span>) }
            { navItem.links && navItem.links.map((link, key) => (
              <div key={key}>
                <a href={link.link} target="_blank" className="product-nav__cta">{ link.label }<span style={{ color: navItem.accent_colour }}>&#8250;</span></a>
              </div>
            ))}
          </div>
          {(navItem.button.label && navItem.button.link) && (
            <div className="product-nav__button">
              <a 
                href={navItem.button.link} 
                target="_blank" 
                style={{ backgroundColor: navItem.accent_colour }}
              >
                <span>{ navItem.button.label }</span>
              </a>
            </div>
          )}
        </div>

      </div>
    </Fade>
  ))

  return (
    <div className="product-nav">
      <div className={'product-nav__grid ' + (navGrid.length > 4 ? 'product-nav__grid--3col' : 'product-nav__grid--2col')}>
        { navGrid }
      </div>
    </div>
  )
}

export default ProductNavigation