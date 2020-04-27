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

/* 
this is a sample facebook share url structure
http://docs2.iserv-staging.caseware.com/2019/webapps/30/en/Explore/Whats-New/whats-new-cloud-30?fbclid=IwAR2mDdZeK_K9Gg9esUN7QvBgdFBszy5PIce_N1P8yJTsr2b4Ud4EqpgULao
*/

const onShareWindowClose = site => {
  console.log("closed: " + site)
  /* Add GA event here */
}

const onShareButtonClick = site => {
  console.log("clicked: " + site);
  /* Add GA event here */
}
 
const SocialShare = ({ message }) => {
  const shareUrl = window.location.href;
  return (
    <div className="social">
      
      <div className="social__wrapper">
        <span>Share</span> {/* TODO - translate */}
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