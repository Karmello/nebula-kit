import { NEB_LENGTH } from 'lib/constants'

import { Box } from '../Box'
import {
  DEFAULT_HORIZONTAL_RULE_INTENT,
  DEFAULT_HORIZONTAL_RULE_MARGIN_BLOCK,
  DEFAULT_HORIZONTAL_RULE_SURFACE_DEPTH,
} from './constants'
import { HorizontalRuleProps } from './types'

export const HorizontalRule = ({
  // Box
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_HORIZONTAL_RULE_INTENT,
  marginBlock = DEFAULT_HORIZONTAL_RULE_MARGIN_BLOCK,
  marginTop,
  marginBottom,
  surfaceDepth = DEFAULT_HORIZONTAL_RULE_SURFACE_DEPTH,
}: HorizontalRuleProps) => {
  return (
    <Box
      tag="hr"
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      drawable
      bgMode="filled"
      surfaceDepth={surfaceDepth}
      color={color}
      intent={intent}
      blockSize={NEB_LENGTH.px_002}
      borderWidth={NEB_LENGTH.px_000}
      marginBlock={marginBlock}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  )
}

HorizontalRule.displayName = 'HorizontalRule'
