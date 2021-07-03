import TestRunner from 'test-runner'
import currentModulePaths from 'current-module-paths'
import assert from 'assert'
const a = assert.strict

const tom = new TestRunner.Tom()

tom.test('simple', async function () {
  const { __filename, __dirname } = currentModulePaths(import.meta.url)
  a.ok(/current-module-paths\/test.mjs/.test(__filename))
  a.ok(/current-module-paths/.test(__dirname))
})

export default tom
