import { JSX, ComponentProps } from 'react'
import { expectType, expectAssignable, expectError } from 'tsd'

import { HStack, type HStackProps, type HStackOwnProps } from '..'
import type { FlexOwnProps, StackOwnProps } from 'lib-2/components'

// --- Basic render & own props ---
expectType<JSX.Element>(<HStack />)

// gap comes from StackOwnProps; justify comes from FlexOwnProps
const gap: StackOwnProps['gap'] = 4
const justify: FlexOwnProps['justify'] = 'between'
expectType<JSX.Element>(<HStack gap={gap} />)
expectType<JSX.Element>(<HStack justify={justify} />)

// style / className passthrough
expectType<JSX.Element>(<HStack className="row" style={{ display: 'flex' }} />)

// data-* attributes pass
expectType<JSX.Element>(<HStack data-testid="hstack" />)

// --- Disallowed props ---
// direction/rowGap/columnGap are intentionally omitted in HStackOwnProps
expectError(<HStack direction="column" />)
expectError(<HStack rowGap={2 as any} />)
expectError(<HStack columnGap={2 as any} />)

// default element props (div)
expectType<JSX.Element>(<HStack id="root" />)

// --- Props shape sanity ---
expectAssignable<ComponentProps<typeof HStack>>({})
expectAssignable<ComponentProps<typeof HStack>>({})

// Unknown props should fail
expectError(<HStack nope="x" />)

// Own props compatibility
const own: HStackOwnProps = { gap, justify }
expectType<JSX.Element>(<HStack {...own} />)
