import React, { Component } from 'react'

class LeaderboardCard extends Component {
    render () {
      const {user} = this.props
        return (
            <div className="card">
                <div className="name">Name:{user.name}</div>
                <div className="answeredQuestions">Answers:{user.answersCount}</div>
                <div className="createdQuestions">Questions:{user.questionsCount}</div>
                <div className="score">Total:{user.total}</div>
                <div className="avatar"><img alt="" src={user.avatarURL}/></div>
            </div>
        )
    }
}

export default LeaderboardCard