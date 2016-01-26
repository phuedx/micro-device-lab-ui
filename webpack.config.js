const getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/index.js',
  out: 'public/',
  html: (context) => {
    return {
      'index.html': context.defaultTemplate({
        title: 'Micro Device Lab'
      })
    }
  },
  isDev: true
})
