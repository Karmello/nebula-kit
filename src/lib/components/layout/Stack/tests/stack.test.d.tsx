import { createRef, JSX } from 'react'

import { expectType, expectError } from 'tsd'
import { Stack } from '..'

// Basic render returns JSX
expectType<JSX.Element>(<Stack />)

// as: constrained to StackAs (no anchors/buttons)
expectType<JSX.Element>(<Stack as="div" />)
expectType<JSX.Element>(<Stack as="section" />)
expectType<JSX.Element>(<Stack as="article" />)
expectType<JSX.Element>(<Stack as="aside" />)
expectType<JSX.Element>(<Stack as="main" />)
expectType<JSX.Element>(<Stack as="header" />)
expectType<JSX.Element>(<Stack as="footer" />)
expectType<JSX.Element>(<Stack as="nav" />)
expectType<JSX.Element>(<Stack as="ul" />)
expectType<JSX.Element>(<Stack as="ol" />)

expectError(<Stack as="a" />) // not in StackAs
expectError(<Stack as="button" />) // not in StackAs
expectError(<Stack as="table" />) // not in StackAs

// Polymorphic DOM props should narrow correctly for allowed tags
expectType<JSX.Element>(<Stack as="ul" role="list" />)
expectType<JSX.Element>(<Stack as="ol" start={3} />) // <ol> supports start
expectType<JSX.Element>(<Stack as="section" id="s1" />) // generic HTMLElement props

// Div-specific check: href is not allowed unless as="a" (which we forbid)
expectError(<Stack href="#" />)

// className/style from native props are allowed
expectType<JSX.Element>(<Stack className="x" style={{ outline: '1px solid red' }} />)

// Allowed Stack props
expectType<JSX.Element>(<Stack direction="column" />)
expectType<JSX.Element>(<Stack direction={{ base: 'column', md: 'row' }} />)

expectType<JSX.Element>(<Stack align="center" />)
expectType<JSX.Element>(<Stack gap={8} />)
expectType<JSX.Element>(<Stack gap={{ base: 4, md: 12 }} />)
expectType<JSX.Element>(<Stack rowGap="1rem" />)
expectType<JSX.Element>(<Stack columnGap={{ lg: 16 }} />)

// Disallowed Flex/Box props (kept API narrow)
expectError(<Stack justify="between" />) // intentionally not exposed
expectError(<Stack wrap="wrap" />) // intentionally not exposed

// Disallow Box paddings/margins on Stack (since StackOwnProps doesn’t include them)
expectError(<Stack pt={8} />)
expectError(<Stack m={4} />)

// Ref typing: ref matches the chosen element
const divRef = createRef<HTMLDivElement>()
expectType<JSX.Element>(<Stack ref={divRef} />)

const sectionRef = createRef<HTMLElement>()
expectType<JSX.Element>(<Stack as="section" ref={sectionRef} />)

const ulRef = createRef<HTMLUListElement>()
expectType<JSX.Element>(<Stack as="ul" ref={ulRef} />)

const olRef = createRef<HTMLOListElement>()
expectType<JSX.Element>(<Stack as="ol" ref={olRef} />)

// Wrong ref type should error
const anchorRef = createRef<HTMLAnchorElement>()
expectError(<Stack ref={anchorRef} />) // Stack never renders <a>
expectError(<Stack as="ul" ref={sectionRef} />) // ul ≠ HTMLElement generic
