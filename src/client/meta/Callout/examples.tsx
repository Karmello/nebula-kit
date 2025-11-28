import { ComponentMeta } from 'client/definitions'
import { Callout, Spacer } from 'lib/components'
import { CalloutProps } from 'lib/components/core/feedback/Callout/definitions'

const CALLOUT_EXAMPLES_META: ComponentMeta<CalloutProps>['examples'] = [
  {
    description: 'Highlights neutral or contextual information for the user.',
    jsx: (
      <>
        <Callout content="Callout text content" />
        <Spacer blockSize={20} />
        <Callout content="Callout text content" variant="outline" />
        <Spacer blockSize={20} />
        <Callout content="Callout text content" variant="soft-outline" />
      </>
    ),
  },

  {
    description: 'Indicates a positive outcome or confirmation.',
    jsx: (
      <>
        <Callout content="Callout text content" status="success" />
        <Spacer blockSize={20} />
        <Callout content="Callout text content" variant="outline" status="success" />
        <Spacer blockSize={20} />
        <Callout content="Callout text content" variant="soft-outline" status="success" />
      </>
    ),
  },
  {
    description: 'Draws attention to a caution or potential issue.',
    jsx: (
      <>
        <Callout content="Callout text content" status="warning" />
        <Spacer blockSize={20} />
        <Callout content="Callout text content" variant="outline" status="warning" />
        <Spacer blockSize={20} />
        <Callout content="Callout text content" variant="soft-outline" status="warning" />
      </>
    ),
  },
  {
    description: 'Signals an error or critical problem that requires attention.',
    jsx: (
      <>
        <Callout content="Callout text content" status="error" />
        <Spacer blockSize={20} />
        <Callout content="Callout text content" variant="outline" status="error" />
        <Spacer blockSize={20} />
        <Callout content="Callout text content" variant="soft-outline" status="error" />
      </>
    ),
  },
]

export { CALLOUT_EXAMPLES_META }
