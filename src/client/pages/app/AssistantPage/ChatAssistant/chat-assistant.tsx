import { useEffect, useRef, useState } from 'react'

import { Box, Segment } from 'lib/components'
import { useAskAssistant } from 'client/api'

import { ChatHistory, PROMPT_MAX_HEIGHT_PX } from './definitions'
import { Chat, Prompt, SendButton } from './components'

export const ChatAssistant = () => {
  const [chatHistory, setChatHistory] = useState<ChatHistory>([])
  const [prompt, setPrompt] = useState<string>('')

  const askAssistant = useAskAssistant()

  const chatScrollingAreaRef = useRef<HTMLDivElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleChange = (value: string) => {
    setPrompt(value)
    const ref = textareaRef.current
    ref.style.height = 'auto'
    ref.style.height = `${Math.min(ref.scrollHeight, PROMPT_MAX_HEIGHT_PX)}px`
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    setPrompt('')
    setChatHistory(state => [...state, { role: 'user', content: prompt }])
    const res = await askAssistant.sendRequest({ prompt: JSON.stringify([...chatHistory, { role: 'user', content: prompt }]) })
    if (res.ok && res.data.answer) {
      setChatHistory(state => [...state, { role: 'system', content: res.data.answer }])
    }
  }

  useEffect(() => {
    chatScrollingAreaRef.current.scrollTop = chatScrollingAreaRef.current.scrollHeight
    textareaRef.current.focus()
  }, [chatHistory])

  return (
    <Box blockSize={{ base: 'calc(100vh - 150px)', lg: 'calc(100vh - 175px)' }}>
      <Segment tagAttrs={{ style: { blockSize: '100%' } }} flexDirection="column">
        <Segment.Item flex="1" tagAttrs={{ style: { overflowY: 'hidden' } }}>
          <Chat tagRef={chatScrollingAreaRef} chatHistory={chatHistory} isMakingRequest={askAssistant.isMakingRequest} />
        </Segment.Item>
        <Segment.Item>
          <Prompt
            tagRef={textareaRef}
            tagAttrs={{
              style: {
                overflow: textareaRef.current?.scrollHeight > PROMPT_MAX_HEIGHT_PX ? 'visible' : 'hidden',
                outline: 'none',
              },
              onKeyDown: handleKeyDown,
            }}
            value={prompt}
            onChange={handleChange}
            disabled={askAssistant.isMakingRequest}
          />
        </Segment.Item>
        <Segment.Item>
          <SendButton
            loading={askAssistant.isMakingRequest}
            disabled={!prompt && !askAssistant.isMakingRequest}
            onClick={handleSubmit}
          >
            Send
          </SendButton>
        </Segment.Item>
      </Segment>
    </Box>
  )
}
