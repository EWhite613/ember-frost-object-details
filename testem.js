/* eslint-env node */
module.exports = {
  'test_page': 'tests/index.html?hidepassed&coverage',
  'disable_watching': true,
  'launch_in_ci': [
    'Chrome'
  ],
  'launch_in_dev': [
    'Chrome'
  ],
  'launchers': {
    'PhantomJsVisualAcceptance': {
      'command': 'phantomjs vendor/phantomjs-launcher.js <url>',
      'protocol': 'browser'
    },
    'SlimerJsVisualAcceptance': {
      'command': 'slimerjs -jsconsole vendor/phantomjs-launcher.js <url>',
      'protocol': 'browser'
    }
  }
}
