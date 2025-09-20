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
        <ButtonGroup direction="row">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: '...',
      jsx: (
        <ButtonGroup direction="row" stretch>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: '...',
      jsx: (
        <ButtonGroup intent="secondary" direction="column">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: '...',
      jsx: (
        <ButtonGroup intent="secondary" direction="column" stretch>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: '...',
      jsx: (
        <ButtonGroup intent="primary" direction="row" attached>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: '...',
      jsx: (
        <ButtonGroup intent="primary" direction="column" attached>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: '...',
      jsx: (
        <ButtonGroup variant="outline" intent="primary" direction="row" attached stretch>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: '...',
      jsx: (
        <ButtonGroup variant="outline" intent="primary" direction="column" attached stretch>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: '...',
      jsx: (
        <ButtonGroup intent="tertiary">
          <Button intent="secondary">Button 1</Button>
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
