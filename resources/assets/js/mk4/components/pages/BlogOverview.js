import React, { Component } from 'react'
import Filter from '../Filter'
import Grid from '../Grid'

class BlogOverview extends Component {

    constructor(props) {
      super(props);
      this.state = {
        postArray: []
      };
    }

    componentDidMount() {

      this.props.posts.results.map((item, i) => {
        let tagList = item.tags.map(id => this.props.tags.results.find(o => o.id === id).name);
        let catList = item.categories.map(id => this.props.categories.results.find(o => o.id === id).name);
        
        this.setState(prevState => ({ 
          postArray: [
            ...prevState.postArray, 
            {
              id: item.id,
              slug: item.slug,
              title: item.title.rendered,
              date: item.date,
              tags: item.tags,
              tagList: tagList,
              categories: item.categories,
              categoryList: catList,
              acf: item.acf,
              excerpt: item.excerpt,
              image: item.acf.post_image
            }
          ]
        }))
      })
    }

    render() {
      console.log(this.props)
      return (
        <div>
          <Filter/>
          <Grid items={this.state.postArray} />
        </div>
      )
    }
}

export default BlogOverview