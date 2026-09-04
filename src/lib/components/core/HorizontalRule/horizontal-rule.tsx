import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'

import { Box } from '../Box'
import {
  DEFAULT_HORIZONTAL_RULE_INTENT,
  DEFAULT_HORIZONTAL_RULE_MARGIN_BLOCK,
  DEFAULT_HORIZONTAL_RULE_SURFACE_DEPTH,
} from './constants'
import { HorizontalRuleProps } from './types'

import './horizontal-rule.scss'

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
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('horizontal-rule'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      drawable
      bgMode="filled"
      color={color}
      intent={intent}
      surfaceDepth={surfaceDepth}
      borderRole="edge"
      blockSize="2px"
      borderWidth="0px"
      marginBlock={marginBlock}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  )
}

HorizontalRule.displayName = 'HorizontalRule'
