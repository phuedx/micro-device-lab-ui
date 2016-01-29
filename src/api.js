/* global BASE_API_URL */

import fetch from 'isomorphic-fetch'

function internalFetch (path, options) {
  return fetch(`${BASE_API_URL}${path}`, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return response
    })
    .then(response => response.json())
}

export function getDevices () {
  return internalFetch('/devices')
}

export function getProfiles () {
  return internalFetch('/profiles')
}

export function updateDevice (device) {
  const body = JSON.stringify({
    profile: device.profile
  })

  return fetch(`/devices/${device.dhcp.mac}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response
  })
}
