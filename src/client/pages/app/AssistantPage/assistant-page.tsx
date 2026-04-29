import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { Box, Button, Flex, Section, Text, Textarea } from 'lib/components'
import { useAskAssistant } from 'client/api'

const MAX_HEIGHT_PX = 295

export const AssistantPage = () => {
  const [chatHistory, setChatHistory] = useState<Array<{ role: 'assistant' | 'user'; content: string }>>([])
  const [prompt, setPrompt] = useState<string>('')

  const askAssistant = useAskAssistant()

  const chatScrollingAreaRef = useRef<HTMLDivElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleChange = (value: string) => {
    setPrompt(value)
    const ref = textareaRef.current
    ref.style.height = 'auto'
    ref.style.height = `${Math.min(ref.scrollHeight, MAX_HEIGHT_PX)}px`
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
      setChatHistory(state => [...state, { role: 'assistant', content: res.data.answer }])
    }
  }

  useEffect(() => {
    chatScrollingAreaRef.current.scrollTop = chatScrollingAreaRef.current.scrollHeight
  }, [chatHistory])

  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }} maxInlineSize="75rem">
      <Section heading="Assistant" iconName="sparkles">
        <Box blockSize={{ base: 'calc(100vh - 150px)', lg: 'calc(100vh - 175px)' }}>
          <Flex tagAttrs={{ style: { blockSize: '100%' } }} flexDirection="column" alignItems="stretch" rowGap="10px">
            <Flex.Item flex="1" tagAttrs={{ style: { overflowY: 'hidden' } }}>
              <Box
                tagRef={chatScrollingAreaRef}
                drawable
                theme="dark"
                variant="solid"
                intent="muted"
                padding="20px"
                blockSize="100%"
                overflowY="auto"
              >
                <Flex flexDirection="column" rowGap="10px">
                  {chatHistory.map(({ role, content }, key) =>
                    role === 'user' ? <Text key={key}>{content}</Text> : <ReactMarkdown key={key}>{content}</ReactMarkdown>
                  )}
                </Flex>
              </Box>
            </Flex.Item>
            <Textarea
              tagRef={textareaRef}
              tagAttrs={{
                style: {
                  overflow: textareaRef.current?.scrollHeight > MAX_HEIGHT_PX ? 'visible' : 'hidden',
                  outline: 'none',
                },
                onKeyDown: handleKeyDown,
              }}
              rows={2}
              resize="none"
              value={prompt}
              onChange={handleChange}
              placeholder="Ask NebulaKit anything ..."
              disabled={askAssistant.isMakingRequest}
              intent="tertiary"
            />
            <Flex.Item alignSelf="flex-end">
              <Button
                intent="primary"
                color="blue"
                iconName="send-horizontal"
                iconPlacement="right"
                size="sm"
                loading={askAssistant.isMakingRequest}
                disabled={!prompt && !askAssistant.isMakingRequest}
                onClick={handleSubmit}
              >
                Send
              </Button>
            </Flex.Item>
          </Flex>
        </Box>
      </Section>
    </Box>
  )
}
