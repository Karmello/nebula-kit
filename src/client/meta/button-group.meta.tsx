import { ComponentMeta } from 'client/definitions'
import { ButtonGroup, Button } from 'lib/components'

import {
  BUTTON_GROUP_INHERITED_PROPS,
  ButtonGroupElem,
  ButtonGroupOwnProps,
} from 'lib/components/controls/ButtonGroup/definitions'

const BUTTON_GROUP_META: ComponentMeta<ButtonGroupOwnProps> = {
  overview: {
    description: '...',
    role: ['...'],
    behavior: ['...'],
    byDefault: ['...'],
    examplesOfUse: ['...'],
    composedOf: BUTTON_GROUP_INHERITED_PROPS,
    rendersAs: ButtonGroupElem,
  },
  ownProps: [
    {
      name: 'attached',
      options: [],
      isRequired: false,
      isResponsive: false,
      description: '...',
    },
  ],
  examples: [
    {
      description: '...',
      jsx: (
        <ButtonGroup intent="primary" gap={3} size="lg" attached>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: '...',
      jsx: (
        <ButtonGroup intent="primary" alignItems="stretch" attached>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: '...',
      jsx: (
        <ButtonGroup intent="primary" flexDirection="column" attached>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: '...',
      jsx: (
        <ButtonGroup variant="outline" intent="primary" flexDirection="column" alignItems="stretch">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
  ],
}

export default {
  ButtonGroup: BUTTON_GROUP_META,
}
