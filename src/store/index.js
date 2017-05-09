import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import loadVideos from '../middlewares/loadVideos'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(loadVideos))

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store
