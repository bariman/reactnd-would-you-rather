import React, { useRef } from 'react';
import {connect} from "react-redux";
import { useNavigate } from "react-router-dom";
import {handleSaveQuestion} from "../actions/shared.js";

function NewQuestionForm(props) {
  let navigate = useNavigate();
  const optionOne = useRef(true);
  const optionTwo = useRef(false);

   const handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = props;
    dispatch(handleSaveQuestion(
      optionOne.current.value,
      optionTwo.current.value,
      props.authedUser
    ));
    navigate('/');
  }

  return (
    <section className="section">
      <div className="box">
        <h3 className="title is-3 center">Create New question</h3>
        <form className='form' onSubmit={handleSubmit}>
          <p>Complete the question:</p>
          <div className="field">
            <label className="label">Would you rather ...</label>
            <input ref={optionOne} className="input" type="text" placeholder="Enter option one text here"/>
          </div>
          <div className="field">
            <label className="label">Or</label>
            <input ref={optionTwo} className="input" type="text" placeholder="Enter option two text here"/>
          </div>
          <button className='button is-primary' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

function mapStateToProps ({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestionForm)