import { useEffect, useRef, useState } from 'react'

import { Box, Flex, Icon, Segment, Spacer, Text, Tooltip } from 'lib/components'
import { useAskAssistant } from 'client/api'

import { CHAT_INTRO_TEXT, ChatHistory, PROMPT_MAX_HEIGHT_PX } from './definitions'
import { Chat, Prompt, SendButton, ContextMenu } from './components'

export const ChatAssistant = () => {
  const [chatHistory, setChatHistory] = useState<ChatHistory>([{ role: 'system', content: CHAT_INTRO_TEXT }])
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
    setPrompt('')
    setChatHistory(state => [...state, { role: 'user', content: prompt }])
    textareaRef.current.style.height = 'auto'
    const res = await askAssistant.sendRequest({ prompt: JSON.stringify([...chatHistory, { role: 'user', content: prompt }]) })
    if (res.ok && res.data.answer) {
      setChatHistory(state => [...state, { role: 'system', content: res.data.answer }])
    }
  }

  const handleContextMenuChange = (value: string) => {
    if (value === 'new-chat') {
      setChatHistory([])
      setPrompt('')
      setTimeout(() => {
        setChatHistory([{ role: 'system', content: CHAT_INTRO_TEXT }])
      }, 150)
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
      chatScrollingAreaRef.current.scrollTop = chatScrollingAreaRef.current.scrollHeight
      focusAnchorRef.current.focus()
    }
  }, [chatHistory])

  return (
    <Box blockSize={{ base: 'calc(100vh - 150px)', lg: 'calc(100vh - 175px)' }}>
      <Flex justifyContent="flex-end">
        <ContextMenu onChange={handleContextMenuChange} disabled={askAssistant.isMakingRequest} />
      </Flex>
      <Spacer blockSize="10px" />
      <Segment tagAttrs={{ style: { blockSize: 'calc(100% - 50px)' } }} flexDirection="column">
        <Segment.Item flex="1" tagAttrs={{ style: { overflowY: 'hidden' } }}>
          <Chat
            tagRef={chatScrollingAreaRef}
            chatHistory={chatHistory}
            isMakingRequest={askAssistant.isMakingRequest}
            handleQuestionClick={handleQuestionClick}
          />
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
          <Box drawable theme="flipped" variant="solid" intent="neutral" padding="6px">
            <Flex justifyContent="space-between" alignItems="flex-end">
              <Tooltip
                minInlineSize={300}
                maxInlineSize={300}
                content="ENTER sends | SHIFT + ENTER adds a new line | TAB returns to the prompt"
              >
                <Icon name="keyboard" size="17px" />
              </Tooltip>
              <SendButton
                loading={askAssistant.isMakingRequest}
                disabled={!prompt && !askAssistant.isMakingRequest}
                onClick={() => handleSubmit(prompt)}
              >
                Send
              </SendButton>
            </Flex>
          </Box>
        </Segment.Item>
      </Segment>
    </Box>
  )
}
