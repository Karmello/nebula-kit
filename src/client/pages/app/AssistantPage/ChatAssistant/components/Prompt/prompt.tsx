import { RefObject } from 'react'

import { Box, Textarea, TextareaProps } from 'lib/components'

import { PROMPT_DEFAULT_ROWS, PROMPT_PLACEHOLDER } from '../../definitions'

export const Prompt = (props: TextareaProps & { focusAnchorRef: RefObject<HTMLDivElement> }) => {
  return (
    <Box theme="flipped">
      <Box tagRef={props.focusAnchorRef} tagAttrs={{ tabIndex: -1 }} />
      <Textarea
        rows={PROMPT_DEFAULT_ROWS}
        resize="none"
        placeholder={PROMPT_PLACEHOLDER}
        intent="neutral"
        variant="solid"
        {...props}
      />
    </Box>
  )
}
