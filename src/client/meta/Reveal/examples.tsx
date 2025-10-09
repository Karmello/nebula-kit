import { ComponentMeta } from 'client/definitions'
import { Reveal, RevealProps } from 'lib/components'

const REVEAL_EXAMPLES_META: ComponentMeta<RevealProps>['examples'] = [
  {
    description: 'Default reveal with a label and content provided.',
    jsx: <Reveal label="Label">Content</Reveal>,
  },
  {
    description: 'Reveal with a centered label and secondary intent applied.',
    jsx: (
      <Reveal label="Label" intent="secondary" contentAlign="center">
        Content
      </Reveal>
    ),
  },
  {
    description: 'Disabled state of the Reveal.',
    jsx: (
      <Reveal label="Label" intent="secondary" contentAlign="center" disabled>
        Content
      </Reveal>
    ),
  },
]

export { REVEAL_EXAMPLES_META }
