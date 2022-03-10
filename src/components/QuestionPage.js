import React from 'react'
import QuestionCard from "./QuestionCard";
import {connect} from "react-redux";
import { useLocation } from 'react-router-dom'

function QuestionPage(props) {
  let location = useLocation();
  let question = location.state.question;
  return (
    <QuestionCard question={question}/>
  )
}

function mapStateToProps ({questions, authedUser}, props) {
  return {
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(QuestionPage)