export const CHAT_CONFIG = {
  endpoint: 'https://litellm.devcloudhub.org/v1/chat/completions',
  model: 'ag/gemini-3.8-flash-high',
  apiKey: '__LITELLM_API_KEY__',
  maxHistoryMessages: 10
} as const;