import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'


class Voter extends Component {
// const Voter = ({ id, votes, hasVoted, upVote, downVote, hierarchy }) => {

  constructor(props) {
    super(props)
    this.state = {
      revealCount: this.props.hasVoted === "neutral" ? false : true
    }
  }

  /************ 
   
  TODO:
  - text for tooltips
  - translations for "vote"

  ************/

  updateRevealCount() {
    this.setState({ revealCount: true })
  }

  render() {
    return (
        <div className={"voter voter--" + this.props.hierarchy} id={this.props.id}>
          <div 
            onClick={() => { this.props.upVote(); this.updateRevealCount() }} 
            className={'arrow arrow--up' + (this.props.hasVoted === 'up' ? ' arrow--voted' : '')}
          >
            <FontAwesomeIcon icon={faCaretUp} />
          </div>
          <div className="total">
            { <span className="total__count">{ this.state.revealCount ? this.props.votes : "vote" }</span> }
          </div> 
          <div 
            onClick={() => { this.props.downVote(); this.updateRevealCount() }} 
            className={'arrow arrow--down' + (this.props.hasVoted === 'down' ? ' arrow--voted' : '')}
          >
              <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
    )
  }
}

export default Voter