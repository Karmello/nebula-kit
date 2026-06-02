import { useEffect, useRef, useState } from 'react'

import { Box, Flex, Segment, Spacer } from 'lib/components'
import { useAskAssistant } from 'client/api'

import { Chat, ContextMenu, Prompt, PromptToolbar } from './components'
import {
  CHAT_ASSISTANT_MAX_MESSAGES_SENT,
  CHAT_INTRO_TEXT,
  ChatHistory,
  PROMPT_MAX_HEIGHT_PX,
  PROMPT_MAX_LENGTH,
  PROMPT_ONGOING_REQUEST_TEXT,
} from './definitions'

export const ChatAssistant = () => {
  const [chatHistory, setChatHistory] = useState<ChatHistory>([{ role: 'assistant', content: CHAT_INTRO_TEXT }])
  const [prompt, setPrompt] = useState<string>('')

  const askAssistant = useAskAssistant()

  const chatScrollingAreaRef = useRef<HTMLDivElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const focusAnchorRef = useRef<HTMLDivElement | null>(null)

  const handleChange = (value: string) => {
    setPrompt(value)
    const ref = textareaRef.current
    ref.style.height = 'auto'
    ref.style.height = `${Math.min(ref.scrollHeight, PROMPT_MAX_HEIGHT_PX)}px`
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(prompt)
    }
  }

  const handleSubmit = async (prompt: string) => {
    if (!prompt) return
    setPrompt(PROMPT_ONGOING_REQUEST_TEXT)
    setChatHistory(state => [...state, { role: 'user', content: prompt }])
    textareaRef.current.style.height = 'auto'

    const messagesToSend = [
      ...chatHistory.slice(1).slice(-(CHAT_ASSISTANT_MAX_MESSAGES_SENT - 1)),
      { role: 'user', content: prompt },
    ]

    const res = await askAssistant.sendRequest({ messages: messagesToSend })

    setPrompt('')

    if (res.ok && res.data.answer) {
      setChatHistory(state => [...state, { role: 'assistant', content: res.data.answer }])
    } else {
      setChatHistory(state => state.slice(0, -1))
    }
  }

  const handleContextMenuChange = (value: string) => {
    if (value === 'new-chat') {
      setChatHistory([])
      setPrompt('')
      setTimeout(() => {
        setChatHistory([{ role: 'assistant', content: CHAT_INTRO_TEXT }])
      }, 500)
    }
  }

  const handleQuestionClick = (question: string) => {
    if (!askAssistant.isMakingRequest) {
      setPrompt(question)
      handleSubmit(question)
    }
  }

  useEffect(() => {
    if (chatHistory.length) {
      window.scrollTo(0, 0)
      chatScrollingAreaRef.current.scrollTop = chatScrollingAreaRef.current.scrollHeight
      focusAnchorRef.current.focus()
    }
  }, [chatHistory])

  return (
    <Box blockSize={{ base: 'calc(100vh - 165px)', lg: 'calc(100vh - 195px)' }}>
      <Flex justifyContent="flex-end">
        <ContextMenu onChange={handleContextMenuChange} disabled={askAssistant.isMakingRequest} />
      </Flex>
      <Spacer blockSize="sm" />
      <Segment tagAttrs={{ style: { blockSize: 'calc(100% - 50px)' } }} flexDirection="column">
        <Segment.Item flex="1" tagAttrs={{ style: { overflowY: 'hidden' } }}>
          <Chat tagRef={chatScrollingAreaRef} chatHistory={chatHistory} handleQuestionClick={handleQuestionClick} />
        </Segment.Item>
        <Segment.Item>
          <Prompt
            tagRef={textareaRef}
            tagAttrs={{
              style: {
                overflow: textareaRef.current?.scrollHeight > PROMPT_MAX_HEIGHT_PX ? 'visible' : 'hidden',
                outline: 'none',
                borderRadius: 0,
              },
              onKeyDown: handleKeyDown,
            }}
            value={prompt}
            onChange={handleChange}
            disabled={chatHistory.length === 0 || askAssistant.isMakingRequest}
            focusAnchorRef={focusAnchorRef}
          />
        </Segment.Item>
        <Segment.Item>
          <PromptToolbar
            loading={askAssistant.isMakingRequest}
            disabled={!prompt && !askAssistant.isMakingRequest}
            lengthStatus={`${prompt.length} / ${PROMPT_MAX_LENGTH}`}
            handleSend={() => handleSubmit(prompt)}
            handleCancel={() => {
              askAssistant.cancelRequest()
            }}
          />
        </Segment.Item>
      </Segment>
    </Box>
  )
}
