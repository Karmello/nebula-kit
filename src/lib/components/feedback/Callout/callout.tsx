import { Box, Spacer, Text } from 'lib/components'

import {
  CalloutProps,
  CALLOUT_CONFIG,
  DEFAULT_CALLOUT_VARIANT,
  DEFAULT_CALLOUT_INTENT,
  CalloutElem,
} from './definitions'

export const Callout = <E extends CalloutElem = 'div'>({
  elem,
  elemProps,
  elemRef,
  // own
  content,
  heading,
  // Box
  variant = DEFAULT_CALLOUT_VARIANT,
  intent = DEFAULT_CALLOUT_INTENT,
  borderRadius,
  ...paddings
}: CalloutProps<E>) => {
  return (
    <Box
      elem={elem}
      elemProps={elemProps}
      elemRef={elemRef}
      variant={variant}
      intent={intent}
      borderRadius={borderRadius}
      padding={10}
      {...paddings}
    >
      <Text intent="neutral" typography="h5" iconName={CALLOUT_CONFIG[intent].iconName}>
        {heading || CALLOUT_CONFIG[intent].heading}
      </Text>
      <Spacer blockSize={5} />
      <Text intent="neutral">{content}</Text>
    </Box>
  )
}

Callout.displayName = 'Callout'
