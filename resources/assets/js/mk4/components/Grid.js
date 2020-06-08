import React from 'react'
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons'

const GridPattern = [
  { colspan: 1, rowspan: 2, float: 'left' },
  { colspan: 2, rowspan: 1, float: 'left' },
  { colspan: 2, rowspan: 1, float: 'left' }, 
  { colspan: 1, rowspan: 2, float: 'right' },
  { colspan: 2, rowspan: 1, float: 'right' },
  { colspan: 2, rowspan: 1, float: 'right' },
]

const GridItem = ({ item })=> {
  return (
    <a href={'/blog/' + item.slug}>
      <div key={item.key} className="grid-item">
          <div className="grid-item__wrapper">
            <h2>{item.title}</h2>
            <div className="grid-item__hover">
              <div dangerouslySetInnerHTML={{__html: item.excerpt.rendered}} className="grid-item__excerpt" />
              <div className="grid-item__filter">
                <FontAwesomeIcon icon={ item.filterList.length > 1 ? faTags : faTag } />
                {item.filterList.join(', ')}
              </div>
            </div>
            <div className="grid-item__cta">Read more</div>
          </div>
      </div>
    </a>
  )
}

const Grid = ({ items }) => (
  <Fade bottom>
    <div className="grid">
      {items.map((item, i) => (
        <div 
          key={item.id}
          style={{ background: item.image ? `url(` + item.image.url + `) center center / cover` : "#CCC"}}
          className={'grid__bg colspan-' + GridPattern[i % 6]['colspan'] + ' rowspan-' + GridPattern[i % 6]['rowspan'] + ' float-' + GridPattern[i % 6]['float'] }
        >
          <GridItem item={item} />
        </div>
      ))}
    </div>
  </Fade>
)


export default Grid