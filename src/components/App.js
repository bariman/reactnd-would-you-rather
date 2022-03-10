import React, {Component, Fragment} from 'react'
import '../App.css';
import LoadingBar from 'react-redux-loading-bar'
import Home from './Home'
import Leaderboard from './Leaderboard'
import { connect } from 'react-redux'
import NewQuestionForm from './NewQuestionForm'
import Nav from './Nav'
import { handleInitialData } from '../actions/shared'
import { HashRouter, Routes, Route } from 'react-router-dom'
import QuestionPage from "./QuestionPage";
import Login from "./Login";
import NotFound from "./NotFound";

class App extends Component {
    componentDidMount () {
      const { dispatch } = this.props;
      dispatch(handleInitialData());
    }
    render() {
      const { authedUser } = this.props
        return (
            <div className="App">
                <HashRouter basename="/">
                    <LoadingBar />
                    <div className='container'>
                      { authedUser ? (<Fragment>
                          <Nav/>
                          <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="leaders" element={<Leaderboard />} />
                            <Route path="questions/:question_id" element={<QuestionPage />} />
                            <Route path="add" element={<NewQuestionForm />} />
                            <Route path="*" element={ <NotFound /> } />
                          </Routes>
                        </Fragment>) : <Login />
                        }
                    </div>
                </HashRouter>
            </div>
        );
    }
}

function mapStateToProps ({ authedUser, questions }) {
    return {
      authedUser,
    }
}

export default connect(mapStateToProps)(App)
