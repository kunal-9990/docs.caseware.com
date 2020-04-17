
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
      console.log(this.props)
      return (
        <div className="whats-new__feature" id={this.props.title.trim().replace(/\s/g, '-')}>
          <div className={ "feature__header" + (this.props.showVoter ? " feature__header--voter" : " feature__header--no-voter")}>
            {this.props.showVoter && (
              <Voter 
                id='' // TODO - change to this.props.id - should be a field in wp CMS which gets passed to feedback DB
                votes={this.state.votes}
                hasVoted={this.state.hasVoted}
                upVote={() => this.handleUpVote()}
                downVote={() => this.handleDownVote()}
              />
            )}
            <h2>{ this.props.title }</h2>
          </div>
          <div className="feature__content" dangerouslySetInnerHTML={{__html: this.props.description }} />
        </div>
      );
    }
  }

Feature.propTypes = {
    votes: PropTypes.number.isRequired,
    showVoter: PropTypes.bool,
  }
  
  export default Feature