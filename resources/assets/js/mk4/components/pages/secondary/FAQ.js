import React, { Component } from 'react'

class FAQ extends Component {
  constructor() {
    super();
    this.state = {
			multiValue: []
    }
  }

  render() {
    console.log(this.props)
    return (
<h1>FAQ</h1>
    )
  }
}

export default FAQ