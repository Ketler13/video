import {
         LOAD_VIDEOS, SUCCESS, FAIL, START, SET_INPUT_VALUE, CLEAR_RESULTS
       } from '../constants'

const defaultState = {
  vids: null,
  error: null,
  loading: false,
  loaded: false,
  phrase: '',
  vidId: ''
}

export default (state = defaultState, action) => {
  const { type, payload, error } = action

  switch (type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        [payload.field]: payload.value
      }

    case LOAD_VIDEOS + START:
      return {
        ...state,
        error: null,
        vids: null,
        loaded:false,
        loading: true
      }

    case LOAD_VIDEOS + SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        loaded: true,
        vids: payload.vids
      }

    case LOAD_VIDEOS + FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      }

    case CLEAR_RESULTS:
      return defaultState

    default:
      return state
  }
}
