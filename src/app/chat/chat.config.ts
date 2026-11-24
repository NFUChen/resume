export const CHAT_CONFIG = {
  endpoint: '__ENDPOINT__/v1/chat/completions',
  model: 'ag/gemini-3.8-flash-high',
  apiKey: '__API_KEY__',
  maxHistoryMessages: 10
} as const;