import fetch from 'isomorphic-fetch'

function internalFetch (url, options) {
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return response
    })
    .then(response => response.json())
}

export function getDevices () {
  return internalFetch('//127.0.0.1:8080/devices')
}

export function getProfiles () {
  return internalFetch('//127.0.0.1:8080/profiles')
}

export function updateDevice (device) {
  const body = JSON.stringify({
    profile: device.profile
  })

  return fetch(`//127.0.0.1:8080/devices/${device.dhcp.mac}`, {
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
