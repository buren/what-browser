export function browserInfo() {
  const browser = {
    browser: navigator.appName,
    codename: navigator.appCodeName,
    version: navigator.appVersion,
    online: navigator.onLine,
    language: navigator.language,
    platform: navigator.platform,
    product: navigator.product,
    userAgent: navigator.userAgent
  };

  const plugins = {};
  for (var key in navigator.plugins) {
    if (!navigator.plugins.hasOwnProperty(key)) continue;

    plugins[navigator.plugins[key].name] = navigator.plugins[key].description;
  }

  return { browser: browser, plugins: plugins };
}
