import { expectType, expectError } from 'tsd'

import { ButtonGroup } from '..'
import { Button } from '../../Button'

// children are required
expectError(<ButtonGroup />)

// children passed
expectType(
  <ButtonGroup>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </ButtonGroup>
)

// custom valid tag
expectType(
  <ButtonGroup tag="nav">
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </ButtonGroup>
)

// invalid tag
expectError(
  <ButtonGroup tag="span">
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </ButtonGroup>
)

// other valid props
expectType(
  <ButtonGroup direction="column" attached stretch gap={5} size="lg">
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </ButtonGroup>
)
