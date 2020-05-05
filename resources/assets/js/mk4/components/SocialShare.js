import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon
} from 'react-share';

const onShareWindowClose = site => {
  ga('Global.send', 'event', 'Social Share: ' + site, 'Share window closed', window.location.href);
  ga('Cloud.send', 'event', 'Social Share: ' + site, 'Share window closed', window.location.href);
}

const onShareButtonClick = site => {
  ga('Global.send', 'event', 'Social Share: ' + site, 'Share Button clicked', window.location.href);
  ga('Cloud.send', 'event', 'Social Share: ' + site, 'Share Button clicked', window.location.href);
}
 
const SocialShare = ({ message }) => {
  const shareUrl = window.location.href;
  return (
    <div className="social">
      
      <div className="social__wrapper">
        <span>Share</span>
      </div>

      <div className="social__wrapper">
        <FontAwesomeIcon icon={faShareAlt} alt="share"/>
      </div>

      <div className="social__wrapper">
        <FacebookShareButton
          url={shareUrl}
          quote={message}
          className="social_facebook"
          onClick={() => onShareButtonClick('Facebook')}
          onShareWindowClose={() => onShareWindowClose('Facebook')}
        >
          <FacebookIcon size={25} round />
        </FacebookShareButton>
      </div>

      <div className="social__wrapper">
        <TwitterShareButton
          url={shareUrl}
          title={message}
          className="social__twitter"
          onClick={() => onShareButtonClick('Twitter')}
          onShareWindowClose={() => onShareWindowClose('Twitter')}
        >
          <TwitterIcon size={25} round />
        </TwitterShareButton>
      </div>

      <div className="social__wrapper">
        <LinkedinShareButton 
          url={shareUrl} 
          className="social__linkedin"
          onClick={() => onShareButtonClick('LinkedIn')}
          onShareWindowClose={() => onShareWindowClose('LinkedIn')}
        >
          <LinkedinIcon size={25} round />
        </LinkedinShareButton>
      </div>

      <div className="social__wrapper">
        <EmailShareButton
          url={shareUrl}
          subject={message}
          body="body"
          className="social__email"
          onClick={() => onShareButtonClick('Mail')}
          onShareWindowClose={() => onShareWindowClose('Mail')}
        >
          <EmailIcon size={25} round />
        </EmailShareButton>
      </div>
    </div>
  );
}


export default SocialShare