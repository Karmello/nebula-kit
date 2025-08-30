import { sentenceCase } from 'change-case'

import { Section, Button, Stack } from 'lib/components'
import { BoxIntent, BoxVariant } from 'lib/definitions'

export const ButtonPlayground = () => {
  return Object.values(BoxVariant).map(variant => (
    <Section key={variant} heading={sentenceCase(variant)} mt={10}>
      <Stack wrap="wrap" gap={5}>
        {Object.values(BoxIntent).map(intent => (
          <Button key={intent} variant={variant} intent={intent}>
            {sentenceCase(intent)}
          </Button>
        ))}
      </Stack>
    </Section>
  ))
}
