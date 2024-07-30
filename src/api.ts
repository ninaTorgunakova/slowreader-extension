type AppMessageType = 'fetch';

export type AppMessage = {
  id?: string;
  type: AppMessageType;
  url: string;
  options: RequestInit;
};

type ExtensionMessageType = 'connected' | 'fetched' | 'error';

export type ExtensionMessage = {
  id?: string;
  type: ExtensionMessageType;
  data?: Response | null;
  error?: string;
}
