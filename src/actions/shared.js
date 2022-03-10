import {getInitialData, saveQuestion, saveQuestionAnswer} from '../utils/api'
import { receiveUsers } from './users'
import { addQuestion, addQuestionAnswer, receiveQuestions } from './questions'
import { addUserAnswer, addUserQuestion } from "./users";
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question));
        dispatch(hideLoading());
      });
  }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => {
          dispatch(addQuestionAnswer({authedUser, qid, answer}));
          dispatch(addUserAnswer({authedUser, qid, answer}));
          dispatch(hideLoading());
        }
      )
  }
}
