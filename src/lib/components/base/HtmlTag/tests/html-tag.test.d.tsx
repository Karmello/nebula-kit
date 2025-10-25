import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { HtmlTag } from '..'

// children not required
expectType(<HtmlTag />)

// unknown attr not allowed
expectError(<HtmlTag unknown="v" />)

// unknown attr in htmlAttrs not allowed
expectError(<HtmlTag tagAttrs={{ unknown: 'v' }} />)

// data attr in htmlAttrs allowed
expectType(<HtmlTag tagAttrs={{ 'data-testid': 'id' }} />)

// default <div> tag attrs available
expectType(<HtmlTag tagAttrs={{ onClick: () => null }} />)

// proper ref type passed
expectType(<HtmlTag tagRef={createRef<HTMLDivElement>()} />)

// wrong ref type for <div> tag passed
expectError(<HtmlTag tagRef={createRef<HTMLAnchorElement>()} />)

// <a> tag attrs not available on <div>
expectError(<HtmlTag tagAttrs={{ href: 'href' }} />)

// <a> tag attrs available when tag is <a>
expectType(<HtmlTag tag="a" tagAttrs={{ href: 'href' }} />)

// proper ref type for <a> tag passed
expectType(<HtmlTag tag="a" tagRef={createRef<HTMLAnchorElement>()} />)
