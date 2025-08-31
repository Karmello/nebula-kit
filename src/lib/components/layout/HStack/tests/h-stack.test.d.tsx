import { JSX, ComponentProps } from 'react'
import { expectType, expectAssignable, expectError } from 'tsd'

import { HStack, type HStackProps } from '..'
import type { FlexOwnProps, StackOwnProps } from 'lib/components'

// --- Basic render & own props ---
expectType<JSX.Element>(<HStack />)

const gap: StackOwnProps['gap'] = 4
const justify: FlexOwnProps['justify'] = 'space-between'
expectType<JSX.Element>(<HStack gap={gap} />)
expectError<JSX.Element>(<HStack justify={justify} />)

// style / className passthrough
expectType<JSX.Element>(<HStack className="row" style={{ display: 'flex' }} />)

// data-* attributes pass
expectType<JSX.Element>(<HStack data-testid="hstack" />)

expectType(<HStack rowGap={2 as any} />)
// direction/columnGap are intentionally omitted in HStackProps
expectError(<HStack direction="column" />)
expectError(<HStack columnGap={2 as any} />)

// default element props (div)
expectType<JSX.Element>(<HStack id="root" />)

// --- Props shape sanity ---
expectAssignable<ComponentProps<typeof HStack>>({})
expectAssignable<ComponentProps<typeof HStack>>({})

// Unknown props should fail
expectError(<HStack nope="x" />)

// Own props compatibility
const own: HStackProps = { gap }
expectType<JSX.Element>(<HStack {...own} />)
