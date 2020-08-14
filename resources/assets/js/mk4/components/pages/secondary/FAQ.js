
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
      faqs: []
    }
    this.updateSelectedFilters = this.updateSelectedFilters.bind(this)
  }

  componentDidMount() {
    let dropdownOptions = []
    let filterLabels = []

    this.props.faqs.map(faq => {
      faq.section['questions'].map((q, i) => {
        dropdownOptions.map(option => {
          filterLabels.push(option.label)
        })
        if(q.tags){
          q.tags.map(tag => {
            if (tag && tag.name && filterLabels.indexOf(tag.name) === -1) {
              dropdownOptions.push({ "value": tag.slug, "label": tag.name })
            }
          })
        }
      })
    })

    this.setState({ 
      dropdownOptions,
      faqs: this.props.faqs
    })
  }

  updateSelectedFilters(filters) {
    let selectedFilters = []
    if (filters) {
      Object.keys(filters).map(i => {
        selectedFilters.push(filters[i])
      })
      let filteredSections = []
      this.props.faqs.map(faq => {
          let filteredQuestions = []
          faq.section.questions.map(j => {
            let questionTags = []
            j.tags.map(t => questionTags.push(t.name))
            if (selectedFilters.some(r => questionTags.includes(r.label))) {
              filteredQuestions.push(j)
            }
          })
          filteredSections = [
            ...filteredSections, 
            { 
              "section": { 
                "section_title": faq.section.section_title, 
                "questions": filteredQuestions 
              }
            }
          ]
      })
      this.setState({ faqs : selectedFilters.length > 0 ? filteredSections : this.props.faqs })
    } else {
      this.setState({ faqs : this.props.faqs })
    } 
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
              isMulti="true"
            />
          </div>
        </div>
        <div className="accordion">
          {this.state.faqs.map((faq, i) => ( 
            <div className="accordion__faq" key={i}>
              { faq.section.questions.length > 0 && (
                <React.Fragment>
                <h2>{ faq.section['section_title'] }</h2>
                { faq.section['questions'].map((q, i) => {
                  let outerDetails = []
                  if(q.tags){
                    q.tags.map(tag => outerDetails.push(tag.name))
                  }
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
                </React.Fragment>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default FAQ
