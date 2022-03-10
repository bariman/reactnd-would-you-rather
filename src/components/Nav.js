import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";
import {setAuthedUser} from "../actions/authedUser";

class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null));
  }

  render() {
    const { authedUser, users } = this.props;
    return (
      <nav className='navbar'>
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink to='/' className="navbar-item">
              Home
            </NavLink>
            <NavLink to='/question/new' className="navbar-item">
              New Question
            </NavLink>
            <NavLink to='/leaders' className="navbar-item">
              Leaderboard
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item media">
              <div className="media-left">
                <figure className="image is-24x24">
                  <img alt="avatar" src={users[authedUser].avatarURL}/>
                </figure>
              </div>
              <div className="media-content">
                { users[authedUser].name }
              </div>
            </div>
            <button to='/' className="navbar-item" onClick={this.handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Nav)