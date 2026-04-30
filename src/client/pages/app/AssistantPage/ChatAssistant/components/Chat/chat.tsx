import { RefObject } from 'react'

import { Box, Flex, Text } from 'lib/components'

import { ChatHistory, CHAT_ONGOING_REQUEST_TEXT } from '../../definitions'
import { SystemMessage, UserMessage } from './components'

type ChatProps = {
  tagRef: RefObject<HTMLDivElement>
  chatHistory: ChatHistory
  isMakingRequest: boolean
  handleQuestionClick: (question: string) => void
}

export const Chat = ({ tagRef, chatHistory, isMakingRequest, handleQuestionClick }: ChatProps) => {
  return (
    <Box tagRef={tagRef} drawable variant="outline" intent="muted" color="blue" padding="20px" blockSize="100%" overflowY="auto">
      <Flex flexDirection="column" rowGap="30px">
        {chatHistory.map(({ role, content }, key) =>
          role === 'system' ? (
            <SystemMessage key={key} content={content} handleQuestionClick={handleQuestionClick} />
          ) : (
            <UserMessage key={key} content={content} />
          )
        )}
        {isMakingRequest ? (
          <Text color="blue" intent="primary">
            {CHAT_ONGOING_REQUEST_TEXT}
          </Text>
        ) : null}
      </Flex>
    </Box>
  )
}
