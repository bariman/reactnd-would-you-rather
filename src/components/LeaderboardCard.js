import React, {Component} from 'react'

class LeaderboardCard extends Component {
  render() {
    const {user} = this.props
    return (
      <article className="media box">
        <figure className="image media-left is-128x128">
          <img alt="" src={user.avatarURL}/>
        </figure>
        <div className="media-content">
          <div className="content">
            <p><strong>{user.name}</strong></p>
            <p>Answered questions: {user.answersCount}</p>
            <p>Created questions: {user.questionsCount}</p>
          </div>
        </div>
        <div className="media-right">
          <div className="card">
            <div className="card-header">
              <div className="card-header-title">
                Score
              </div>
            </div>
            <div className="card-content">
              <span className="tag is-success is is-rounded is-large">
                {user.total}
              </span>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default LeaderboardCard