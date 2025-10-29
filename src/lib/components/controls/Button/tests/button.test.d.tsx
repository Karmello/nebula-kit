import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Button } from '..'

// children are optional
expectType(<Button />)

// children passed
expectType(<Button>Button</Button>)

// wrong ref type not accepted
expectError(<Button tagRef={createRef<HTMLParagraphElement>()}>Button</Button>)

// right ref type passed
expectType(<Button tagRef={createRef<HTMLButtonElement>()}>Button</Button>)

// allowed props
expectType(
  <Button variant="solid" intent="primary" disabled iconName="check" iconPosition="right" size="lg">
    Button
  </Button>
)

// props not allowed
expectError(<Button margin={5}>Button</Button>)
expectError(<Button padding={5}>Button</Button>)
expectError(<Button inlineSize={5}>Button</Button>)
expectError(<Button blockSize={5}>Button</Button>)
