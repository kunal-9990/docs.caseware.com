import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Voter = ({ id, votes, hasVoted, upVote, downVote }) => {

  return (
      <div className="voter" id={id}>
        <div onClick={upVote} className={(hasVoted === 'up') ? 'up' : ''}>
          <FontAwesomeIcon icon={faCaretUp} />
        </div>
        {/* TODO - translate 'vote' */}
        <div>{ (votes > 0) ? votes : 'vote' }</div> 
        <div onClick={downVote} className={(hasVoted === 'down') ? 'down' : ''}>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
  )
}

export default Voter