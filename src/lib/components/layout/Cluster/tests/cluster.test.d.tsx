import { JSX, ComponentProps } from 'react'
import { expectType, expectAssignable, expectError } from 'tsd'

import { Cluster, type ClusterProps, type ClusterOwnProps } from '..'
import type { FlexOwnProps } from 'lib/components'
import type { ResponsiveProp, ScaleValue } from 'lib/definitions'

// --- Basic render & own props ---
expectType<JSX.Element>(<Cluster />)
expectType<JSX.Element>(<Cluster className="cluster" style={{ display: 'flex' }} />)

// Flex-derived props (direction omitted in ClusterProps)
const wrap: FlexOwnProps['wrap'] = 'wrap'
const align: FlexOwnProps['align'] = 'center'
const justify: FlexOwnProps['justify'] = 'start'
const gap: FlexOwnProps['gap'] = 4
expectType<JSX.Element>(<Cluster wrap={wrap} />)
expectType<JSX.Element>(<Cluster align={align} />)
expectType<JSX.Element>(<Cluster justify={justify} />)
expectType<JSX.Element>(<Cluster gap={gap} />)

// Ensure 'direction' is not allowed (Cluster fixes direction="row")
expectError(<Cluster direction="column" />)

// minItemWidth: accepts string or ScaleSystemToken and can be responsive
const token = null as unknown as ScaleValue
const minStr = '12rem'
const minResp = null as unknown as ResponsiveProp<ScaleValue | string>
expectType<JSX.Element>(<Cluster minItemWidth={token} />)
expectType<JSX.Element>(<Cluster minItemWidth={minStr} />)
expectType<JSX.Element>(<Cluster minItemWidth={minResp} />)

// data-* attributes pass through
expectType<JSX.Element>(<Cluster data-testid="cluster" />)

// --- Polymorphic behavior ---
// default element props (div)
expectType<JSX.Element>(<Cluster id="root" />)

// as="span" accepts span attributes
expectType<JSX.Element>(<Cluster as="span" />)

// as="a" allows href
expectType<JSX.Element>(<Cluster as="a" href="#" />)
// but href should not be allowed without as="a"
expectError(<Cluster href="#" />)

// as="button" allows button-only attrs
expectType<JSX.Element>(<Cluster as="button" type="button" disabled />)
// button-only prop should error on default element
expectError(<Cluster type="button" />)

// --- Props shape sanity ---
expectAssignable<ComponentProps<typeof Cluster>>({} as ClusterProps<'div'>)
expectAssignable<ComponentProps<typeof Cluster>>({} as ClusterProps<'a'>)

// Unknown props should fail
expectError(<Cluster nope="x" />)

// Own props compatibility
const own: ClusterOwnProps = { minItemWidth: token }
expectType<JSX.Element>(<Cluster {...own} />)
