import { JSX, ComponentProps } from 'react'
import { expectType, expectAssignable, expectError } from 'tsd'

import { VStack } from '..'

// --- Basic render & own props ---
expectType<JSX.Element>(<VStack />)

// gap comes from StackOwnProps (rowGap/columnGap omitted)
expectType<JSX.Element>(<VStack gap={4} />)

// style / className passthrough
expectType<JSX.Element>(<VStack className="col" style={{ display: 'flex' }} />)

// data-* attributes pass
expectType<JSX.Element>(<VStack data-testid="vstack" />)

// --- Disallowed props ---
// direction/rowGap are intentionally omitted in VStackOwnProps
expectError(<VStack direction="row" />)
expectError(<VStack rowGap={2} />)

// --- Polymorphic behavior (StackAs) ---
// default element props (div)
expectType<JSX.Element>(<VStack id="root" />)

// but href should not be allowed without as="a"
expectError(<VStack href="#" />)

// button-only prop should error on default element
expectError(<VStack type="button" />)

// --- Props shape sanity ---
expectAssignable<ComponentProps<typeof VStack>>({})
expectAssignable<ComponentProps<typeof VStack>>({})

// Unknown props should fail
expectError(<VStack nope="x" />)
