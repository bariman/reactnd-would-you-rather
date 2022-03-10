import React, { Component } from 'react'
import {connect} from "react-redux";
import PollTeaser from "./PollTeaser";
import PollQuestion from "./PollQuestion";
import PollResults from "./PollResults";

class QuestionCard extends Component {
  render () {
    const { question, users, mode, authedUser, loadingBar } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">
            <figure className="image media-left is-128x128">
              <img alt="" src={users[question.author].avatarURL}/>
            </figure>
          </div>
          <div className="card-header-title">
            {question.author} asks:
          </div>
        </div>
        <div className="card-content">
          { mode === 'teaser' && <PollTeaser question={question}/> }
          { mode === 'question' && <PollQuestion question={question}/> }
          { mode === 'results' && <PollResults authedUser={ authedUser } questionId={ question.id }/> }
        </div>
      </div>
    )
  }
}

function mapStateToProps({users, questions, authedUser, loadingBar }, { mode, question }) {
  if (mode !== 'teaser') {
    const currUser = users[authedUser];
    if (Object.keys(currUser.answers).includes(question.id)) {
      mode = 'results'
    }
    else {
      mode = 'question'
    }
  }
  return {
    authedUser,
    users,
    question,
    mode,
    loadingBar
  }
}

export default connect(mapStateToProps)(QuestionCard)