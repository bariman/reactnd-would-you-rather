import React, { Component } from 'react'
import '../App.css';
import Home from './Home'
import Leaderboard from './Leaderboard'
import { connect } from 'react-redux'
import NewQuestionForm from './NewQuestionForm'
import Nav from './Nav'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuestionPage from "./QuestionPage";

class App extends Component {
    componentDidMount () {
        const { dispatch } = this.props
        dispatch(handleInitialData())
    }
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div className='container'>
                        <Nav/>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="leaders" element={<Leaderboard />} />
                            <Route path="question/:questionId" element={<QuestionPage />} />
                            <Route path="question/new" element={<NewQuestionForm />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps ({ authedUser, users }) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)
