import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { HtmlTag } from '..'

// -------------------------------------
// children
// -------------------------------------

expectType(<HtmlTag />)
expectType(<HtmlTag>Content</HtmlTag>)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(<HtmlTag unknown="v" />)

expectError(<HtmlTag tagAttrs={{ unknown: 'v' }} />)

// -------------------------------------
// default div behavior
// -------------------------------------

expectType(<HtmlTag tagAttrs={{ onClick: () => null }} />)

expectType(<HtmlTag tagAttrs={{ 'data-testid': 'id' }} />)

expectError(<HtmlTag tagAttrs={{ href: '/x' }} />)

// -------------------------------------
// default div refs
// -------------------------------------

expectType(<HtmlTag tagRef={createRef<HTMLDivElement>()} />)

expectError(<HtmlTag tagRef={createRef<HTMLAnchorElement>()} />)

// -------------------------------------
// anchor tag
// -------------------------------------

expectType(
  <HtmlTag
    tag="a"
    tagAttrs={{
      href: '/x',
      target: '_blank',
      rel: 'noreferrer',
    }}
  />
)

expectType(<HtmlTag tag="a" tagRef={createRef<HTMLAnchorElement>()} />)

expectError(<HtmlTag tag="a" tagRef={createRef<HTMLDivElement>()} />)

expectType(<HtmlTag tag="a" tagAttrs={{ type: 'button' }} />)

// -------------------------------------
// button tag
// -------------------------------------

expectType(
  <HtmlTag
    tag="button"
    tagAttrs={{
      type: 'button',
      disabled: true,
    }}
  />
)

expectType(<HtmlTag tag="button" tagRef={createRef<HTMLButtonElement>()} />)

expectError(<HtmlTag tag="button" tagAttrs={{ href: '/x' }} />)

expectError(<HtmlTag tag="button" tagRef={createRef<HTMLAnchorElement>()} />)

// -------------------------------------
// semantic tags
// -------------------------------------

expectType(<HtmlTag tag="section" />)
expectType(<HtmlTag tag="article" />)
expectType(<HtmlTag tag="nav" />)

expectError(<HtmlTag tag="wrong-tag" />)
