import { LOAD_VIDEOS, SET_INPUT_VALUE, CLEAR_RESULTS } from '../constants'

export const loadVideos = phrase => {
  return {
    type: LOAD_VIDEOS,
    payload: {
      phrase
    }
  }
}

export const setInputValue = (field, value) => {
  return {
    type: SET_INPUT_VALUE,
    payload: {
      field,
      value
    }
  }
}

export const clearResults = () => {
  return {
    type: CLEAR_RESULTS
  }
}
