import thunk from 'redux-thunk'
import logger from './logger'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
    thunk,
    loadingBarMiddleware(),
    logger,
)