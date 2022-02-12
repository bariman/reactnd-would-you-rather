import React, { Component } from 'react'

class NewQuestionForm extends Component {
    render () {
        return (
            <div>
                <h3 className='center'>Create New question</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <button
                        className='btn'
                        type='submit'
                        >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default NewQuestionForm