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
    <Box
      tagRef={tagRef}
      drawable
      variant="outline"
      intent="muted"
      padding="20px"
      blockSize="100%"
      overflowY="auto"
      borderBottomWidth="0px"
    >
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
  )
}
