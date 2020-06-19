import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import Dropdown from '../../Dropdown'
import Grid from '../../Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons'

class Videos extends Component {

  constructor(props) {
    super(props);
    this.state = {
    //   selectedPosts: [],
    //   dropdownOptions: [],
    //   selectedFilters: [],
    //   paginatedPosts: [],
    //   pageNumber: 0,
    //   postsPerPage: (this.props.postsPerPage && this.props.postsPerPage > 0) ? this.props.postsPerPage : 9
    }

    // this.allPosts = []
    // this.allPostFilters = []
    // this.updateSelectedFilters = this.updateSelectedFilters.bind(this)
    // this.handlePageClick = this.handlePageClick.bind(this)
  }

  render() {
    // let pageCount = Math.ceil(this.state.selectedPosts.length / this.state.postsPerPage)
    console.log(this.props.videos)
    return (
      <div>
        {/* <div className="filter">
          <div className="filter__wrapper">
            <FontAwesomeIcon icon={faFilter} />
            <Dropdown 
              options={this.state.dropdownOptions} 
              onChange={this.updateSelectedFilters}
            />
          </div>
        </div> */}
        <Grid 
          type="videos"
          items={this.props.videos.results} 
        />
        {/* { pageCount > 1 && (
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
        )}*/}
      </div> 
    )
  }
}

export default Videos