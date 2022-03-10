import React, { Component } from 'react'
import { handleSaveQuestionAnswer } from "../actions/shared";
import { connect } from "react-redux";
import {hideLoading, showLoading} from "react-redux-loading-bar";

class PollQuestion extends Component {
  constructor(props) {
    super(props);
    this.optionOne = React.createRef();
    this.optionTwo = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, authedUser, question } = this.props;
    dispatch(handleSaveQuestionAnswer(
      authedUser,
      question.id,
      this.optionOne.current.checked ? 'optionOne' : 'optionTwo'
    ));
  }

  render() {
    const { question } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <h2 className="subtitle">Would you rather ...</h2>
        </div>
        <div className="field">
          <div className="control">
            <label className="radio">
              <input ref={this.optionOne} type="radio" name="pollAnswer"/>
               { question.optionOne.text }
            </label>
            <p>or</p>
            <label className="radio">
              <input ref={this.optionTwo} type="radio" name="pollAnswer"/>
               { question.optionTwo.text }
            </label>
          </div>
        </div>
        <button className='button is-primary' type='submit'>
          Submit
        </button>
      </form>
    );
  }
}

function mapStateToProps ({authedUser}, {question}) {
  return {
    authedUser,
    question
  }
}

export default connect(mapStateToProps)(PollQuestion)