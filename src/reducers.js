import {
  REFRESH_REQUEST,
  REFRESH_SUCCESS,
  REFRESH_FAILURE,
  SHOW_DEVICE_DETAILS,
  HIDE_DEVICE_DETAILS,
  TOGGLE_NETWORK_THROTTLING
} from './actions'

const INITIAL_STATE = {
  isRefreshing: false,
  devices: [],
  profiles: [],
  isShowingDeviceDetails: false,
  currentDevice: {},
  defaultProfile: {}
}

export default (state = INITIAL_STATE, action) => {
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
        profiles,
        defaultProfile: profiles[0]
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

    case TOGGLE_NETWORK_THROTTLING:
      let currentDevice = Object.assign({}, state.currentDevice)

      currentDevice.has_profile = !currentDevice.has_profile

      // FIXME: Special-casing the string "None".
      if (currentDevice.has_profile) {
        if (currentDevice.profile === 'None') {
          const { name } = state.defaultProfile

          currentDevice.profile = name
        }
      } else {
        currentDevice.profile = 'None'
      }

      return Object.assign({}, state, {
        currentDevice
      })

    default:
      return state
  }
}
