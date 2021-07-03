[![view on npm](https://badgen.net/npm/v/current-module-paths)](https://www.npmjs.org/package/current-module-paths)
[![npm module downloads](https://badgen.net/npm/dt/current-module-paths)](https://www.npmjs.org/package/current-module-paths)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/current-module-paths)](https://github.com/75lb/current-module-paths/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/current-module-paths)](https://github.com/75lb/current-module-paths/network/dependents?dependent_type=PACKAGE)
[![Build Status](https://travis-ci.org/75lb/current-module-paths.svg?branch=master)](https://travis-ci.org/75lb/current-module-paths)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# current-module-paths

Access to `__filename` and `__dirname` within ECMAScript modules.


```js
import currentModulePaths from 'current-module-paths'

const { __filename, __dirname } = currentModulePaths(import.meta.url)
```

* * *

&copy; 2021 Lloyd Brookes \<75pound@gmail.com\>.

Tested by [test-runner](https://github.com/test-runner-js/test-runner).
