const bowser = require('bowser');
const browserData = bowser.getParser(window.navigator.userAgent).parsedResult;

export function browserInfo() {
  const navigatorData = {
    browser: navigator.appName,
    codename: navigator.appCodeName,
    version: navigator.appVersion,
    online: navigator.onLine,
    language: navigator.language,
    platform: navigator.platform,
    product: navigator.product,
    userAgent: navigator.userAgent
  };

  const pluginsData = {};
  for (var key in navigator.plugins) {
    if (!navigator.plugins.hasOwnProperty(key)) continue;

    pluginsData[navigator.plugins[key].name] = navigator.plugins[key].description;
  }

  return {
    ...browserData,
    browser: {
      shortVersion: browserData.browser.version.split('.')[0],
      ...browserData.browser
    },
    navigator: navigatorData,
    plugins: pluginsData
  };
}
