
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Voter from './Voter'

class Feature extends Component {
    constructor(props) {
      super(props);
      this.state = {
        votes: this.props.votes, // TODO - change this.state.votes to be array to account for sub features!
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
          "feature": this.props.title,
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
      console.log(this.props)

      let subFeatures = ''
      if (feature.sub_features) {
        subFeatures = feature.sub_features.map((subFeature, i) => {
          return (
            <div className="whats-new__sub-feature" key={i}>
              <div className={ "feature__header" + (subFeature.allow_voting ? " feature__header--voter" : " feature__header--no-voter")}>
                {subFeature.allow_voting && (
                  <Voter 
                    id=''
                    votes={this.state.votes}
                    hasVoted={this.state.hasVoted}
                    upVote={() => { this.handleUpVote(); this.voteToDb(1) }}
                    downVote={() => { this.handleDownVote(); this.voteToDb(2) }}
                    hierarchy={2}
                  />
                )}
                <h3>{ subFeature.title }</h3>
              </div>
              <div className="feature__content" dangerouslySetInnerHTML={{__html: subFeature.description }} />
            </div> 
          )
        })
      }

      return (
        <div 
          className="whats-new__feature" 
          id={feature.title.trim().replace(/\s/g, '-')}
        >
          <div className={ "feature__header" + (feature.allow_voting ? " feature__header--voter" : " feature__header--no-voter")}>
            {feature.allow_voting && (
              <Voter 
                id=''
                votes={this.state.votes}
                hasVoted={this.state.hasVoted}
                upVote={() => { this.handleUpVote(); this.voteToDb(1) }}
                downVote={() => { this.handleDownVote(); this.voteToDb(2) }}
                hierarchy={1}
              />
            )}
            <h2>{ feature.title }</h2>
          </div>
          <div className="feature__content" dangerouslySetInnerHTML={{__html: feature.description }} />
          { subFeatures }
        </div>
      );
    }
}

Feature.propTypes = {
  votes: PropTypes.number.isRequired,
}
  
export default Feature