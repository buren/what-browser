import { onReady } from './dom';
import { browserInfo } from './debug-info';

onReady(() => {
  var outputElement = document.querySelector('#debug-info')
  outputElement.innerText = JSON.stringify(browserInfo(), null, 2);
});
