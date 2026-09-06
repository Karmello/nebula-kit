import { Box, BoxProps, BoxSurfaceDepth } from 'lib/components/core/Box'
import { Spacer } from 'lib/components/core/Spacer'
import { Text } from 'lib/components/core/Text'
import { NEB_LENGTH } from 'lib/constants'

const Surface = ({
  mode,
  intent,
  surfaceDepth,
}: { mode: 'tinted' | 'filled' } & Pick<BoxProps, 'intent' | 'surfaceDepth'>) => {
  return (
    <Box brand="blue">
      <Text>{intent}</Text>
      <Spacer blockSize={NEB_LENGTH.px_004} />
      <Box
        tagAttrs={{
          style: { backgroundClip: 'padding-box' },
        }}
        drawable
        intent={intent}
        borderMode={mode}
        borderRole="edge"
        surfaceDepth={surfaceDepth}
        display="flex"
        flexDirection="row"
        overflow="hidden"
      >
        <Box
          drawable
          surfaceDepth={surfaceDepth}
          bgMode={mode}
          intent={intent}
          padding={NEB_LENGTH.px_024}
          borderRadius={NEB_LENGTH.px_000}
        />
        <Box
          tagAttrs={{
            style: { backgroundClip: 'padding-box' },
          }}
          drawable
          surfaceDepth={surfaceDepth}
          bgMode={mode}
          borderMode={mode}
          borderRole="divider"
          intent={intent}
          padding={NEB_LENGTH.px_024}
          borderRadius={NEB_LENGTH.px_000}
          borderTopWidth={NEB_LENGTH.px_000}
          borderBottomWidth={NEB_LENGTH.px_000}
        />
        <Box
          drawable
          surfaceDepth={surfaceDepth}
          bgMode={mode}
          intent={intent}
          padding={NEB_LENGTH.px_024}
          borderRadius={NEB_LENGTH.px_000}
        />
      </Box>
    </Box>
  )
}

export const JoinedActionGroup = () => {
  const surfaceDepth: BoxSurfaceDepth = 'base'

  return (
    <>
      <Text tag="span">Surface depth: </Text>
      <Text tag="span" bold>
        {surfaceDepth}
      </Text>
      <Spacer />
      <Box display="inline-flex" flexDirection="row" gap={NEB_LENGTH.px_048}>
        <Box display="inline-flex" flexDirection="column" gap={NEB_LENGTH.px_016}>
          <Text bold>Filled</Text>
          <Surface mode="filled" intent="neutral" surfaceDepth={surfaceDepth} />
          <Surface mode="filled" intent="muted" surfaceDepth={surfaceDepth} />
          <Surface mode="filled" intent="tertiary" surfaceDepth={surfaceDepth} />
          <Surface mode="filled" intent="secondary" surfaceDepth={surfaceDepth} />
          <Surface mode="filled" intent="primary" surfaceDepth={surfaceDepth} />
          <Surface mode="filled" intent="strong" surfaceDepth={surfaceDepth} />
        </Box>
        <Box display="inline-flex" flexDirection="column" gap={NEB_LENGTH.px_016}>
          <Text bold>Tinted</Text>
          <Surface mode="tinted" intent="neutral" surfaceDepth={surfaceDepth} />
          <Surface mode="tinted" intent="muted" surfaceDepth={surfaceDepth} />
          <Surface mode="tinted" intent="tertiary" surfaceDepth={surfaceDepth} />
          <Surface mode="tinted" intent="secondary" surfaceDepth={surfaceDepth} />
          <Surface mode="tinted" intent="primary" surfaceDepth={surfaceDepth} />
          <Surface mode="tinted" intent="strong" surfaceDepth={surfaceDepth} />
        </Box>
      </Box>
    </>
  )
}
