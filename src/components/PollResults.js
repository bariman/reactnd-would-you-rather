import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";

class PollResults extends Component {
  render() {
    const { question, authedUser } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const total_votes = optionOneVotes + optionTwoVotes;
    return (
      <Fragment>
        <h2 className="subtitle">Results</h2>
        <div className="box">
          { question.optionOne.votes.includes(authedUser) && <span className="tag is-info">Your vote</span>}
          <p>{question.optionOne.text}</p>
          <progress className="progress is-success" value={(optionOneVotes/total_votes) * 100 } max="100"></progress>
          <p>{ optionOneVotes + " out of " + total_votes + ' votes.'}</p>
        </div>
        <div className="box">
          { question.optionTwo.votes.includes(authedUser) && <span className="tag is-info">Your vote</span>}
          <p>{question.optionTwo.text}</p>
          <progress className="progress is-success" value={(optionTwoVotes/total_votes) * 100 } max="100"></progress>
          <p>{ optionTwoVotes + " votes out of " + total_votes}</p>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps ({authedUser, questions}, {question_id}) {
  const question = questions[question_id];
  return {
    question,
    authedUser
  }
}

export default connect(mapStateToProps)(PollResults)