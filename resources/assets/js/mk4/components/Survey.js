import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor' 
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Survey extends Component {

  constructor(props) {
    super(props);
    this.state = { isVisible: false };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    this.setState({ isVisible });
  }

  toggleVisibility() {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Slide right when={ !this.state.isVisible } duration={500} >
          <div 
            className={"survey-button" + (this.props.withOlark ? " survey-button--with-olark" : "")}
            onClick={() => this.toggleVisibility()}
          >
            {this.props.label}
          </div>
        </Slide>

        <VisibilitySensor 
          partialVisibility 
          onChange={this.props.autoOpen ? this.onChange : ''}
        >
          <div className="survey-wrapper">
            {/* <Slide right when={this.state.isVisible} className="hello"> */}
              <div className={'survey' + (this.state.isVisible ? ' survey--on-screen' : ' survey--off-screen') + (this.props.withOlark ? " survey--with-olark" : "")}>
                <div className="survey__header">
                  <div>{ this.props.label }</div>
                  <div className="exit" onClick={() => this.toggleVisibility()}>
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                </div>
                <div className="survey__content">
                  <iframe 
                    src={this.props.url + "?embedded=true" }
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                  >Loading…</iframe>
                </div>
              </div>
            {/* </Slide> */}
          </div>
        </VisibilitySensor>
      </React.Fragment>
    );
  }
}

export default Survey;