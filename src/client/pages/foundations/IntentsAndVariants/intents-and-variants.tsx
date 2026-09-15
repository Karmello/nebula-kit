import { Box, Button, HorizontalRule, MarkerList, NEB_LENGTH, Spacer, Text } from 'lib/components'
import { BOX_INTENTS } from 'lib/components/core/Box/constants'
import { BoxIntent } from 'lib/components/core/Box/types'

const INTENTS_INFO_MAP: Record<BoxIntent, string> = {
  neutral: 'surface without meaning, default tone',
  muted: 'calm, low-contrast tone used for understated surfaces or background accents',
  tertiary: 'subtle, lowest emphasis action',
  secondary: 'supporting action, less emphasis than primary',
  primary: 'main call-to-action or highlight',
  strong: 'heightened emphasis beyond primary, for critical or destructive actions',
}

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        Intents and variants available in the system, showing how semantic roles combine with visual
        styles across components.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_032} />
      <Box display="flex" flexDirection="column" rowGap={NEB_LENGTH.px_032}>
        <Box>
          <Text typography="h5" bold color="blue" intent="primary">
            Solid variant
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>Filled surface, strong emphasis.</Text>
          <Spacer blockSize={NEB_LENGTH.px_024} />
          <Box display="flex" flexWrap="wrap" gap={NEB_LENGTH.px_008}>
            {BOX_INTENTS.map(intent => {
              return (
                <Button key={intent} variant="solid" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Box>
        </Box>
        <Box>
          <Text typography="h5" bold color="blue" intent="primary">
            Outline variant
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>Border only, background matches the app's surface.</Text>
          <Spacer blockSize={NEB_LENGTH.px_024} />
          <Box display="flex" flexWrap="wrap" gap={NEB_LENGTH.px_008}>
            {BOX_INTENTS.map(intent => {
              return (
                <Button key={intent} variant="outline" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Box>
        </Box>
        <Box>
          <Text typography="h5" bold color="blue" intent="primary">
            Soft outline variant
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>Border only, background matches the app's surface, text matches the border.</Text>
          <Spacer blockSize={NEB_LENGTH.px_024} />
          <Box display="flex" flexWrap="wrap" gap={NEB_LENGTH.px_008}>
            {BOX_INTENTS.map(intent => {
              return (
                <Button key={intent} variant="soft-outline" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Box>
        </Box>
        <Box>
          <Text typography="h5" bold color="blue" intent="primary">
            Ghost variant
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>Text only, background and border match the app's surface.</Text>
          <Spacer blockSize={NEB_LENGTH.px_024} />
          <Box display="flex" flexWrap="wrap" gap={NEB_LENGTH.px_008}>
            {BOX_INTENTS.map(intent => {
              return (
                <Button key={intent} variant="ghost" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Box>
        </Box>
        <Box>
          <Text typography="h5" bold color="blue" intent="primary">
            Intents
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <MarkerList>
            {Object.keys(INTENTS_INFO_MAP).map(intent => (
              <MarkerList.Item key={intent}>
                <Text bold>{intent}</Text>
                <Text>&nbsp;- {INTENTS_INFO_MAP[intent as BoxIntent]}</Text>
              </MarkerList.Item>
            ))}
          </MarkerList>
        </Box>
      </Box>
    </Box>
  )
}
