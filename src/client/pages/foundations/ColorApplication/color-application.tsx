import { sentenceCase } from 'change-case'

import { Button, Flex, Grid, Section, Spacer, Text } from 'lib/components'
import { BOX_VARIANTS, BOX_INTENTS } from 'lib/components/core/base/Box/definitions'
import { COLORS } from 'lib/definitions'

export default () => {
  return (
    <>
      <Text typography="lead">
        Hues, intents and variants combined through Button components, illustrating the system's full color
        behavior in practice.
      </Text>
      <Spacer blockSize={50} />
      <Flex flexDirection="column" gap={50}>
        {BOX_VARIANTS.map(variant => {
          return (
            <Section key={variant} heading={`${sentenceCase(variant)} variant`}>
              <Grid gridTemplateColumns="repeat(6, 1fr)" gap={7}>
                {COLORS.map(color => {
                  return BOX_INTENTS.map(intent => {
                    return (
                      <Grid.Item key={`${color}_${intent}`}>
                        <Button color={color} variant={variant} intent={intent} fullWidth>
                          {intent} {color}
                        </Button>
                      </Grid.Item>
                    )
                  })
                })}
              </Grid>
            </Section>
          )
        })}
      </Flex>
    </>
  )
}
