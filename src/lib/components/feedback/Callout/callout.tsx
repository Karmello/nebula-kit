import { Box, Spacer, Text } from 'lib/components'
import { CalloutElem, DEFAULT_CALLOUT_INTENT, DEFAULT_CALLOUT_VARIANT } from 'lib/definitions'

import { CalloutProps, CALLOUT_CONFIG } from './definitions'

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
      <Text typography="h5" iconName={CALLOUT_CONFIG[intent].iconName}>
        {heading || CALLOUT_CONFIG[intent].heading}
      </Text>
      <Spacer size={5} />
      <Text>{content}</Text>
    </Box>
  )
}
