# Bug in selenium-webdriver@4.0.0-beta.1

https://github.com/SeleniumHQ/selenium/issues/9264

`logMutationEvents` does not work for me in the JavaScript bindings. The defined
callback is never executed. When looking into the browser console of the controlled Chrome instance, the
following error is logged:

```
Uncaught ReferenceError: __webdriver_attribute is not defined
```

This does not seem to be caught by the tests, because the [test's assertions are
located in the callback](https://github.com/SeleniumHQ/selenium/blob/4464ac4f8230150824f6bf2e4075cd1f53a648c7/javascript/node/selenium-webdriver/test/devtools_test.js#L89-L91) that is never executed.


## To Reproduce

Detailed steps to reproduce the behavior:
Execute the self-contained script mentioned below. Apart from executing
`logMutationEvents`, it also prints the browser console logs.

## Expected behavior

As the DOM of the page is being mutated during the script, the callback passed
to `logMutationEvents` should be executed.

## Test script or set of commands reproducing this issue

This repo just adapts [the test code for `logMutationEvents`](https://github.com/SeleniumHQ/selenium/blob/4464ac4f8230150824f6bf2e4075cd1f53a648c7/javascript/node/selenium-webdriver/test/devtools_test.js#L85-L101).

Run it with:
1. `npm install`
2. `npm start`

## Environment

- OS: macOS
- Browser: Chrome
- Browser version: 89.0.4389.82
- Browser Driver version: 89.0.4389.23
- Language Bindings version: JavaScript 4.0.0-beta.1
- Selenium Grid version (if applicable): --
