import { expectType, expectError } from 'tsd'

import { Segment } from '..'
import { Button } from '../../../controls/Button'

// children are required
expectError(<Segment />)

// children passed
expectType(
  <Segment>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </Segment>
)

// custom tag
expectType(
  <Segment tag="nav">
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </Segment>
)

// other valid props
expectType(
  <Segment direction="column" stretch>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </Segment>
)
