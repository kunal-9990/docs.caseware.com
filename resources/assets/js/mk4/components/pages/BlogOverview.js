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

      this.props.results.map((item, i) => {
        this.setState(prevState => ({ 
          postArray: [
            ...prevState.postArray, 
            {
              id: item.id,
              slug: item.slug,
              title: item.title.rendered,
              date: item.date,
              tags: item.tags,
              categories: item.categories,
              acf: item.acf,
              excerpt: item.excerpt,
              image: item.acf.post_image
            }
          ]
        }))
      })
    }

    render() {
      return (
        <div>
          <Filter/>
          <Grid items={this.state.postArray} />
        </div>
      )
    }
}

export default BlogOverview