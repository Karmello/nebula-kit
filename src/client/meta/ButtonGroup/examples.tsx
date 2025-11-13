import { ComponentMeta } from 'client/definitions'
import { Button, ButtonGroup } from 'lib/components'
import { ButtonGroupProps } from 'lib/components/controls/ButtonGroup/definitions'

const BUTTON_GROUP_EXAMPLES_META: ComponentMeta<ButtonGroupProps>['examples'] = [
  {
    description: 'Buttons arranged in a horizontal row.',
    jsx: (
      <ButtonGroup direction="row">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    ),
  },
  {
    description: 'Buttons stretched to share the available horizontal space evenly.',
    jsx: (
      <ButtonGroup direction="row" stretch>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    ),
  },
  {
    description: 'Buttons stacked vertically.',
    jsx: (
      <ButtonGroup direction="column">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    ),
  },
  {
    description: 'Buttons that expand to fill the vertical space evenly.',
    jsx: (
      <ButtonGroup direction="column" stretch>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    ),
  },
  {
    description: 'Buttons joined together in a single horizontal group.',
    jsx: (
      <ButtonGroup direction="row" attached>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    ),
  },
  {
    description: 'Buttons joined together in a vertical stack.',
    jsx: (
      <ButtonGroup direction="column" attached>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    ),
  },
  {
    description: 'Outlined primary buttons, stretched and attached in a single horizontal group.',
    jsx: (
      <ButtonGroup variant="outline" intent="primary" direction="row" attached stretch>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    ),
  },
  {
    description: 'Outlined primary buttons, stretched and attached in a vertical stack.',
    jsx: (
      <ButtonGroup variant="outline" intent="primary" direction="column" attached stretch>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    ),
  },
  {
    description: 'Group with a shared style while overriding the appearance of a single button.',
    jsx: (
      <ButtonGroup intent="tertiary" attached>
        <Button intent="secondary">Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    ),
  },
]

export { BUTTON_GROUP_EXAMPLES_META }
