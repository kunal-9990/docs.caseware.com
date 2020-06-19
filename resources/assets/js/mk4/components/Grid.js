import React from 'react'
import PropTypes from 'prop-types';
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

const BlogItem = ({ item })=> (
  <Fade bottom>
    <div className="grid-item">
        <div 
          style={{ background: item.image ? `url(` + item.image.url + `) center center / cover` : "#CCC"}}
          className="grid-item__bg"
        ></div>
        <div className="grid-item__wrapper">
          <h2>{item.title}</h2>
          <div className="grid-item__hover-content">
            <div>
              { item.excerpt && (<div dangerouslySetInnerHTML={{__html: item.excerpt.rendered}} className="grid-item__excerpt" />)} 
              <div className="grid-item__filter">
                { item.postFilters.length > 0 && (<FontAwesomeIcon icon={ item.postFilters.length > 1 ? faTags : faTag } />) }
                { item.postFilters.join(', ')} 
              </div>
            </div>
          </div>
          <div className="arrow-cta"><div>Read More</div></div>
        </div>
    </div>
  </Fade>
)

const VideoItem = ({ item })=> (
  <Fade bottom>
    <div className="grid-item">
        <div 
          style={{ background: item.image ? `url(` + item.image.url + `) center center / cover` : "#CCC"}}
          className="grid-item__bg"
        ></div>
        <div className="grid-item__wrapper">
          <h2>{ item.title.rendered }</h2>
          <div className="arrow-cta"><div>Read More</div></div>
        </div>
    </div>
  </Fade>
)

const Grid = ({ type, items }) => (
  <div className="grid">
    {items.map((item, i) => (
      <div className={'grid__wrapper colspan-' + GridPattern[i % 6]['colspan'] + ' rowspan-' + GridPattern[i % 6]['rowspan'] + ' float-' + GridPattern[i % 6]['float'] } key={i}>
        <a href={'/blog/' + item.slug} >
          { type === 'blog' ? <BlogItem item={item} /> : <VideoItem item={item} /> }
        </a>
      </div>
    ))}
  </div>
)


Grid.propTypes = {
  type: PropTypes.oneOf(['blog', 'videos']).isRequired,
  items: PropTypes.array.isRequired
}

export default Grid