import { JSX, ComponentProps } from 'react'
import { expectType, expectAssignable, expectError } from 'tsd'

import { Flex, type FlexProps } from '../flex'

// --- Basic render ---
expectType<JSX.Element>(<Flex />)
expectType<JSX.Element>(<Flex>content</Flex>)

// className / style
expectType<JSX.Element>(<Flex className="foo" />)
expectType<JSX.Element>(<Flex style={{ display: 'flex' }} />)

// DOM-ish passthrough (from BoxProps)
expectType<JSX.Element>(
  <Flex
    id="section"
    role="group"
    onClick={(e: any) => {
      e.currentTarget
    }}
  />
)

// direction
expectType<JSX.Element>(<Flex direction="row" />)
expectType<JSX.Element>(<Flex direction="row-reverse" />)
expectType<JSX.Element>(<Flex direction="column" />)
expectType<JSX.Element>(<Flex direction="column-reverse" />)
expectError(<Flex direction="horizontal" />)

// wrap
expectType<JSX.Element>(<Flex wrap="nowrap" />)
expectType<JSX.Element>(<Flex wrap="wrap" />)
expectType<JSX.Element>(<Flex wrap="wrap-reverse" />)
expectError(<Flex wrap="no-wrap" />)

// justify
expectType<JSX.Element>(<Flex justify="start" />)
expectType<JSX.Element>(<Flex justify="center" />)
expectType<JSX.Element>(<Flex justify="end" />)
expectType<JSX.Element>(<Flex justify="between" />)
expectType<JSX.Element>(<Flex justify="around" />)
expectType<JSX.Element>(<Flex justify="evenly" />)
expectError(<Flex justify="space-between" />)

// align
expectType<JSX.Element>(<Flex align="start" />)
expectType<JSX.Element>(<Flex align="center" />)
expectType<JSX.Element>(<Flex align="end" />)
expectType<JSX.Element>(<Flex align="stretch" />)
expectType<JSX.Element>(<Flex align="baseline" />)
expectError(<Flex align="flex-start" />)

// gap / rowGap / columnGap accept string values
expectType<JSX.Element>(<Flex gap="8px" />)
expectType<JSX.Element>(<Flex rowGap="var(--space-2)" />)
expectType<JSX.Element>(<Flex columnGap="1rem" />)

// gap props accept ScaleSystemToken
expectAssignable<JSX.Element>(<Flex gap={10} />)
expectAssignable<JSX.Element>(<Flex rowGap={10} />)
expectAssignable<JSX.Element>(<Flex columnGap={10} />)

// Props shape sanity: FlexProps should be assignable to React.ComponentProps<typeof Flex>
expectAssignable<ComponentProps<typeof Flex>>({} as FlexProps)

// Ensure disallowed strings are caught for each union prop
expectError(<Flex direction="left" />)
expectError(<Flex wrap="wrap-all" />)
expectError(<Flex justify="middle" />)
expectError(<Flex align="top" />)

// Ensure extra unknown props are rejected
expectError(<Flex unknownProp="nope" />)
