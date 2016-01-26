import { Promise } from 'es6-promise'
import { getDevices, getProfiles } from './api'

export const REFRESH_REQUEST = 'refresh_request'
export const REFRESH_SUCCESS = 'refresh_success'
export const REFRESH_FAILURE = 'refresh_failure'

function refreshRequest () {
  return {
    type: REFRESH_REQUEST
  }
}

function refreshSuccess (devices, profiles) {
  return {
    type: REFRESH_SUCCESS,
    devices,
    profiles
  }
}

function refreshFailure (error) {
  return {
    type: REFRESH_FAILURE,
    error
  }
}

export function refresh () {
  return (dispatch) => {
    dispatch(refreshRequest())

    Promise.all([
      getDevices(),
      getProfiles()
    ]).then(
      ([devices, profiles]) => dispatch(refreshSuccess(devices, profiles)),
      error => refreshFailure(error)
    )
  }
}
