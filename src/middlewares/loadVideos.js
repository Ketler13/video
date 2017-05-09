import axios from 'axios'
import {LOAD_VIDEOS, SUCCESS, FAIL, START} from '../constants'
import {mapVideoResponse} from '../helpers'

export default store => next => action => {
  if (action.type !== LOAD_VIDEOS) return next(action)
  next({type: action.type + START})
  const base = 'https://www.googleapis.com/youtube/v3/search?'
  const key = 'AIzaSyCmn452SXgGyHGz07KS4Fj775zoc2ph3S0'
  const phrase = action.payload.phrase
  const url = `${base}order=rating&part=snippet&q=${phrase}&maxResults=10&key=${key}`
  axios({
    method: 'get',
    url
  })
  .then(response => {
    const vids = mapVideoResponse(response.data.items)
    console.log(vids);
    next({type: action.type + SUCCESS, payload: {vids}})
  })
  .catch(error => {
    next({type: action.type + FAIL, error: error.toString()})
  });
}
