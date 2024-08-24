import { strict as a } from 'assert'
import currentModulePaths from 'current-module-paths'

const test = new Map()

test.set('simple', async function () {
  /* Needs the c: drive letter else the test will fail on windows */
  const { __filename, __dirname } = currentModulePaths('file:///c:/Users/lloyd/Documents/75lb/current-module-paths/test.mjs')
  /* Can't test the entire path as it will vary on CI */
  a.ok(/test.mjs/.test(__filename))
  a.ok(/current-module-paths/.test(__dirname))
})

export { test }
