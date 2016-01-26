import { REFRESH_REQUEST, REFRESH_SUCCESS, REFRESH_FAILURE } from './actions'

const INITIAL_STATE = {
  isRefreshing: false,
  devices: [],
  profiles: []
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
        profiles
      })

    case REFRESH_FAILURE:
      return Object.assign({}, state, {
        isRefreshing: false
      })

    default:
      return state
  }
}
