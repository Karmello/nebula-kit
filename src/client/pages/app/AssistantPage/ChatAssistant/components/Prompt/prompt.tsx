import { RefObject } from 'react'

import { Box, Textarea, TextareaProps } from 'lib/components'

import { PROMPT_DEFAULT_ROWS, PROMPT_MAX_LENGTH, PROMPT_PLACEHOLDER } from '../../definitions'

export const Prompt = (props: TextareaProps & { focusAnchorRef: RefObject<HTMLDivElement> }) => {
  return (
    <>
      <Box tagRef={props.focusAnchorRef} tagAttrs={{ tabIndex: -1 }} />
      <Textarea
        rows={PROMPT_DEFAULT_ROWS}
        resize="none"
        maxLength={PROMPT_MAX_LENGTH}
        placeholder={PROMPT_PLACEHOLDER}
        intent="tertiary"
        variant="solid"
        {...props}
      />
    </>
  )
}
