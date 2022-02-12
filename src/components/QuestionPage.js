import React, { Component } from 'react'
import PollCard from "./PollCard";

class QuestionPage extends Component {
  render () {
    const {questionId} = this.props
    return (
      <PollCard id={questionId}/>
    )
  }
}

export default QuestionPage