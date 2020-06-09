import React, { Component } from 'react'
import Filter from '../Filter'
import Grid from '../Grid'

class BlogOverview extends Component {

    constructor(props) {
      super(props);
      this.state = {
        postArray: [],
        dropdownItems: [],
        selectedFilters: []
      };

      this.updateSelectedFilters = this.updateSelectedFilters.bind(this)
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
        selectedFilters: categories.concat(tags),        
        dropdownItems: [{
          "title": "tags title",
          "items": tags
        }, 
        {
          "title": "category title", 
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
              postFilters: catList.concat(tagList)
            }
          ]
        }))
      })
    }

    updateSelectedFilters(item) {    
      this.setState(prevState => ({
        selectedFilters: prevState.selectedFilters.includes(item) ? prevState.selectedFilters.filter(i => i !== item) : [...prevState.selectedFilters, item]
      }), () => this.filterPosts())
    }

    filterPosts() {
      console.log(this.state) 
      



      // let filteredModules = this.props.modules.filter(module => {
      //     let matchingCategories = this.state.allCategoriesChecked ? true : module.categories.some(r => this.state.checkedCategories.includes(r))
      //     let searchResult = searchableContent.toLowerCase().includes(this.state.searchValue.toLowerCase())
      //     if (matchingCategories && searchResult) {
      //         return module
      //     }
      // })

      // // this.setState({ modules: filteredModules }, () => { this.handlePageClick({ selected: 0 }) });
      // this.setState({ modules: filteredModules })
    }

    render() {

      return (
        <div>
          <Filter 
            dropdownItems={this.state.dropdownItems} 
            selectedFilters={this.state.selectedFilters}
            updateSelectedFilters={this.updateSelectedFilters}
          />
          <Grid items={this.state.postArray} />
        </div>
      )
    }
}

export default BlogOverview