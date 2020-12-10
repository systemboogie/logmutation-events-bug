There is the **mutation-listener.js** file missing in the [**selenium-webdriver@4.0.0-alpha.8** package](https://www.npmjs.com/package/selenium-webdriver) published to NPM.

Trying to listen to DOM mutations fails with the following error:
```
Error: ENOENT: no such file or directory, open '../../cdp-support/mutation-listener.js'
    at Object.openSync (node:fs:487:3)
    at Object.readFileSync (node:fs:388:35)
    at Driver.logMutationEvents (/Users/marcus.noll/Documents/git/selenium-webdriver-bug/node_modules/selenium-webdriver/chromium.js:888:33)
    at processTicksAndRejections (node:internal/process/task_queues:93:5)
    at async example (/Users/marcus.noll/Documents/git/selenium-webdriver-bug/index.js:7:9) {
  errno: -2,
  syscall: 'open',
  code: 'ENOENT',
  path: '../../cdp-support/mutation-listener.js'
}

```

## To reproduce

I just stripped down [the test code for `logMutationEvents`](https://github.com/SeleniumHQ/selenium/blob/07cd99c6811d13f4906f941c1d6936fcd5999baa/javascript/node/selenium-webdriver/test/chrome/devtools_test.js#L120-L135) and changed it to work with the published NPM package.

Run it with:
1. `npm install`
2. `npm start`

## Expected behavior

**mutation-listener.js** is contained in the NPM package and it's therefore possible to use `logMutationEvents` without error
