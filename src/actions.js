import { Promise } from 'es6-promise'
import { getDevices, getProfiles } from './api'

export const REFRESH_REQUEST = 'refresh_request'
export const REFRESH_SUCCESS = 'refresh_success'
export const REFRESH_FAILURE = 'refresh_failure'

export const SHOW_DEVICE_DETAILS = 'show_device_details'
export const HIDE_DEVICE_DETAILS = 'hide_device_details'

export const TOGGLE_NETWORK_THROTTLING = 'toggle_network_throttling'

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

export function showDeviceDetails (device) {
  return {
    type: SHOW_DEVICE_DETAILS,
    device
  }
}

export function hideDeviceDetails () {
  return {
    type: HIDE_DEVICE_DETAILS
  }
}

export function toggleNetworkThrottling () {
  return {
    type: TOGGLE_NETWORK_THROTTLING
  }
}
