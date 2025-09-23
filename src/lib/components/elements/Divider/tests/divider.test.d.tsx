import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Divider } from '../'

// no props required
expectType(<Divider />)

// children not allowed
expectError(<Divider>children</Divider>)

// unknown prop not allowed
expectError(<Divider unknown="xyz" />)

// thickness prop allowed
expectType(<Divider thickness={3} />)

// intent prop allowed
expectType(<Divider intent="primary" />)

// wrong ref not allowed
expectError(<Divider tagRef={createRef<SVGSVGElement>()} />)

// proper ref passed
expectType(<Divider tagRef={createRef<HTMLHRElement>()} />)
