import { Spacer } from 'lib/components/core/Spacer'
import { Text } from 'lib/components/core/Text'
import { Title } from 'lib/components/core/Title'

import { Box } from '../Box'
import {
  CALLOUT_CONFIG,
  CALLOUT_SCALE_CONFIG,
  CALLOUT_VARIANT_MAP,
  DEFAULT_CALLOUT_INTENT,
  DEFAULT_CALLOUT_SCALE,
  DEFAULT_CALLOUT_STATUS,
  DEFAULT_CALLOUT_VARIANT,
} from './constants'
import { CalloutProps, CalloutTag } from './types'

export const Callout = <T extends CalloutTag = 'div'>({
  // Box
  elemTag,
  elemAttrs,
  elemRef,
  scale = DEFAULT_CALLOUT_SCALE,
  variant = DEFAULT_CALLOUT_VARIANT,
  intent = DEFAULT_CALLOUT_INTENT,
  // own
  content,
  heading,
  status = DEFAULT_CALLOUT_STATUS,
}: CalloutProps<T>) => {
  return (
    <Box
      elemTag={elemTag}
      elemAttrs={elemAttrs}
      elemRef={elemRef}
      drawable
      bgMode={CALLOUT_VARIANT_MAP[variant].bgMode}
      borderMode={CALLOUT_VARIANT_MAP[variant].borderMode}
      textMode={CALLOUT_VARIANT_MAP[variant].textMode}
      color={CALLOUT_CONFIG[status || 'info'].color}
      intent={intent}
      borderRadius="var(--neb-border-radius)"
      padding={CALLOUT_SCALE_CONFIG[scale].padding}
    >
      <Title
        typography={CALLOUT_SCALE_CONFIG[scale].textTypography as any}
        iconName={CALLOUT_CONFIG[status || 'info'].iconName}
      >
        <Text typography={CALLOUT_SCALE_CONFIG[scale].textTypography}>
          {heading || CALLOUT_CONFIG[status || 'info'].heading}
        </Text>
      </Title>
      {content ? (
        <>
          <Spacer blockSize={CALLOUT_SCALE_CONFIG[scale].spacerBlockSize} />
          <Text fontSize={CALLOUT_SCALE_CONFIG[scale].contentFontSize}>{content}</Text>
        </>
      ) : null}
    </Box>
  )
}

Callout.displayName = 'Callout'
