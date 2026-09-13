export const CHAT_CONFIG = {
  endpoint: 'https://litellm.devcloudhub.org/v1/chat/completions',
  model: 'cf/@cf/zai-org/glm-4.7-flash',
  apiKey: '__LITELLM_API_KEY__',
  maxHistoryMessages: 10
} as const;