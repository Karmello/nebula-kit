import { JSX } from 'react'
import { expectType, expectError, expectAssignable } from 'tsd'

import { Grid } from 'lib/components'
import type { GridProps } from 'lib/components'

// basic usage returns JSX.Element
expectType<JSX.Element>(<Grid />)

// accepts className and style
expectType<JSX.Element>(<Grid className="x" style={{ outline: '1px solid red' }} />)

// data-* passthrough
expectType<JSX.Element>(<Grid data-foo="bar" />)

// columns / rows accept string or number (direct)
expectType<JSX.Element>(<Grid columns={3} rows="auto auto" />)

// columns / rows accept ResponsiveProp-ish object
expectType<JSX.Element>(
  <Grid
    columns={{ base: 1, md: 3, lg: '1fr 2fr 1fr' }}
    rows={{ base: 'auto auto', md: 'repeat(2, minmax(0,1fr))' }}
  />
)

// gap variants: ScaleValue | string (can’t know ScaleValue, but string is allowed)
expectType<JSX.Element>(<Grid gap="8px" />)
expectType<JSX.Element>(<Grid gap={{ base: '4px', md: '8px' }} />)
expectType<JSX.Element>(<Grid rowGap="2ch" columnGap={{ base: '4px', lg: '12px' }} />)

// auto flow + auto tracks
expectType<JSX.Element>(
  <Grid
    autoFlow="row dense"
    autoRows="minmax(0,1fr)"
    autoColumns={{ base: 'minmax(0,1fr)', md: 'minmax(10ch,auto)' }}
  />
)

// placement unions
expectType<JSX.Element>(<Grid placeItems={{ base: 'start', md: 'stretch' }} placeContent="space-between" />)

// invalid literals should error
expectError(<Grid autoFlow="diagonal" />)
expectError(<Grid placeItems="left" />)
expectError(<Grid placeContent="space-aroundish" />)

// responsive object should reject unknown literals too
expectError(<Grid placeItems={{ base: 'middle' }} />)

// polymorphic "as" — element type narrows attributes
expectType<JSX.Element>(<Grid as="section" aria-label="gallery" />)
expectType<JSX.Element>(<Grid as="main" role="main" />)
expectType<JSX.Element>(<Grid as="nav" aria-label="primary" />)
expectType<JSX.Element>(
  <Grid as="ul">
    <li />
    <li />
  </Grid>
)

// ensure wrong intrinsic props fail when "as" changes
expectError(<Grid as="ul" href="#" />)

// type alias round‑trip sanity for consumers
type ArticleGridProps = GridProps<'article'>
expectAssignable<ArticleGridProps>({ as: 'article', columns: 3, className: 'ok' })

// rows / columns: numbers and strings responsively
expectType<JSX.Element>(
  <Grid rows={{ base: 'auto auto', xl: 'repeat(2, minmax(0,1fr))' }} columns={{ base: 1, md: 4 }} />
)

// ensure rest props are preserved (light check with aria/data)
expectType<JSX.Element>(<Grid aria-live="polite" data-test="y" />)
