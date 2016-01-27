import {
  REFRESH_REQUEST,
  REFRESH_SUCCESS,
  REFRESH_FAILURE,
  SHOW_DEVICE_DETAILS,
  HIDE_DEVICE_DETAILS
} from './actions'

const INITIAL_STATE = {
  isRefreshing: false,
  devices: [],
  profiles: [],
  isShowingDeviceDetails: false,
  currentDevice: {}
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case REFRESH_REQUEST:
      return Object.assign({}, state, {
        isRefreshing: true
      })

    case REFRESH_SUCCESS:
      const { devices, profiles } = action

      return Object.assign({}, state, {
        isRefreshing: false,
        devices,
        profiles
      })

    case REFRESH_FAILURE:
      return Object.assign({}, state, {
        isRefreshing: false
      })

    case SHOW_DEVICE_DETAILS:
      const { device } = action

      return Object.assign({}, state, {
        isShowingDeviceDetails: true,
        currentDevice: device
      })

    case HIDE_DEVICE_DETAILS:
      return Object.assign({}, state, {
        isShowingDeviceDetails: false,
        currentDevice: {}
      })

    default:
      return state
  }
}
