import React from 'react'
import moment from 'moment'

const RelatedArticles = ({ filterPostId, posts, tags, categories }) => {
  let currentPostFiltered = posts.results.filter(p => p.id != filterPostId);
  let relatedArticles = []
  currentPostFiltered.map(post => {
    let catMatch = false;
    post.categories.map(c => {
      catMatch = categories.includes(c);
    })
    let tagMatch = false;
    post.tags.map(t => {
      tagMatch = tags.includes(t);
    })
    if (catMatch || tagMatch) {
      relatedArticles.push(post)
    }
  })
  
  return (
    <div className="related-articles">
      {relatedArticles.length > 0 && (
        <React.Fragment>
          <h1>Related Articles</h1>
          <div className="related-articles__wrapper">
            { relatedArticles.slice(0, 3).map((post, i) => (
              <div className="related-articles__item" key={i}>
                <a href={post.slug}>
                  <h2>{ post.title.rendered }</h2>
                  <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} className="excerpt" />
                  <div className="metadata">{ moment(post.date).format("LL") }</div>
                  <div className="arrow-cta"><div>Read More</div></div>
                </a>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default RelatedArticles
