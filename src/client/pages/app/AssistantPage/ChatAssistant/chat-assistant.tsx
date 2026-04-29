import { useEffect, useRef, useState } from 'react'

import { Box, Flex, Segment, Spacer } from 'lib/components'
import { useAskAssistant } from 'client/api'

import { ChatHistory, PROMPT_MAX_HEIGHT_PX } from './definitions'
import { Chat, Prompt, SendButton, ContextMenu } from './components'

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

  const handleContextMenuChange = (value: string) => {
    if (value === 'new-chat') {
      setChatHistory([])
      setPrompt('')
    }
  }

  useEffect(() => {
    chatScrollingAreaRef.current.scrollTop = chatScrollingAreaRef.current.scrollHeight
    textareaRef.current.focus()
  }, [chatHistory])

  return (
    <Box blockSize={{ base: 'calc(100vh - 150px)', lg: 'calc(100vh - 175px)' }}>
      <Flex justifyContent="flex-end">
        <ContextMenu onChange={handleContextMenuChange} disabled={askAssistant.isMakingRequest} />
      </Flex>
      <Spacer blockSize="10px" />
      <Segment tagAttrs={{ style: { blockSize: 'calc(100% - 50px)' } }} flexDirection="column">
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
