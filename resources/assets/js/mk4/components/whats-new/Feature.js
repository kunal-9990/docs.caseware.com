
import React, { Component } from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import PropTypes from 'prop-types';
import Voter from './Voter'

const lightboxOptions = {
  overlayColor: 'rgba(255, 255, 255, 0.85)',
  buttonsBackgroundColor: 'rgba(255, 255, 255, 0.85)',
  buttonsIconColor: "#323232",
  showThumbnails: false
};

class Feature extends Component {
    constructor(props) {
      super(props);
      this.state = {
        votes: this.props.votes, 
        hasVoted: this.props.hasvoted,
      };
    }

    voteToDb(voteType) {
      var featureName = this.props.feature.title;
      var featureVersion = this.props.version;
      var featureProduct = this.props.product;
      var featureId;
      if(isNaN(this.props.id)){
        featureId = "NaN";
      }
      else{
        featureId = this.props.id;
      }
      $.ajax({
        type: "post",
        url: '/api/vote/create',
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
          "product": featureProduct,
          "version": featureVersion,
          "feature": featureName,
          "featureDesc": "cool thing it does",
          "voteType": voteType
        }
        ,
        success: function (data) {
          $.ajax({
            type: "post",
            url: '/api/vote/updateVoteState',
            headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {
              "product": featureProduct,
              "version": featureVersion,
              "featureId": featureId,
              "voteElementState": voteType,
              "featureName": featureName
            },
            success: function (store) {
            },
            error: function (req, err) {
              // console.log('my message' + err);
            }
          });
        },
        error: function (req, err) {
          // console.log('my message' + err);
        }
      });
    }
  
    handleUpVote() {

    
      var currentScore = this.state.votes;
      var featureName = this.props.feature.title;
      if (this.state.hasVoted == 'up') {
        this.setState({
          votes: currentScore - 1,
          hasVoted: 'neutral'
        })
        this.voteToDb(3);
        ga('Global.send', 'event', 'clear-up', featureName, window.location.href);
        ga('Cloud.send', 'event', 'clear-up', featureName, window.location.href);
      } 
      else if (this.state.hasVoted == 'down') {

        this.setState({
          votes: currentScore + 2,
          hasVoted: 'up'
        })
        this.voteToDb(1);
        this.voteToDb(1);
        ga('Global.send', 'event', 'clear-down', featureName, window.location.href);
        ga('Cloud.send', 'event', 'clear-down', featureName, window.location.href);
        ga('Global.send', 'event', 'up', featureName, window.location.href);
        ga('Cloud.send', 'event', 'up', featureName, window.location.href);
      } 
      else {
        this.setState({
          votes: currentScore + 1,
          hasVoted: 'up'
        })
        this.voteToDb(1);

      }
      ga('Global.send', 'event', 'up', featureName, window.location.href);
      ga('Cloud.send', 'event', 'up', featureName, window.location.href);
    }

    // handleNeutral() {
    //   this.setState({
    //     votes: this.props.votes + 1,
    //     hasVoted: 'neutral'
    //   })
    // }

    handleDownVote() {

      var currentScore = this.state.votes;
      var featureName = this.props.feature.title;

      if (this.state.hasVoted == 'down') {
        this.setState({
          votes: currentScore + 1,
          hasVoted: 'neutral'
        })
        this.voteToDb(4)
        ga('Global.send', 'event', 'clear-down', featureName, window.location.href);
        ga('Cloud.send', 'event', 'clear-down', featureName, window.location.href);
      } 
      else if (this.state.hasVoted == 'up') {
        this.setState({
          votes: currentScore - 2,
          hasVoted: 'down'
        })
        this.voteToDb(2);
        this.voteToDb(2);
        ga('Global.send', 'event', 'clear-up', featureName, window.location.href);
        ga('Cloud.send', 'event', 'clear-up', featureName, window.location.href);
        ga('Global.send', 'event', 'down', featureName, window.location.href);
        ga('Cloud.send', 'event', 'down', featureName, window.location.href);
        }
      else {
        this.setState({
          votes: currentScore - 1,
          hasVoted: 'down'
        })
        this.voteToDb(2);
        ga('Global.send', 'event', 'down', featureName, window.location.href);
        ga('Cloud.send', 'event', 'down', featureName, window.location.href);
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
                id="1"
                votes={this.state.votes}
                hasVoted={this.state.hasVoted}
                upVote={() => this.handleUpVote()}
                downVote={() => this.handleDownVote()}
                hierarchy={this.props.hierarchy}
              />
            )}
            { this.props.hierarchy === 1 ? (<h2>{ feature.title }</h2>) : (<h3>{ feature.title }</h3>)}
          </div>

          <SimpleReactLightbox>
            <SRLWrapper options={lightboxOptions}>
              <div className="feature__content" dangerouslySetInnerHTML={{__html: feature.description }} />
            </SRLWrapper>
          </SimpleReactLightbox>    
        </div>
      );
    }
}

Feature.propTypes = {
  votes: PropTypes.number.isRequired,
}
  
export default Feature