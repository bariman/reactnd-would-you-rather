import React, {Fragment, Component} from 'react'
import LeaderboardCard from "./LeaderboardCard";
import {connect} from "react-redux";

class Leaderboard extends Component {
  render() {
    const {leaders} = this.props;
    return (
      <Fragment>
        <section className="section">
          <h1 className='title'>Leaderboard</h1>
          <div className="columns is-centered">
            <ul className='content column is-half'>
              {leaders.map((leader) => (
                <li key={leader.id}>
                  <LeaderboardCard user={leader}/>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps({users}) {
  const leaders = Object.values(users).map(user => ({
    id: user.id,
    name: user.name,
    avatarURL: user.avatarURL,
    answersCount: Object.values(user.answers).length,
    questionsCount: user.questions.length,
    total: Object.values(user.answers).length + user.questions.length,
  })).sort((a, b) => b.total - a.total);

  return {
    leaders: leaders
  }
}

export default connect(mapStateToProps)(Leaderboard)