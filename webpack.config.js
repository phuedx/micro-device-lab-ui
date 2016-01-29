'use strict'

const BASE_API_URL = process.env.NODE_ENV === 'production'
  ? ''
  : 'http://127.0.0.1:8081'

const getConfig = require('hjs-webpack')
const webpack = require('webpack')

let config = getConfig({
  in: 'src/index.js',
  out: 'out/',
  html: (context) => {
    return {
      'index.html': context.defaultTemplate({
        title: 'Micro Device Lab'
      })
    }
  }
})

config.plugins.push(new webpack.DefinePlugin({
  BASE_API_URL: JSON.stringify(BASE_API_URL)
}))

module.exports = config
