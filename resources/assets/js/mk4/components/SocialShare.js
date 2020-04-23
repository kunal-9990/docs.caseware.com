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

const SocialShare = () => {
  
  const shareUrl = window.location.href;
  const title = 'This is the title';

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
          quote={title}
          className="social_facebook"
        >
          <FacebookIcon size={25} round />
        </FacebookShareButton>
      </div>

      <div className="social__wrapper">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="social__twitter"
        >
          <TwitterIcon size={25} round />
        </TwitterShareButton>
      </div>

      <div className="social__wrapper">
        <LinkedinShareButton 
          url={shareUrl} 
          className="social__linkedin"
        >
          <LinkedinIcon size={25} round />
        </LinkedinShareButton>
      </div>

      <div className="social__wrapper">
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body="body"
          className="social__email"
        >
          <EmailIcon size={25} round />
        </EmailShareButton>
      </div>
    </div>
  );
}


export default SocialShare