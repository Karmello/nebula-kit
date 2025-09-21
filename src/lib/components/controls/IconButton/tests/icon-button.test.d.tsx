import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { IconButton } from '..'

// iconName missing
expectError(<IconButton />)

// iconName passed
expectType(<IconButton iconName="check" />)

// children not allowed
expectError(<IconButton iconName="check">children</IconButton>)

// wrong ref type not accepted
expectError(<IconButton iconName="check" tagRef={createRef<HTMLParagraphElement>()} />)

// right ref type passed
expectType(<IconButton iconName="check" tagRef={createRef<HTMLButtonElement>()} />)

// allowed props
expectType(<IconButton variant="solid" intent="primary" disabled iconName="check" size="lg" />)

// props not allowed
expectError(<IconButton iconName="check" iconPosition="right" />)
expectError(<IconButton iconName="check" margin={5} />)
expectError(<IconButton iconName="check" margin={5} />)
expectError(<IconButton iconName="check" padding={5} />)
expectError(<IconButton iconName="check" inlineSize={5} />)
expectError(<IconButton iconName="check" blockSize={5} />)
