export type ChatHistory = Array<{ role: 'system' | 'user'; content: string }>

export const CHAT_ONGOING_REQUEST_TEXT = 'Captain Nebula is thinking ...'
export const CHAT_LINE_HEIGHT = 1.7

export const PROMPT_PLACEHOLDER = 'Ask me anything ...'
export const PROMPT_DEFAULT_ROWS = 1
export const PROMPT_MAX_HEIGHT_PX = 295

export const CHAT_INTRO_TEXT = `**Hi, I'm Captain Nebula !**

I can help you understand NebulaKit system behavior, components and their props using the official NebulaKit documentation.

Try asking:

[How can you describe NebulaKit?](app://ask/How%20can%20you%20describe%20NebulaKit%3F)

[How does drawing mechanism work?](app://ask/How%20does%20drawing%20mechanism%20work%3F)

[How is responsiveness implemented?](app://ask/How%20is%20responsiveness%20implemented%3F)

[How are composition and inheritance used?](app://ask/How%20are%20composition%20and%20inheritance%20used%3F)

[What are orthogonal axes?](app://ask/What%20are%20orthogonal%20axes%3F)`
