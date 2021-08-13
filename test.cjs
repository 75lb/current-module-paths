const TestRunner = require('test-runner')
const currentModulePaths = require('current-module-paths')
const a = require('assert').strict

const tom = new TestRunner.Tom()

tom.test('simple', async function () {
  const { __filename, __dirname } = currentModulePaths('file:///Users/lloyd/Documents/75lb/current-module-paths/test.cjs')
  a.ok(/current-module-paths\/test.cjs/.test(__filename))
  a.ok(/current-module-paths/.test(__dirname))
})

module.exports = tom
