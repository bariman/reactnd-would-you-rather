import React, { Component } from 'react'
import {connect} from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import QuestionCard from "./QuestionCard";

class Home extends Component {
  render () {
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <div className="columns is-centered">
        <Tabs className="column is-half" selectedTabClassName="is-active">
        <div className="tabs is-centered">
          <TabList>
            <Tab><a href="#">Unanswered</a></Tab>
            <Tab><a href="#">Answered</a></Tab>
          </TabList>
        </div>
        <TabPanel>
          <ul className='content'>
            {unansweredQuestions.map((question) => (
              <li key={question.id}>
                <QuestionCard mode="teaser" question={question}/>
              </li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className='content'>
            {answeredQuestions.map((question) => (
              <li key={question.id}>
                <QuestionCard mode="teaser" question={question}/>
              </li>
            ))}
          </ul>
        </TabPanel>
      </Tabs>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
    const answeredIds = Object.keys(users[authedUser].answers);
    const answeredQuestions = Object.values(questions).filter(question => answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);
    const unansweredQuestions = Object.values(questions).filter(question => !answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);
    return {
      answeredQuestions,
      unansweredQuestions,
    }
}

export default connect(mapStateToProps)(Home)