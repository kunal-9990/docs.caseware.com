import React from 'react';
import Fade from 'react-reveal/Fade'

const QuickLinks = ({ header, quickLinks }) => (
  <Fade>

  <div className="quick-links">
    <h2>{ header }</h2>
    <div className="quick-links__wrapper">
      {quickLinks.map(quickLink => 
        <div className="quick-link" key={quickLink.url}>
          <div>
            {quickLink.thumbnail && (
              <img src={quickLink.thumbnail.url} alt={quickLink.thumbnail.alt} />
            )}
          </div>
          <div>
            <p>{quickLink.link_text} </p>
            <a href={quickLink.url} target="_blank">Learn more</a>
          </div>
        </div>
      )}
    </div>
  </div>
  </Fade>

)

export default QuickLinks