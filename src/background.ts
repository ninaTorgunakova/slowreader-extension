import { config } from './config';

let slowReaderPort;

chrome.runtime.onConnectExternal.addListener((port) => {
  console.log(port);
  if (port.sender?.url === config.HOST) {
    console.log(`connection attempt from ${config.HOST}`);
    port.postMessage({ message: 'Extension was connected' });
    slowReaderPort = port;
    slowReaderPort.onMessage.addListener(async (message) => {
      console.log('Message was received');
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
