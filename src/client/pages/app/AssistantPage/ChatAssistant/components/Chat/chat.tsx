import { RefObject } from 'react'

import { Box, NEB_LENGTH } from 'lib/components'

import { ChatHistory } from '../../definitions'
import { AssistantMessage, UserMessage } from './components'

type ChatProps = {
  elemRef: RefObject<HTMLDivElement>
  chatHistory: ChatHistory
  handleQuestionClick: (question: string) => void
}

export const Chat = ({ elemRef, chatHistory, handleQuestionClick }: ChatProps) => {
  return (
    <Box
      elemRef={elemRef}
      drawable
      borderMode="filled"
      intent="muted"
      blockSize="100%"
      overflowY="auto"
      padding={NEB_LENGTH.px_024}
      borderBottomWidth={NEB_LENGTH.px_000}
      borderBottomLeftRadius={NEB_LENGTH.px_000}
      borderBottomRightRadius={NEB_LENGTH.px_000}
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
