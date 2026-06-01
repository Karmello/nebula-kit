import { ComponentMeta } from 'client/definitions'

import { CalloutProps } from '../definitions'
import { Callout } from '../callout'
import { Spacer } from '../../Spacer/spacer'

const CALLOUT_EXAMPLES_META: ComponentMeta<CalloutProps>['examples'] = [
  {
    jsx: <Callout status="info" content="Callout text content" />,
    skip: true,
  },
  {
    description: 'Highlights neutral or contextual information for the user.',
    jsx: (
      <>
        <Callout content="Callout text content" />
        <Spacer blockSize="md" />
        <Callout content="Callout text content" variant="outline" />
        <Spacer blockSize="md" />
        <Callout content="Callout text content" variant="soft-outline" />
      </>
    ),
  },
  {
    description: 'Indicates a positive outcome or confirmation.',
    jsx: (
      <>
        <Callout content="Callout text content" status="success" />
        <Spacer blockSize="md" />
        <Callout content="Callout text content" variant="outline" status="success" />
        <Spacer blockSize="md" />
        <Callout content="Callout text content" variant="soft-outline" status="success" />
      </>
    ),
  },
  {
    description: 'Draws attention to a caution or potential issue.',
    jsx: (
      <>
        <Callout content="Callout text content" status="warning" />
        <Spacer blockSize="md" />
        <Callout content="Callout text content" variant="outline" status="warning" />
        <Spacer blockSize="md" />
        <Callout content="Callout text content" variant="soft-outline" status="warning" />
      </>
    ),
  },
  {
    description: 'Signals an error or critical problem that requires attention.',
    jsx: (
      <>
        <Callout content="Callout text content" status="error" />
        <Spacer blockSize="md" />
        <Callout content="Callout text content" variant="outline" status="error" />
        <Spacer blockSize="md" />
        <Callout content="Callout text content" variant="soft-outline" status="error" />
      </>
    ),
  },
]

export { CALLOUT_EXAMPLES_META }
