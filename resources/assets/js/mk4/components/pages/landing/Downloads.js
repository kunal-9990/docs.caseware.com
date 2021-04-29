import React from 'react';
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Downloads = props => {
  let quickLinks = props.quick_links.map((link, i) => {
    return (
      <div key={i} className="downloads">
          <div className="icon icon--desktop">
              <FontAwesomeIcon icon={faFileDownload} />
              {link.version && (<h3 className="grey">{link.version}</h3>)}
          </div>
          <div className="downloads__content">
            <div>
              <div className="icon icon--mobile">
                <FontAwesomeIcon icon={faFileDownload} />
              </div>
              <h3 className="title">{link.title}</h3>
              {link.version && (<h3 className="grey mobile">{link.version}</h3>)}
            </div>
            {link.description && (<p>{link.description} </p>)}
          </div>
          <a 
            className="mk4btn" 
            href={link.file_upload.url} 
            target="_blank" 
            download={link.file_upload.title}
            onClick={() => {ga('Cloud.send', 'event', link.file_upload.title, 'User Download', window.location.href); ga('Global.send', 'event', link.file_upload.title, 'User Download', window.location.href)}}

          >
            {link.button_label}
          </a>
      </div>
    )
  })

  return(
    <Fade bottom>
      <div className="landing-downloads">
        { props.header && (<h2>{ props.header }</h2>) }
        { props.description && (<p>{ props.description }</p>) }
        <div className="landing-downloads__wrapper">{ quickLinks }</div>
      </div>
    </Fade>
  )
}

export default Downloads