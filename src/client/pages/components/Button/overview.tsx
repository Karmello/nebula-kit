import { sentenceCase } from 'change-case'

import { Text, Section, Stack, Button, Spacer } from 'lib/components'
import { BoxIntent, BoxVariant } from 'lib/definitions'

import data from 'client/meta/button.meta'

export default () => {
  return (
    <>
      <Text typography="lead">{data.description}</Text>
      <Spacer size={20} />
      {Object.values(BoxVariant).map(variant => (
        <Section key={variant} heading={sentenceCase(variant)} marginTop={10}>
          <Stack flexWrap="wrap" gap={5}>
            {Object.values(BoxIntent).map(intent => (
              <Button key={intent} variant={variant} intent={intent}>
                {sentenceCase(intent)}
              </Button>
            ))}
          </Stack>
        </Section>
      ))}
    </>
  )
}
