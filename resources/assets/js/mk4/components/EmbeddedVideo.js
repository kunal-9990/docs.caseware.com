import React, { Component } from 'react'

const mq = {
  'xs':   '480',
  'sm':   '768',
  'md':   '992',
  'lg':   '1200',
  'lg-x': '1460'
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
          <React.Fragment>
            <div 
              onClick={() => this.onClick()} 
              style={{ display: this.state.thumbnailClicked ? 'none' : 'block'}}
            >
              <img src={this.props.thumbnail} />
            </div>
            {this.state.thumbnailClicked && (
              <div>
                <iframe  
                    src={this.props.src + '?autoplay=1'} 
                    className="yt-video-iframe" 
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default EmbeddedVideo