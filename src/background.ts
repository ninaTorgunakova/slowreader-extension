import { config } from './config';

chrome.runtime.onConnectExternal.addListener((port) => {
  console.log(port);
  if (port.sender?.origin === config.HOST) {
    console.log(`connection attempt from ${config.HOST}`);
    port.postMessage({ message: 'Extension was connected' });
    port.onMessage.addListener(async (message) => {
      port.postMessage({ message: 'Message was received' });
      if (message.name === 'fetchData' && message.url) {
        const fetchedData = await new Promise((resolve) =>
          setTimeout(resolve, 1000),
        ).catch((error) => {
          port.postMessage({ data: null, error: error });
        });
        port.postMessage({ data: fetchedData });
      }
      return true;
    });
  }
});
