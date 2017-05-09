import { LOAD_VIDEOS, SET_INPUT_VALUE } from '../constants'

export const loadVideos = phrase => {
  return {
    type: LOAD_VIDEOS,
    payload: {
      phrase
    }
  }
}

export const setInputValue = value => {
  return {
    type: SET_INPUT_VALUE,
    payload: {
      value
    }
  }
}
