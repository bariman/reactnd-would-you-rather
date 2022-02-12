import React, { Component } from 'react'
import LeaderboardCard from "./LeaderboardCard";
import {connect} from "react-redux";

class Leaderboard extends Component {
    render () {
      const {leaders} = this.props;
        return (
            <div>
                <h3 className='center'>Leaderboard</h3>
                <ul className='leaderboard-list'>
                    {leaders.map((leader) => (
                        <li key={leader.id}>
                            <LeaderboardCard user={leader} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
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