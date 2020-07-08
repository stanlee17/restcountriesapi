import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_ALPHA } from './types'
import axios from 'axios'

const getAllCountries = (payload) => {
  return {
    type: GET_ALL_COUNTRIES,
    payload,
  }
}

const getCountriesByAlpha = (payload) => {
  return {
    type: GET_COUNTRIES_BY_ALPHA,
    payload,
  }
}

export const fetchAllCountries = (url) => {
  return (dispatch) => {
    axios.get(url).then((res) => {
      const data = res.data
      dispatch(getAllCountries(data))
    })
  }
}

export const countriesByAlpha = (url) => {
  return (dispatch) => {
    axios.get(url).then((res) => {
      const data = res.data
      dispatch(getCountriesByAlpha(data))
    })
  }
}
