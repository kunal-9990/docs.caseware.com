import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import Dropdown from '../../Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons'

class VideoPlaylist extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  componentDidMount() {

  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>video Playlist</h1>
      </div>
    )
  }
}

export default VideoPlaylist