
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Voter from './Voter'

class Feature extends Component {
    constructor(props) {
      super(props);
      this.state = {
        votes: this.props.votes, 
        hasVoted: this.props.hasvoted, 

      };
    }

    voteToDb(voteType) {
      var featureTitle = this.props.feature.title;
      var featureId = this.props.id;
      $.ajax({
        type: "post",
        url: '/api/vote/create',
        data: {
          "product": "webapps",
          "version": "31",
          "feature": featureTitle,
          "featureDesc": "cool thing it does",
          "voteType": voteType
        }
        ,
        success: function (data) {
          $.ajax({
            type: "post",
            url: '/api/vote/updateVoteState',
            data: {
              "featureId": featureId,
              "voteElementState": voteType
            },
            success: function (store) {
            },
            error: function () {}
          });

        },
        error: function () {
        }
      });
    }
  
    handleUpVote() {
      if (this.state.hasVoted === 'up') {
        this.setState({
          votes: this.props.votes - 1,
          hasVoted: 'neutral'
        })
        this.voteToDb(3);
      } else {
        this.setState({
          votes: this.props.votes + 1,
          hasVoted: 'up'
        })
        this.voteToDb(1);
      }
      
    }

    // handleNeutral() {
    //   this.setState({
    //     votes: this.props.votes + 1,
    //     hasVoted: 'neutral'
    //   })
    // }

    handleDownVote() {
      if (this.state.hasVoted === 'down') {
        this.setState({
          votes: this.props.votes + 1,
          hasVoted: 'neutral'
        })
        this.voteToDb(4)
      } else {
        this.setState({
          votes: this.props.votes - 1,
          hasVoted: 'down'
        })
        this.voteToDb(2);
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
                id={this.props.id}
                votes={this.state.votes}
                hasVoted={this.state.hasVoted}
                upVote={() => this.handleUpVote()}
                downVote={() => this.handleDownVote()}
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