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
      console.log(this.props)
      return (
        <div className="container announcement-container" style={{ position: 'relative' }}>
          <div className={"announcement" + (this.state.isOpen ? ' open' : '')}>
            <div className="announcement__content">
              <div dangerouslySetInnerHTML={{__html: this.props.post_content}}></div>
            </div>
            <div className="announcement__bar"  onClick={() => this.handleClick()} >
              <FontAwesomeIcon icon={faBell} />
              <div>{ this.props.post_title }</div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Announcement