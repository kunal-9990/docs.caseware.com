import React from 'react'

const ProductNavigation = props => {

  let navGrid = props.navigation.map((navItem, key) => (
    <div className="product-nav__item" key={key}>
      { navItem.icon && (
        <img src={navItem.icon.url} alt={navItem.icon.alt} />
      )}
      { navItem.description && (<span>{ navItem.description }</span>) }
      { navItem.links && navItem.links.map((link, key) => (
        <div key={key}>
          <a href={link.link} target="_blank" className="btn--arrow">{ link.label }</a>
        </div>
      ))}
    </div>
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