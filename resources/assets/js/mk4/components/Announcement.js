import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'

class Announcement extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      };
    }
  
    handleClick() {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    }
  
    render() {
      return (
        <div style={{ position: 'relative' }}>
          <div className={"announcement" + (this.state.isOpen ? ' open' : '')}>
            <div className="announcement__content">
              <div>{ this.props.description}</div>
            </div>
            <div className="announcement__bar"  onClick={() => this.handleClick()} >
              <FontAwesomeIcon icon={faBell} />
              <div>{ this.props.title }</div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Announcement