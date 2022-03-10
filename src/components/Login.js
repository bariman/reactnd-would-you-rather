import React, {Component} from 'react'
import {connect} from "react-redux";
import {setAuthedUser} from "../actions/authedUser";

class Login extends Component {
  state = {
    select: 'none'
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.select !== 'none') {
      const { dispatch } = this.props
      dispatch(setAuthedUser(this.state.select));
    }
  }

  handleChange = (e) => {
    const select = e.target.value;
    this.setState({ select });
  };

  render() {
    const { users } = this.props;
    const { select } = this.state;
    return (
      <section className="section">
        <h1 className="title">Welcome to the Would you rather app!</h1>
        <h2 className="subtitle">Please, sign in to continue.</h2>
        <form className="box" onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <div className="select">
                <select
                  value={select}
                  onChange={this.handleChange}>
                  <option key="none" value="none" disabled="disabled">Select an user</option>
                  {Object.values(users).map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>

              </div>
            </div>
          </div>
          <div className="field">
            <button className="button is-primary">
              Sign In
            </button >
          </div>
        </form>
      </section>
    );
  }
}

function mapStateToProps({users}) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)