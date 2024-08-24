const currentModulePaths = require('current-module-paths')
const a = require('assert').strict

const test = new Map()

test.set('simple', async function () {
  const { __filename, __dirname } = currentModulePaths('file:///c:/Users/lloyd/Documents/75lb/current-module-paths/test.mjs')
  a.ok(/test.mjs/.test(__filename))
  a.ok(/current-module-paths/.test(__dirname))
})


module.exports = { test }
