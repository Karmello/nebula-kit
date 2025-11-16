import { ComponentMeta } from 'client/definitions'
import { Button, Segment, SegmentProps } from 'lib/components'

const SEGMENT_EXAMPLES_META: ComponentMeta<SegmentProps>['examples'] = [
  {
    description: 'Buttons arranged in a horizontal row.',
    jsx: (
      <Segment variant="solid" intent="tertiary" direction="row">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Segment>
    ),
  },
  {
    description: 'Buttons stretched to share the available horizontal space evenly.',
    jsx: (
      <Segment variant="solid" intent="tertiary" direction="row" stretch>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Segment>
    ),
  },
  {
    description: 'Buttons stacked vertically.',
    jsx: (
      <Segment variant="solid" intent="tertiary" direction="column">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Segment>
    ),
  },
  {
    description: 'Buttons that expand to fill the vertical space evenly.',
    jsx: (
      <Segment variant="solid" intent="tertiary" direction="column" stretch>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Segment>
    ),
  },
  {
    description: 'Outlined buttons arranged in a horizontal row.',
    jsx: (
      <Segment variant="outline" intent="tertiary" direction="row">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Segment>
    ),
  },
  {
    description: 'Outlined buttons in a stretched horizontal group.',
    jsx: (
      <Segment variant="outline" direction="row" stretch>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Segment>
    ),
  },
  {
    description: 'Outlined buttons stacked vertically.',
    jsx: (
      <Segment variant="outline" intent="tertiary" direction="column">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Segment>
    ),
  },
  {
    description: 'Outlined buttons that expand to fill the vertical space evenly.',
    jsx: (
      <Segment variant="outline" direction="column" stretch>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Segment>
    ),
  },
  {
    description: 'Buttons with different variants attached together.',
    jsx: (
      <Segment intent="tertiary">
        <Button variant="solid">Button 1</Button>
        <Button variant="outline">Button 2</Button>
        <Button variant="soft-outline">Button 3</Button>
        <Button variant="ghost">Button 4</Button>
      </Segment>
    ),
  },
]

export { SEGMENT_EXAMPLES_META }
