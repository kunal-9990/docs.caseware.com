import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Arrow = () => (
  <svg enableBackground="new 0 0 121 105" version="1.1" viewBox="0 0 121 105" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0 85 61 0 121 85 84.93 85 85 105 37 105 36.59 84.74"/>
  </svg>
)

const Voter = ({ id, votes, hasVoted, upVote, downVote, hierarchy }) => {

  /************ 
   
  TODO:
  - text for tooltips
  - translations 

  ************/

  return (
      <div className={"voter voter--" + hierarchy} id={id}>
        <div 
          onClick={upVote} 
          className={'arrow arrow--up' + (hasVoted === 'up' ? ' arrow--voted' : '')}
        >
          <FontAwesomeIcon icon={faCaretUp} />
        </div>
        <div className="total">
          { <span className="total__count">{ ((hasVoted === 'up' || hasVoted === 'down') ? votes : 'vote') }</span> }
        </div> 
        <div 
          onClick={downVote} 
          className={'arrow arrow--down' + (hasVoted === 'down' ? ' arrow--voted' : '')}
        >
            <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className="voter__hover"><div>Find it useful?</div></div>

      </div>
  )
}

export default Voter