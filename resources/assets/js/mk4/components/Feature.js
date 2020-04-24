
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

    voteToDb(voteType) {
      $.ajax({
        type: "post",
        url: '/api/vote/create',
        data: {
          "product": "webapps",
          "version": "31",
          "feature": this.props.feature.title,
          "featureDesc": "cool thing it does",
          "voteType": voteType
        }
        ,
        success: function (store) {

        },
        error: function () {
        }
      });
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
      let feature = this.props.feature;
      return (
        <div 
          id={feature.title.trim().replace(/\s/g, '-')}
          className={'feature' + (this.props.hierarchy === 2 ? ' feature--sub-feature' : '')}
        >
          <div className={ "feature__header" + (feature.allow_voting ? " feature__header--voter" : " feature__header--no-voter")}>
            {feature.allow_voting && (
              <Voter 
                id=''
                votes={this.state.votes}
                hasVoted={this.state.hasVoted}
                upVote={() => { this.handleUpVote(); this.voteToDb(1) }}
                downVote={() => { this.handleDownVote(); this.voteToDb(2) }}
                hierarchy={this.props.hierarchy}
              />
            )}
            { this.props.hierarchy === 1 ? (<h2>{ feature.title }</h2>) : (<h3>{ feature.title }</h3>)}
          </div>
          <div className="feature__content" dangerouslySetInnerHTML={{__html: feature.description }} />
        </div>
      );
    }
}

Feature.defaultProps = {
  hierarchy: 1
}

Feature.propTypes = {
  votes: PropTypes.number.isRequired,
  hierarchy: PropTypes.oneOf([1, 2]).isRequired
}
  
export default Feature