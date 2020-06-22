import React from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import BlogGridItem from './pages/blog/BlogGridItem'
import VideoGridItem from './pages/secondary/VideoGridItem'

const GridPattern = [
  { colspan: 1, rowspan: 2, float: 'left' },
  { colspan: 2, rowspan: 1, float: 'left' },
  { colspan: 2, rowspan: 1, float: 'left' }, 
  { colspan: 1, rowspan: 2, float: 'right' },
  { colspan: 2, rowspan: 1, float: 'right' },
  { colspan: 2, rowspan: 1, float: 'right' },
]

const Grid = ({ type, items }) => (
  <div className="grid">
    {items.map((item, i) => (
      <div className={'grid__wrapper colspan-' + GridPattern[i % 6]['colspan'] + ' rowspan-' + GridPattern[i % 6]['rowspan'] + ' float-' + GridPattern[i % 6]['float'] } key={i}>
        { type === 'videos' ? <VideoGridItem item={item} /> : 
            <a href={'/blog/' + item.slug} >
              <BlogGridItem item={item} />
            </a>
        }
      </div>
    ))}
  </div>
)

Grid.propTypes = {
  type: PropTypes.oneOf(['blog', 'videos']).isRequired,
  items: PropTypes.array.isRequired
}

export default Grid