

import React, { Component } from 'react'
import Accordion from '../../Accordion'

class FAQ extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render () {
    console.log(this.props)
    return (
      <div className="accordion">
        {Object.keys(this.props).map(key => ( 
          this.props[key].section && (
            <div className="accordion__faq">
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
    )
  }
}

export default FAQ
