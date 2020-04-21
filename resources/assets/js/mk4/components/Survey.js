import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor' 
// import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Survey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    console.log('Survey is now %s', isVisible ? 'visible' : 'hidden');
    this.setState({ isVisible });
  }

  toggleVisibility() {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }))
  }

  render() {
    return (
      <VisibilitySensor 
        partialVisibility 
        onChange={this.onChange}
      >
        <div className="survey-wrapper">
          {/* <Slide right when={this.state.isVisible} className="hello"> */}
            <div className={'survey' + (this.state.isVisible ? ' survey--on-screen' : ' survey--off-screen')}>
              <div className="survey__header">
                <div>Fill me out</div>
                <div className="exit" onClick={() => this.toggleVisibility()}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>
              <div className="survey__content">
                  hsadlfjhkljdash
              </div>
            </div>
          {/* </Slide> */}
        </div>
      </VisibilitySensor>
    );
  }
}

export default Survey;