import React from 'react'
import Fade from 'react-reveal/Fade'

const ProductNavigation = props => {
  console.log(props)

  let navGrid = props.navigation.map((navItem, key) => (
    <Fade bottom key={key}>
      <div className="product-nav__wrapper">
        { navItem.icon && (
          <img src={navItem.icon.url} alt={navItem.icon.alt} />
        )}
        <div className="product-nav__item" key={key} style={{ borderLeft: '6px solid ' + navItem.accent_colour}}>
          { navItem.description && (<span>{ navItem.description }</span>) }
          { navItem.links && navItem.links.map((link, key) => (
            <div key={key}>
              <a href={link.link} target="_blank" className="product-nav__cta">{ link.label }<span style={{ color: navItem.accent_colour }}>&#8250;</span></a>
            </div>
          ))}
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