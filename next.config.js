const webpackConfig = require('./webpack.config')
const glob = require('glob')

const pathList = glob.sync('./pages/**/').map(c => {
  return c.replace('./pages', '')
}).concat(
  glob.sync('./pages/**/!(_)*.js').map(c => {
    return c.replace('./pages', '').replace(/\.js$/, '.html')
  }))

let defaultPathMap = {}

pathList.forEach(c => {
  if (c === '/' || c === '/index.html') return false
  if (/\/$/.test(c) && c.length > 1) {
    const noIndex = pathList.indexOf(`${c}index.html`) === -1
    if (noIndex) return false
    defaultPathMap[c] = { page: c.replace(/\/$/, '') }
  } else if (/\/index\.html$/.test(c)) {
    defaultPathMap[c] = { page: c.replace(/\/index\.html$/, '') }
  } else {
    defaultPathMap[c] = { page: c.replace(/\.html$/, '') }
  }
})

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/index.html': { page: '/' },
      ...defaultPathMap
    }
  },
  webpack: webpackConfig
}