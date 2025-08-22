import { JSX, ComponentProps } from 'react'
import { expectType, expectAssignable, expectError } from 'tsd'

// Adjust import path to your package entry
import { Center, type CenterProps, type CenterOwnProps } from '..'
import type { FlexOwnProps } from 'lib-2/components'

// --- Basic render & own props ---
expectType<JSX.Element>(<Center />)
expectType<JSX.Element>(<Center fill />)
expectType<JSX.Element>(<Center screen />)
expectType<JSX.Element>(<Center grow />)

// style / className passthrough
expectType<JSX.Element>(<Center className="center" style={{ display: 'flex' }} />)

// data-* attributes should pass
expectType<JSX.Element>(<Center data-testid="center" />)

// --- Flex-derived props allowed (except direction/justify/align which are fixed internally) ---
const wrap: FlexOwnProps['wrap'] = 'wrap' as any
const gap: FlexOwnProps['gap'] = 4 as any
const rowGap: FlexOwnProps['rowGap'] = 2 as any
const columnGap: FlexOwnProps['columnGap'] = 2 as any
expectType<JSX.Element>(<Center wrap={wrap} />)
expectType<JSX.Element>(<Center gap={gap} />)
expectType<JSX.Element>(<Center rowGap={rowGap} />)
expectType<JSX.Element>(<Center columnGap={columnGap} />)

// Ensure 'direction' / 'justify' / 'align' are NOT accepted by props (Center fixes them)
expectError(<Center direction="column" />)
expectError(<Center justify="end" />)
expectError(<Center align="start" />)

// --- Polymorphic behavior ---
// default element props (div)
expectType<JSX.Element>(<Center id="root" />)

// as="span" accepts span attributes
expectType<JSX.Element>(<Center as="span" />)

// as="a" allows href
expectType<JSX.Element>(<Center as="a" href="#" />)
// but href should not be allowed without as="a"
expectError(<Center href="#" />)

// as="button" allows button-only attrs
expectType<JSX.Element>(<Center as="button" type="button" disabled />)
// button-only prop should error on default element
expectError(<Center type="button" />)

// --- Props shape sanity ---
expectAssignable<ComponentProps<typeof Center>>({} as CenterProps<'div'>)
expectAssignable<ComponentProps<typeof Center>>({} as CenterProps<'a'>)

// Unknown props should fail
expectError(<Center nope="x" />)

// Own props compatibility
const own: CenterOwnProps = { fill: true, screen: false, grow: true }
expectType<JSX.Element>(<Center {...own} />)
