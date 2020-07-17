import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons'

/* TODO:
translate 
*/

const BlogMetaData = ({ postTitle, author, date, readTime, tags, allTags, categories, allCategories }) => {
  let tagList = tags.map(id => allTags.results.find(o => o.id === id).name);
  let categoryList = categories.map(id => allCategories.results.find(o => o.id === id).name);
  let filters = categoryList.concat(tagList).map((filter, i) => 
    <React.Fragment>
      <a href={"/blog#" + filter.replace(/ /g, '-').toLowerCase() } rel="noopener" key={i} >{ filter }</a>
      { i + 1 !== categoryList.concat(tagList).length && <span>, </span> }
    </React.Fragment>
  )

  return (
    <div className="metadata">
      <div className="metadata__breadcrumb">
        <a href="/">Home</a><span>/</span><a href="/blog">Blog</a><span>/</span>{ postTitle }
      </div>
      <div>
        <span>Author</span>{ author }
      </div>
      <div>
        <span>Date</span>{ moment(date).format("LLL") }
      </div>
      { readTime && (
        <div>
          <span>Read Time</span>{ readTime } min
        </div>
      )}
      <div>
        <FontAwesomeIcon icon={faTags} />{ filters }
      </div>
    </div>
  )
}

export default BlogMetaData