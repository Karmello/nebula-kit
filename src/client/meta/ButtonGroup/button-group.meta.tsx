import { ComponentMeta } from 'client/definitions'
import { ButtonGroup, Button } from 'lib/components'

import {
  BUTTON_GROUP_INHERITED_PROPS,
  ButtonGroupDirection,
  ButtonGroupTag,
  ButtonGroupOwnProps,
  DEFAULT_BUTTON_GROUP_GAP,
} from 'lib/components/controls/ButtonGroup/definitions'

const BUTTON_GROUP_META: ComponentMeta<ButtonGroupOwnProps> = {
  overview: {
    description: 'A composite control that unifies several buttons into a single interface element.',
    role: ['groups multiple buttons together into a single block', 'provides consistent styling'],
    behavior: ['aligns buttons horizontally or vertically'],
    byDefault: ['renders buttons in a horizontal row', `applies gap of ${DEFAULT_BUTTON_GROUP_GAP}`],
    examplesOfUse: [
      'grouping actions in a toolbar',
      'creating a segmented control for switching views',
      'displaying confirm/cancel buttons as a pair',
      'building pagination or step navigation',
    ],
    composedOf: BUTTON_GROUP_INHERITED_PROPS,
    rendersAs: ButtonGroupTag,
  },
  ownProps: [
    {
      name: 'direction',
      options: Object.values(ButtonGroupDirection),
      defaultValue: ButtonGroupDirection[0],
      isRequired: false,
      isResponsive: true,
      description: 'Controls whether buttons are arranged horizontally or vertically.',
    },
    {
      name: 'stretch',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: true,
      description: 'Makes all grouped buttons expand to fill the available space evenly.',
    },
    {
      name: 'attached',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Removes spacing between buttons so they appear as a single connected element.',
    },
  ],
  examples: [
    {
      description: 'Displays three buttons arranged in a horizontal row.',
      jsx: (
        <ButtonGroup direction="row">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: 'Shows three buttons stretched to share the available horizontal space evenly.',
      jsx: (
        <ButtonGroup direction="row" stretch>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: 'Stacks three secondary-styled buttons vertically.',
      jsx: (
        <ButtonGroup intent="secondary" direction="column">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: 'Stacks three secondary-styled buttons that expand to fill the vertical space evenly.',
      jsx: (
        <ButtonGroup intent="secondary" direction="column" stretch>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: 'Displays three primary-styled buttons joined together in a single horizontal group.',
      jsx: (
        <ButtonGroup intent="primary" direction="row" attached>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: 'Displays three primary-styled buttons joined together in a vertical stack.',
      jsx: (
        <ButtonGroup intent="primary" direction="column" attached>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description:
        'Shows three outlined primary buttons, stretched and attached in a single horizontal group.',
      jsx: (
        <ButtonGroup variant="outline" intent="primary" direction="row" attached stretch>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: 'Shows three outlined primary buttons, stretched and attached in a vertical stack.',
      jsx: (
        <ButtonGroup variant="outline" intent="primary" direction="column" attached stretch>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ),
    },
    {
      description: 'Shows a group with a shared style while overriding the appearance of a single button.',
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
