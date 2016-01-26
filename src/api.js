import fetch from 'isomorphic-fetch'

function internalFetch (url) {
  return fetch(url)
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
