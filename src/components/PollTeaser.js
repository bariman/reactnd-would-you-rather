import React, {Component, Fragment} from 'react'
import {Link} from "react-router-dom";

class PollTeaser extends Component {
  render() {
    const { question } = this.props
    return (
      <Fragment>
        <p>Would you rather</p>
        <p>...{question.optionOne.text}...</p>
        <Link to={'/question/' + question.id } className="button is-primary" state={{ question }}>
          View Poll
        </Link>
      </Fragment>
    );
  }
}

export default PollTeaser