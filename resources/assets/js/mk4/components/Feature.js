
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Voter from './Voter'

class Feature extends Component {
    constructor(props) {
      super(props);
      this.state = {
        votes: this.props.votes,
        hasVoted: 'neutral'
      };
    }
  
    handleUpVote() {
      if (this.state.hasVoted === 'up') {
        this.handleNeutral();
      } else {
        this.setState({
          votes: this.props.votes + 1,
          hasVoted: 'up'
        })
      }
    }

    handleNeutral() {
      this.setState({
        votes: this.props.votes,
        hasVoted: 'neutral'
      })
    }

    handleDownVote() {
      if (this.state.hasVoted === 'down') {
        this.handleNeutral();
      } else {
        this.setState({
          votes: this.props.votes - 1,
          hasVoted: 'down'
        })
      }
    }
  
    render() {
      return (
        <div className="whats-new__feature">
          <div className="feature__header">
            <Voter 
              id='123'
              votes={this.state.votes}
              hasVoted={this.state.hasVoted}
              upVote={() => this.handleUpVote()}
              downVote={() => this.handleDownVote()}
            />
            <h2>General Improvements</h2>
          </div>
          <div className="feature__content">
            <p>Several improvements have been made for the latest release.</p>
            {/* Insert for loop */}
            <h3>Imports</h3>
            <p>Fixed an issue where the list of available import fields sometimes displayed 'null' for some list items.</p>
            <h3>Reports</h3>
            <p>Fixed an issue where exported Time Summary reports omitted the first line.</p>
          </div>
        </div>
      );
    }
  }

Feature.propTypes = {
    votes: PropTypes.number.isRequired
  }
  
  export default Feature