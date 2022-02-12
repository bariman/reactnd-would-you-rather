import React, { Component } from 'react'

class QuestionCard extends Component {
  render () {
    const {question} = this.props
    return (
      <div className="card">
        <div className="name">{question.author} asks:</div>
        <div>Would you rather?</div>
      </div>
    )
  }
}

export default QuestionCard