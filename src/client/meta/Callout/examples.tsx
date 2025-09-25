import { ComponentMeta } from 'client/definitions'
import { Callout, Spacer } from 'lib/components'
import { CalloutProps } from 'lib/components/feedback/Callout/definitions'

const CALLOUT_EXAMPLES_META: ComponentMeta<CalloutProps>['examples'] = [
  {
    description: 'Highlights neutral or contextual information for the user.',
    jsx: (
      <>
        <Callout content="Callout text content" />
        <Spacer blockSize={10} />
        <Callout content="Callout text content" variant="outline" />
      </>
    ),
  },

  {
    description: 'Indicates a positive outcome or confirmation.',
    jsx: (
      <>
        <Callout content="Callout text content" intent="success" />
        <Spacer blockSize={10} />
        <Callout content="Callout text content" variant="outline" intent="success" />
      </>
    ),
  },
  {
    description: 'Draws attention to a caution or potential issue.',
    jsx: (
      <>
        <Callout content="Callout text content" intent="warning" />
        <Spacer blockSize={10} />
        <Callout content="Callout text content" variant="outline" intent="warning" />
      </>
    ),
  },
  {
    description: 'Signals an error or critical problem that requires attention.',
    jsx: (
      <>
        <Callout content="Callout text content" intent="danger" />
        <Spacer blockSize={10} />
        <Callout content="Callout text content" variant="outline" intent="danger" />
      </>
    ),
  },
]

export { CALLOUT_EXAMPLES_META }
