export type ChatHistory = Array<{ role: 'system' | 'user'; content: string }>

export const CHAT_INTRO_TEXT = `Hi, I'm Captain Nebula.

I can help you understand NebulaKit system behavior, components and their props using the official NebulaKit documentation.

Try asking:
• What is special about NebulaKit ?
• How does drawing mechanism work ?
• How is responsiveness implemented ?
`

export const CHAT_ONGOING_REQUEST_TEXT = 'Captain Nebula is thinking ...'
export const CHAT_LINE_HEIGHT = 1.7

export const PROMPT_PLACEHOLDER = 'Ask me anything ...'
export const PROMPT_DEFAULT_ROWS = 3
export const PROMPT_MAX_HEIGHT_PX = 295
