import React, { Component } from 'react'
import Filter from '../Filter'
import Grid from '../Grid'

class BlogOverview extends Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {

      // console.log(this.props)

      return (
        <div>
          BLOG Overview! js
          <Filter/>
          <Grid items={this.props.results} />
        </div>
      )
    }
}

export default BlogOverview