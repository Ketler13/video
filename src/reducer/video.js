import { LOAD_VIDEOS, SUCCESS, FAIL, SET_INPUT_VALUE } from '../constants'

const defaultState = {
  videos: null,
  inputValue: ''
}

export default (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: payload.value
      }
  }

  return state
}
