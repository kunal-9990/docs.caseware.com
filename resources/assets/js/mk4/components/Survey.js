
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Survey extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      return (
        <div className="survey">
          <h1>Survey - popup on scrollTo footer</h1>
        </div>
      );
    }
}

// Feature.propTypes = {
//     votes: PropTypes.number.isRequired,
//     showVoter: PropTypes.bool,
//   }
  
export default Survey