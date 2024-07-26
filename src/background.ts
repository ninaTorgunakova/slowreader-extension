import { config } from './config';

const FETCH_TIMEOUT_MS = 30000;

chrome.runtime.onConnectExternal.addListener((port) => {
  console.log(port);
  if (port.sender?.origin === config.HOST) {
    console.log(`connection attempt from ${config.HOST}`);
    port.postMessage({ message: 'Extension was connected' });

    port.onMessage.addListener(async (message) => {
      console.log(message);
      port.postMessage({ message: 'Message was received' });
      if (message.name === 'fetch' && message.url) {
        const options = {
          ...message.options,
          signal: AbortSignal.timeout(FETCH_TIMEOUT_MS)
        }
        await fetch(message.url, options)
          .then((data) => {
            console.log(data);
            port.postMessage({ data });
          })
          .catch((error) => {
            console.error(error);
            port.postMessage({ data: null, error: error.toString() });
          });
      }
      return true;
    });
  }
});
