import { Textarea, TextareaProps } from 'lib/components'

import { PROMPT_DEFAULT_ROWS, PROMPT_PLACEHOLDER } from '../../definitions'

export const Prompt = (props: TextareaProps) => {
  return (
    <Textarea
      rows={PROMPT_DEFAULT_ROWS}
      resize="none"
      placeholder={PROMPT_PLACEHOLDER}
      intent="muted"
      variant="solid"
      {...props}
    />
  )
}
