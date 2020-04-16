import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Voter = ({ id, votes, hasVoted, upVote, downVote }) => {

  /************ 
   
  TODO:
  - text for tooltips
  - translations 

  ************/

  return (
      <div className="voter" id={id}>
        <div onClick={upVote} className={'arrow' + (hasVoted === 'up' ? ' arrow--up' : '')}>
          <FontAwesomeIcon icon={faChevronUp} title="I will use this feature"/>
        </div>
        <div className="total">
          { (votes > 0) ? votes : 'vote' }
        </div> 
        <div onClick={downVote} className={'arrow' + (hasVoted === 'down' ? ' arrow--down' : '')}>
          <FontAwesomeIcon icon={faChevronDown} title="I will not use this feature" />
        </div>
      </div>
  )
}

export default Voter