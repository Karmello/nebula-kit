import { expectType, expectError } from 'tsd'

import { Segment } from '..'
import { Button } from '../../../controls/Button'

// children are required
expectError(<Segment />)

// children passed
expectType(
  <Segment>
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
    <Segment.Item>
      <Button>Button 2</Button>
    </Segment.Item>
  </Segment>
)

// custom tag
expectType(
  <Segment tag="nav">
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
    <Segment.Item>
      <Button>Button 2</Button>
    </Segment.Item>
  </Segment>
)

// other valid props
expectType(
  <Segment flexDirection="column">
    <Segment.Item>
      <Button>Button 1</Button>
    </Segment.Item>
    <Segment.Item>
      <Button>Button 2</Button>
    </Segment.Item>
  </Segment>
)
