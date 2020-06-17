

import React, { Component } from 'react'
import Accordion from '../../Accordion'
import Dropdown from '../../Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'


class FAQ extends Component {

  constructor() {
    super();
    this.state = {
      dropdownOptions: []
    }
  }

  componentDidMount() {
    let dropdownOptions = []
    let filterLabels = []

    Object.keys(this.props).map(key => {
      this.props[key].section && (
        this.props[key].section['questions'].map((q, i) => {
          dropdownOptions.map(option => {
            filterLabels.push(option.label)
          })
          q.tags.map(tag => {
            if (filterLabels.indexOf(tag.name) === -1) {
              dropdownOptions.push({ "value": tag.slug, "label": tag.name })
            }
          })
        })
      )
    })

    this.setState({
      dropdownOptions
    })
  }

  updateSelectedFilters() {
    console.log("Filter!!!!!!!")
  }

  render () {
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
        <div className="accordion">
          {Object.keys(this.props).map(key => ( 
            this.props[key].section && (
              <div className="accordion__faq" key={key}>
                <h2>{ this.props[key].section['section_title'] }</h2>
                { this.props[key].section['questions'].map((q, i) => {
                  let outerDetails = []
                  q.tags.map(tag => outerDetails.push(tag.name))
                  return (
                    <Accordion 
                      key={i}
                      id={q.question.replace(/ /g, '-')}
                      title={q.question}
                      content={q.answer}
                      outerDetails={outerDetails}
                    />
                  )}) 
              }
              </div>
            )
          ))}
        </div>
      </div>
    )
  }
}

export default FAQ
