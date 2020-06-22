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
      dropdownOptions: [],
      selectedFilters: [],
      selectedVideos: [],
      showModal: false

    }

    this.allVideos = []
    this.allVideoFilters = []
    this.updateSelectedFilters = this.updateSelectedFilters.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    // this.handlePageClick = this.handlePageClick.bind(this)
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

    this.allVideoFilters = categories.concat(tags)

    this.props.videos.results.map((item, i) => {
      let tagList = item.tags.map(id => this.props.tags.results.find(o => o.id === id).name);
      let catList = item.categories.filter(c => c !== 1).map(id => this.props.categories.results.find(o => o.id === id).name);
      this.allVideos.push({
        id: item.id,
        slug: item.slug,
        title: item.title.rendered,
        // date: item.date,
        tags: item.tags,
        categories: item.categories,
        acf: item.acf,
        // image: item.acf.post_image,
        videoFilters: catList.concat(tagList)
      })
    })

    this.setState({ 
      selectedVideos: this.allVideos,
      selectedFilters: this.allVideoFilters,
      dropdownOptions: [
        {
          label: "Products",
          options: categories
        },
        {
          label: "Filters",
          options: tags
        }]
    })
  }

  handleOpenModal () {
    console.log("OPEN MODAL!!!!")
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    console.log("close")
    this.setState({ showModal: false });
  }

  updateSelectedFilters(selectedFilters) {  
    this.setState({ selectedFilters }, () => this.filterVideos())
  }

  filterVideos() {
    let filteredVideos = []
    this.allVideos.map((video, i) => {
      if (this.state.selectedFilters.some(r => video.videoFilters.includes(r.label))) {
        filteredVideos.push(video)
      }
    })
    this.setState({ 
      selectedVideos: this.state.selectedFilters.length > 0 ? filteredVideos : this.allVideos
    // }, () => this.paginatePosts())
    })
  }

  render() {
    // let pageCount = Math.ceil(this.state.selectedPosts.length / this.state.postsPerPage)
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
        <Grid 
          type="videos"
          items={this.state.selectedVideos} 
          openModal={this.handleOpenModal}
          closeModal={this.handleCloseModal}
          showModal={this.state.showModal}
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