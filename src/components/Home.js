import React, { Component } from 'react'
import QuestionPage from './QuestionPage';
import {connect} from "react-redux";

class Home extends Component {
  render () {
    const {questions} = this.props;
    return (
      <div>
        {/*<h3 className='center'>Leaderboard</h3>*/}
        {/*<ul className='leaderboard-list'>*/}
        {/*  {questions.map((question) => (*/}
        {/*    <li key={question.id}>*/}
        {/*      <QuestionPage question={question} />*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questions: questions
  }
}

export default connect(mapStateToProps)(Home)