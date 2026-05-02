import { RefObject } from 'react'

import { Box, Flex } from 'lib/components'

import { ChatHistory } from '../../definitions'
import { AssistantMessage, UserMessage } from './components'

type ChatProps = {
  tagRef: RefObject<HTMLDivElement>
  chatHistory: ChatHistory
  handleQuestionClick: (question: string) => void
}

export const Chat = ({ tagRef, chatHistory, handleQuestionClick }: ChatProps) => {
  return (
    <Box tagRef={tagRef} drawable variant="outline" intent="muted" blockSize="100%" overflowY="hidden" borderBottomWidth="0px">
      <Box margin="20px" overflowX="auto">
        <Flex flexDirection="column" rowGap="30px">
          {chatHistory.map(({ role, content }, key) =>
            role === 'assistant' ? (
              <AssistantMessage key={key} content={content} handleQuestionClick={handleQuestionClick} />
            ) : (
              <UserMessage key={key} content={content} />
            )
          )}
        </Flex>
      </Box>
    </Box>
  )
}
