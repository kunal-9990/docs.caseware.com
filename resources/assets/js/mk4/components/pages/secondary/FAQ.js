
import React, { Component } from 'react'
import Accordion from '../../Accordion'
import Dropdown from '../../Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'


class FAQ extends Component {

  constructor() {
    super();
    this.state = {
      dropdownOptions: [],
      filteredQuestions: [],
    }
    this.updateSelectedFilters = this.updateSelectedFilters.bind(this)
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
      dropdownOptions,
      filteredQuestions: this.props
    })
  }

  updateSelectedFilters(filters) {
    let selectedFilters = []
    Object.keys(filters).map(i => {
      selectedFilters.push(filters[i].label)
    })

    let filteredQuestions = []
    Object.keys(this.props).map(i => {
      let level1 = []
      if (this.props[i].section) {
        // console.log(this.props[i].section)
        let level2 = []
        this.props[i].section.questions.map(j => {
          j.tags.filter(k => selectedFilters.indexOf(k.name) !== -1).map(k => {
            // console.log(j)
            level2.push(j)
            // filteredQuestions.push(this.props[i].section)
          })

          // j.tags.filter(k => {
          //   console.log(k)
          // })
          // console.log(j.tags.filter)
          level1.push(level2)
        })
        // this.props[i].section.filter(test => (
        //   console.log(test)
        // ))
        // console.log("LVL2!", level2)

      }

      console.log("LVL1!", level1)



    })

    // console.log("FILTERED Q's", filteredQuestions)

    // this.setState(prevState => ({
    //   selectedFilters: [prevState, selectedFilters]
    // }))

  }

  render () {
    // console.log(this.props)
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
