export type ChatHistory = Array<{ role: 'assistant' | 'user'; content: string }>

export const CHAT_ASSISTANT_MAX_MESSAGES_SENT = 2

export const CHAT_INTRO_TEXT = `**Hi, I'm Captain Nebula !**

I can help you understand NebulaKit system behavior, components and their props using the official NebulaKit documentation.

Try asking:

[How can you describe NebulaKit?](app://ask/How%20can%20you%20describe%20NebulaKit%3F)

[What are composition and inheritance used for?](app://ask/What%20are%20composition%20and%20inheritance%20used%20for%3F)

[How does NebulaKit render surfaces?](app://ask/How%20does%20NebulaKit%20render%20surfaces%3F)

[What are orthogonal styling axes?](app://ask/What%20are%20orthogonal%20styling%20axes%3F)

[How is responsiveness implemented?](app://ask/How%20is%20responsiveness%20implemented%3F)

---`

export const CHAT_LINE_HEIGHT = 1.7

export const PROMPT_PLACEHOLDER = 'Ask a question or refine the last answer ...'
export const PROMPT_ONGOING_REQUEST_TEXT = 'Captain Nebula is thinking ...'
export const PROMPT_DEFAULT_ROWS = 1
export const PROMPT_MAX_HEIGHT_PX = 295
export const PROMPT_MAX_LENGTH = 1000
