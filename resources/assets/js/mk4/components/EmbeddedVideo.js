import React, { Component } from 'react'

const mq = {
  'xs':   '480',
  'sm':   '768',
  'md':   '992',
  'lg':   '1200',
  'lg-x': '1460'
}

const IframeBlock = ({ 
  src, 
  thumbnail,
  thumbnailClicked, 
  onClick
}) => {

  if (thumbnail != '') {
    return (
      <React.Fragment>
        <div 
          onClick={onClick} 
          style={{ display: thumbnailClicked ? 'none' : 'block'}}
        >
          <img src="/img/play.png" className="embedded-video__play-btn"/>
          <img src={thumbnail} />
        </div>
        {thumbnailClicked && (<Iframe src={src} autoplay="true"/>)}
      </React.Fragment>
    )
  } else return (<Iframe src={src} autoplay="false" />)
}

const Iframe = ({ src, autoplay }) => {

  let iframeSrc = src;
  if (autoplay) {
    iframeSrc = src + '?autoplay=1';
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
            src={this.props.src}
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