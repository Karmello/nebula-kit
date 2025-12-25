import { ComponentMeta } from 'client/definitions'
import { Box, Button, Segment, SegmentProps } from 'lib/components'

const SEGMENT_EXAMPLES_META: ComponentMeta<SegmentProps>['examples'] = [
  {
    description: 'Buttons arranged in a horizontal row.',
    jsx: (
      <Segment>
        <Segment.Item>
          <Button>Button 1</Button>
        </Segment.Item>
        <Segment.Item>
          <Button>Button 2</Button>
        </Segment.Item>
        <Segment.Item>
          <Button>Button 3</Button>
        </Segment.Item>
      </Segment>
    ),
  },
  {
    description: 'Buttons stretched to share the available horizontal space evenly.',
    jsx: (
      <Segment>
        <Segment.Item flex="1">
          <Button fullWidth>Button 1</Button>
        </Segment.Item>
        <Segment.Item flex="1">
          <Button fullWidth>Button 2</Button>
        </Segment.Item>
        <Segment.Item flex="1">
          <Button fullWidth>Button 3</Button>
        </Segment.Item>
      </Segment>
    ),
  },
  {
    description: 'Buttons stacked vertically.',
    jsx: (
      <Segment flexDirection="column">
        <Segment.Item>
          <Button>Button 1</Button>
        </Segment.Item>
        <Segment.Item>
          <Button>Button 2</Button>
        </Segment.Item>
        <Segment.Item>
          <Button>Button 3</Button>
        </Segment.Item>
      </Segment>
    ),
  },
  {
    description: 'Buttons that expand to fill the vertical space evenly.',
    jsx: (
      <Segment flexDirection="column">
        <Segment.Item flex="1">
          <Button fullWidth>Button 1</Button>
        </Segment.Item>
        <Segment.Item flex="1">
          <Button fullWidth>Button 2</Button>
        </Segment.Item>
        <Segment.Item flex="1">
          <Button fullWidth>Button 3</Button>
        </Segment.Item>
      </Segment>
    ),
  },
  {
    description: 'Outlined buttons arranged in a horizontal row.',
    jsx: (
      <Segment>
        <Segment.Item>
          <Button variant="outline">Button 1</Button>
        </Segment.Item>
        <Segment.Item>
          <Button variant="outline">Button 2</Button>
        </Segment.Item>
        <Segment.Item>
          <Button variant="outline">Button 3</Button>
        </Segment.Item>
      </Segment>
    ),
  },
  {
    description: 'Outlined buttons in a stretched horizontal group.',
    jsx: (
      <Segment>
        <Segment.Item flex="1">
          <Button variant="outline" fullWidth>
            Button 1
          </Button>
        </Segment.Item>
        <Segment.Item flex="1">
          <Button variant="outline" fullWidth>
            Button 2
          </Button>
        </Segment.Item>
        <Segment.Item flex="1">
          <Button variant="outline" fullWidth>
            Button 3
          </Button>
        </Segment.Item>
      </Segment>
    ),
  },
  {
    description: 'Outlined buttons stacked vertically.',
    jsx: (
      <Segment flexDirection="column">
        <Segment.Item>
          <Button variant="outline">Button 1</Button>
        </Segment.Item>
        <Segment.Item>
          <Button variant="outline">Button 2</Button>
        </Segment.Item>
        <Segment.Item>
          <Button variant="outline">Button 3</Button>
        </Segment.Item>
      </Segment>
    ),
  },
  {
    description: 'Outlined buttons that expand to fill the vertical space evenly.',
    jsx: (
      <Segment flexDirection="column">
        <Segment.Item flex="1">
          <Button variant="outline" fullWidth>
            Button 1
          </Button>
        </Segment.Item>
        <Segment.Item flex="1">
          <Button variant="outline" fullWidth>
            Button 2
          </Button>
        </Segment.Item>
        <Segment.Item flex="1">
          <Button variant="outline" fullWidth>
            Button 3
          </Button>
        </Segment.Item>
      </Segment>
    ),
  },
  {
    description: 'Buttons with different variants attached together.',
    jsx: (
      <Box overflowX="auto">
        <Segment>
          <Segment.Item>
            <Button variant="solid">Button 1</Button>
          </Segment.Item>
          <Segment.Item>
            <Button variant="outline">Button 2</Button>
          </Segment.Item>
          <Segment.Item>
            <Button variant="soft-outline">Button 3</Button>
          </Segment.Item>
          <Segment.Item>
            <Button variant="ghost">Button 4</Button>
          </Segment.Item>
        </Segment>
      </Box>
    ),
  },
]

export { SEGMENT_EXAMPLES_META }
