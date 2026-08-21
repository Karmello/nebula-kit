import { RefObject } from 'react'

import { Box, NEB_LENGTH } from 'lib/components'

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
      blockSize="100%"
      overflowY="auto"
      padding={NEB_LENGTH.px_024}
      borderBottomWidth={NEB_LENGTH.px_000}
    >
      <Box display="flex" flexDirection="column" rowGap={NEB_LENGTH.px_048}>
        {chatHistory.map(({ role, content }, key) =>
          role === 'assistant' ? (
            <AssistantMessage
              key={key}
              content={content}
              handleQuestionClick={handleQuestionClick}
            />
          ) : (
            <UserMessage key={key} content={content} />
          )
        )}
      </Box>
    </Box>
  )
}
