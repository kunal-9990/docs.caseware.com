import React, { Component } from 'react'
import Filter from '../Filter'
import Grid from '../Grid'

class BlogOverview extends Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedPosts: [],
        dropdownItems: [],
        selectedFilters: []
      }

      this.allPosts = []
      this.allPostFilters = []
      this.updateSelectedFilters = this.updateSelectedFilters.bind(this)
    }

    componentDidMount() {
      
      let tags = []
      let categories = []
      let allPosts = []

      this.props.tags.results.map(tag => {
        tags.push(tag.name)
      });

      this.props.categories.results.map(category => {
        categories.push(category.name)
      })

      this.allPostFilters = categories.concat(tags)
      
      this.props.posts.results.map((item, i) => {
        let tagList = item.tags.map(id => this.props.tags.results.find(o => o.id === id).name);
        let catList = item.categories.filter(c => c !== 1).map(id => this.props.categories.results.find(o => o.id === id).name);
        this.allPosts.push({
          id: item.id,
          slug: item.slug,
          title: item.title.rendered,
          date: item.date,
          tags: item.tags,
          categories: item.categories,
          acf: item.acf,
          excerpt: item.excerpt,
          image: item.acf.post_image,
          postFilters: catList.concat(tagList)
        })
      })

      this.setState({ 
        selectedPosts: this.allPosts,
        selectedFilters: this.allPostFilters,        
        dropdownItems: [{
          "title": "tags title",
          "items": tags
        }, 
        {
          "title": "category title", 
          "items": categories
        }]
      })
    }

    updateSelectedFilters(item) {    
      this.setState(prevState => ({
        selectedFilters: prevState.selectedFilters.includes(item) ? prevState.selectedFilters.filter(i => i !== item) : [...prevState.selectedFilters, item]
      }), () => this.filterPosts())
    }

    filterPosts() {
      let filteredPosts = []
      this.allPosts.map((post, i) => {
        if (this.state.selectedFilters.some(r => post.postFilters.includes(r))) {
          filteredPosts.push(post)
        }
      })
      this.setState({ selectedPosts: filteredPosts })
    }

    render() {
      return (
        <div>
          <Filter 
            dropdownItems={this.state.dropdownItems} 
            selectedFilters={this.state.selectedFilters}
            updateSelectedFilters={this.updateSelectedFilters}
          />
          <Grid items={this.state.selectedPosts} />
        </div>
      )
    }
}

export default BlogOverview