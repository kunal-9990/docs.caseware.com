import React, { Component } from 'react'
import Filter from '../Filter'
import Grid from '../Grid'

class BlogOverview extends Component {

    constructor(props) {
      super(props);
      this.state = {
        postArray: [],
        filters: []
      };
    }

    componentDidMount() {
      
      let tags = [];
      let categories = [];
      let filters = [];

      this.props.tags.results.map(tag => {
        tags.push(tag.name)
      });

      this.props.categories.results.map(category => {
        categories.push(category.name)
      })

      this.setState({ 
        filters: [{
                    "title": "tags",
                    "items": tags
                  }, 
                  {
                    "title": "cat", 
                    "items": categories
                  }]
      })

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
              categories: item.categories,
              acf: item.acf,
              excerpt: item.excerpt,
              image: item.acf.post_image,
              filterList: catList.concat(tagList)
            }
          ]
        }))
      })
    }

    selectAllCategories = () => {
      this.setState(prevState => ({
          checkedCategories: prevState.allCategoriesChecked ? [] : this.props.categoryList,
          allCategoriesChecked: !prevState.allCategoriesChecked
      }), () => this.filterModules())
  }

  updateSelectedCategories = categoryId => {
      this.setState(prevState => ({ 
          checkedCategories: prevState.checkedCategories.includes(categoryId) ? prevState.checkedCategories.filter(category => category !== categoryId) : [...prevState.checkedCategories, categoryId],
          allCategoriesChecked: this.state.checkedCategories.length !== this.props.categoryList ? false : prevState.allCategoriesChecked
      }), () => this.filterModules())
  }

    render() {
      return (
        <div>
          <Filter 
            filters={this.state.filters} 
          />
          <Grid items={this.state.postArray} />
        </div>
      )
    }
}

export default BlogOverview