import { ComponentMeta } from 'client/definitions'

import { MarkerList } from '../../../core/MarkerList'
import { type MarkupProps } from '../definitions'
import { Markup } from '../markup'
import { Text } from '../../../core/Text'

const MARKUP_EXAMPLES_META: ComponentMeta<MarkupProps>['examples'] = [
  {
    description: 'Basic inline formatting.',
    jsx: (
      <Markup>
        <Text>This text contains **bold**, _italic_ and `inline code`.</Text>
      </Markup>
    ),
  },
  {
    description: 'Multiple Text blocks.',
    jsx: (
      <Markup>
        <Text typography="h5">**Markup heading**</Text>
        <Text>_Markup paragraph_</Text>
      </Markup>
    ),
  },
  {
    description: 'Text nested inside Text.',
    jsx: (
      <Markup>
        <Text>
          This paragraph contains nested
          <Text tag="span" color="blue" intent="primary" space="both">
            `inline`
          </Text>
          formatting inside another Text component.
        </Text>
      </Markup>
    ),
  },
  {
    description: 'MarkerList example.',
    jsx: (
      <Markup>
        <MarkerList>
          <MarkerList.Item>
            <Text>Text wrapped with `Markup` can interpret inline formatting markers.</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Double asterisks render **bold text** inside the existing Text component.</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Underscores render _italic text_ without manually nesting Text spans.</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Backticks render `inline code` for short technical values.</Text>
          </MarkerList.Item>
        </MarkerList>
      </Markup>
    ),
  },
]

export { MARKUP_EXAMPLES_META }
