import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import Dropdown from '../../Dropdown'
import Grid from '../../Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons'

class BlogOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPosts: [],
      dropdownOptions: [],
      selectedFilters: [],
      paginatedPosts: [],
      pageNumber: 0,
      postsPerPage: (this.props.postsPerPage && this.props.postsPerPage > 0) ? this.props.postsPerPage : 9
    }

    this.allPosts = []
    this.allPostFilters = []
    this.updateSelectedFilters = this.updateSelectedFilters.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
  }

  componentDidMount() {
    
    let tags = []
    let categories = []

    this.props.tags.results.map(tag => {
      tags.push({ "value": tag.slug, "label": tag.name, group: "Filters" })
    });

    this.props.categories.results.map(category => {
      if (category.slug !== 'uncategorized') {
        categories.push({ "value": category.slug, "label": category.name, group: "Products" })
      }
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
      dropdownOptions: [
        {
          label: "Products",
          options: categories
        },
        {
          label: "Filters",
          options: tags
        }]
    }, () => this.paginatePosts())
  }

  updateSelectedFilters(selectedFilters) {  
    this.setState({ selectedFilters }, () => this.filterPosts())
  }

  filterPosts() {
    let filteredPosts = []
    this.allPosts.map((post, i) => {
      if (this.state.selectedFilters.some(r => post.postFilters.includes(r.label))) {
        filteredPosts.push(post)
      }
    })
    this.setState({ 
      selectedPosts: this.state.selectedFilters.length > 0 ? filteredPosts : this.allPosts
    }, () => this.paginatePosts())
  }

  handlePageClick(data) {
    this.setState({ pageNumber: data.selected }, () => {this.paginatePosts()})
  }

  paginatePosts() {
    this.setState({
        paginatedPosts: this.state.selectedPosts.slice(this.state.pageNumber * this.state.postsPerPage, (this.state.pageNumber + 1) * this.state.postsPerPage)
    })
  }

  render() {
    let pageCount = Math.ceil(this.state.selectedPosts.length / this.state.postsPerPage)
    return (
      <div>
        <div className="filter">
          <div className="filter__wrapper">
            <FontAwesomeIcon icon={faFilter} />
            <Dropdown 
              options={this.state.dropdownOptions} 
              onChange={this.updateSelectedFilters}
            />
          </div>
        </div>
        <Grid items={this.state.paginatedPosts} />
        { pageCount > 1 && (
          <ReactPaginate
              previousLabel="&lsaquo;"
              nextLabel="&rsaquo;"
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination blog-overview__pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
          />
        )}
      </div>
    )
  }
}

export default BlogOverview