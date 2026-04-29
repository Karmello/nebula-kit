import { RefObject } from 'react'

import { Box, Flex, Text } from 'lib/components'

import { ChatHistory, CHAT_INTRO_TEXT, CHAT_ONGOING_REQUEST_TEXT } from '../../definitions'
import { SystemMessage, UserMessage } from './components'

type ChatProps = {
  tagRef: RefObject<HTMLDivElement>
  chatHistory: ChatHistory
  isMakingRequest: boolean
}

export const Chat = ({ tagRef, chatHistory, isMakingRequest }: ChatProps) => {
  return (
    <Box tagRef={tagRef} drawable variant="outline" intent="muted" padding="20px" blockSize="100%" overflowY="auto">
      <Flex flexDirection="column" rowGap="30px">
        {chatHistory.map(({ role, content }, key) =>
          role === 'system' ? <SystemMessage key={key} content={content} /> : <UserMessage key={key} content={content} />
        )}
        {!chatHistory.length ? <Text tagAttrs={{ style: { whiteSpace: 'pre-line' } }}>{CHAT_INTRO_TEXT}</Text> : null}
        {isMakingRequest ? (
          <Text color="blue" intent="primary">
            {CHAT_ONGOING_REQUEST_TEXT}
          </Text>
        ) : null}
      </Flex>
    </Box>
  )
}
