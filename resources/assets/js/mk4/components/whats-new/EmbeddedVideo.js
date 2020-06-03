import React, { Component } from 'react'

const mq = {
  'xs':   '480',
  'sm':   '768',
  'md':   '992',
  'lg':   '1200',
  'lg-x': '1460'
}

const IframeBlock = ({ 
  videoSrc, 
  thumbnail,
  thumbnailClicked, 
  onClick
}) => {
  if (thumbnail) {
    return (
      <React.Fragment>
        <div 
          onClick={videoSrc ? onClick : null} 
          style={{ display: thumbnailClicked ? 'none' : 'block'}}
        >
          {videoSrc && (<img src="/img/play.png" className="embedded-video__play-btn" alt="play" />)}
          <img src={thumbnail.url} className={videoSrc ? '' : ' embedded-video__no-cursor'} alt={thumbnail.alt} />
        </div>
        {(thumbnailClicked && videoSrc) && (<Iframe videoSrc={videoSrc} autoplay="true"/>)}
      </React.Fragment>
    )
  } 
  else return (<Iframe videoSrc={videoSrc} autoplay="false" />)
}

const Iframe = ({ videoSrc, autoplay }) => {

  let iframeSrc = videoSrc;
  if (autoplay) {
    iframeSrc = videoSrc + '?autoplay=1';
  } else {
    iframeSrc = videoSrc;
  }

  return(
    <iframe  
      src={iframeSrc} 
      className="yt-video-iframe" 
      frameBorder="0"
      allowFullScreen
    ></iframe>
  )
}


class EmbeddedVideo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      mqSize: 'xs',
      thumbnailClicked: false
    };
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
    window.addEventListener('resize', this.updateWindowWidth)
  }

  componentDidMount() {
    this.updateWindowWidth();
  }

  updateWindowWidth() {
    this.setState({ 
      windowWidth: window.innerWidth
    }, () => this.getResponsiveSize());
  }

  getResponsiveSize() {
    if (this.state.windowWidth < mq.xs) {
      this.setState({ mqSize: 'xs'})
    } else if (this.state.windowWidth >= mq.xs && this.state.windowWidth < mq.sm) {
      this.setState({ mqSize: 'sm'})
    } else if (this.state.windowWidth >= mq.sm && this.state.windowWidth < mq.md) {
      this.setState({ mqSize: 'md'})
    } else if (this.state.windowWidth >= mq.md && this.state.windowWidth < mq.lg) {
      this.setState({ mqSize: 'lg'})
    } else {
      this.setState({ mqSize: 'lg-x'})
    }
  }

  onClick() {
    this.setState({ thumbnailClicked: true })
  }

  render () {
    return (
      <div className="embedded-video iframe-video-wrapper">         
        {!this.props.disableOnResponsiveSize.includes(this.state.mqSize) && (
          <IframeBlock
            videoSrc={this.props.videoSrc}
            thumbnail={this.props.thumbnail}
            thumbnailClicked={this.state.thumbnailClicked}
            onClick={() => this.onClick()} 
          />
        )}
      </div>
    )
  }
}

export default EmbeddedVideo