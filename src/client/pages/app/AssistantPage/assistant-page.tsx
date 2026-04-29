import { useRef, useState } from 'react'

import { Box, Button, Flex, Section, Textarea } from 'lib/components'

const MAX_HEIGHT_PX = 295

export const AssistantPage = () => {
  const [sending, setSending] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleChange = (value: string) => {
    setValue(value)
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

  const handleSubmit = () => {
    setSending(true)
  }

  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }} maxInlineSize="75rem">
      <Section heading="Assistant" iconName="sparkles">
        <Box blockSize={{ base: 'calc(100vh - 150px)', lg: 'calc(100vh - 175px)' }}>
          <Flex tagAttrs={{ style: { blockSize: '100%' } }} flexDirection="column" alignItems="stretch" rowGap="10px">
            <Flex.Item flex="1">
              <Box drawable theme="dark" variant="solid" intent="muted" padding="20px" blockSize="100%">
                ...
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
              value={value}
              onChange={handleChange}
              placeholder="Ask NebulaKit anything ..."
              disabled={sending}
              intent="tertiary"
            />
            <Flex.Item alignSelf="flex-end">
              <Button
                intent="primary"
                color="blue"
                iconName="send-horizontal"
                iconPlacement="right"
                size="sm"
                loading={sending}
                disabled={!value}
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
