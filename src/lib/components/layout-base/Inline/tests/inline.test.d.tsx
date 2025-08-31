import { JSX, ComponentProps } from 'react'
import { expectType, expectAssignable, expectError } from 'tsd'

import { Inline, type InlineProps, type InlineOwnProps } from '..'
import type { FlexOwnProps } from 'lib/components'

// --- Basic render & own props ---
expectType<JSX.Element>(<Inline />)
expectType<JSX.Element>(<Inline block />)

// Flex-related props (picked from FlexOwnProps)
const wrap: FlexOwnProps['wrap'] = 'wrap'
const justify: FlexOwnProps['justify'] = 'flex-start'
const align: FlexOwnProps['align'] = 'baseline'
const gap: FlexOwnProps['gap'] = 4
expectType<JSX.Element>(<Inline wrap={wrap} />)
expectType<JSX.Element>(<Inline justify={justify} />)
expectType<JSX.Element>(<Inline align={align} />)
expectType<JSX.Element>(<Inline gap={gap} />)

// style / className pass-through
expectType<JSX.Element>(<Inline className="row" style={{ display: 'inline-flex' }} />)

// data-* attributes should pass through
expectType<JSX.Element>(<Inline data-testid="inline" />)

// --- Polymorphic behavior ---
// default renders as a 'div' (polymorphic base). div props should be accepted
expectType<JSX.Element>(<Inline id="root" />)

// as="span" should allow span-specific attributes
expectType<JSX.Element>(<Inline as="span" />)

// as="a" should allow anchor attributes like href
expectType<JSX.Element>(<Inline as="a" href="#" />)
// but anchor-only props should not be allowed without as="a"
expectError(<Inline href="#" />)

// as="button" should allow button attributes
expectType<JSX.Element>(<Inline as="button" type="button" disabled />)
// and button-only props should error on default element
expectError(<Inline type="button" />)

// Generic InlineProps usage (compile-time shape checks)
// Provide explicit generic and ensure assignability to component props
expectAssignable<ComponentProps<typeof Inline>>({} as InlineProps<'div'>)
expectAssignable<ComponentProps<typeof Inline>>({} as InlineProps<'a'>)

// Ensure unknown props are rejected
expectError(<Inline nope="x" />)

// Ensure InlineOwnProps is compatible with component props
const own: InlineOwnProps = { block: true }
expectType<JSX.Element>(<Inline {...own} />)
