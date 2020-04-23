import React from 'react'

const Arrow = () => (
  <svg enable-background="new 0 0 121 105" version="1.1" viewBox="0 0 121 105" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0 85 61 0 121 85 84.93 85 85 105 37 105 36.59 84.74"/>
  </svg>
)

const Voter = ({ id, votes, hasVoted, upVote, downVote }) => {

  /************ 
   
  TODO:
  - text for tooltips
  - translations 

  ************/

  return (
      <div className="voter" id={id}>
        <div 
          onClick={upVote} 
          className={'arrow arrow--up' + (hasVoted === 'up' ? ' arrow--voted' : '')}
          title="I will use this feature"
        >
          <Arrow 
          />
        </div>
        <div className="total">
          { (votes > 0) ? <span className="total__count">{ votes }</span> : <span className="total__text">Vote</span> }
        </div> 
        <div 
          onClick={downVote} 
          className={'arrow arrow--down' + (hasVoted === 'down' ? ' arrow--voted' : '')}
          title="I will not use this feature"
        >
          <Arrow />
        </div>
      </div>
  )
}

export default Voter