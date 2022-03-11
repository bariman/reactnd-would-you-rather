import React from 'react'
import QuestionCard from "./QuestionCard";
import {connect} from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom'
import {setAuthedUser} from "../actions/authedUser";
import Login from "./Login";

function QuestionPage(props) {
  let location = useLocation();
  let navigate = useNavigate();
  if (location.state !== null) {
    let question = location.state.question;
    return (
      <QuestionCard question={question}/>
    )
  }
  else {
    const { dispatch } = props;
    dispatch(setAuthedUser(null));
    navigate('/not_found');
    return (<Login />);
  }
}

function mapStateToProps ({questions, authedUser}, props) {
  return {
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(QuestionPage)