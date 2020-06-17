

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
              { this.props[key].section['questions'].map((q, i) => (
                <Accordion 
                  id={i}
                  title={q.question}
                  content={q.answer}
                />
              )) }
            </div>
          )
        ))}
      </div>
    )
  }
}

export default FAQ
