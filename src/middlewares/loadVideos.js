import axios from 'axios'
import {LOAD_VIDEOS} from '../constants'

export default store => next => action => {
  if (action.type !== LOAD_VIDEOS) return next(action)
  const base = 'https://www.googleapis.com/youtube/v3/search?'
  const key = 'AIzaSyCmn452SXgGyHGz07KS4Fj775zoc2ph3S0'
  const phrase = action.payload.phrase
  const url = `${base}order=date&part=snippet&q=${phrase}&maxResults=10&key=${key}`
}
