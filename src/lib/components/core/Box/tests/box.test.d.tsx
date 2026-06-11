import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Box } from '../'

// -------------------------------------
// children
// -------------------------------------

expectType(<Box />)
expectType(<Box>Box</Box>)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(<Box unknown="v" />)

// -------------------------------------
// polymorphic tags
// -------------------------------------

// default div attrs
expectType(<Box tagAttrs={{ onClick: () => null }} />)

// href invalid on div
expectError(<Box tagAttrs={{ href: '/x' }} />)

// anchor attrs
expectType(<Box tag="a" tagAttrs={{ href: '/x', target: '_blank' }} />)

// invalid anchor attrs on button
expectError(<Box tag="button" tagAttrs={{ href: '/x' }} />)

// button attrs
expectType(<Box tag="button" tagAttrs={{ type: 'button' }} />)

// refs
expectType(<Box tagRef={createRef<HTMLDivElement>()} />)

expectType(<Box tag="a" tagRef={createRef<HTMLAnchorElement>()} />)

expectType(<Box tag="button" tagRef={createRef<HTMLButtonElement>()} />)

expectError(<Box tag="a" tagRef={createRef<HTMLDivElement>()} />)

expectError(<Box tag="button" tagRef={createRef<HTMLAnchorElement>()} />)

// -------------------------------------
// booleans
// -------------------------------------

expectType(<Box drawable />)
expectType(<Box interactive />)
expectType(<Box disabled />)
expectType(<Box elevated />)
expectType(<Box activeOnFocus />)

expectError(<Box drawable="true" />)
expectError(<Box interactive="true" />)
expectError(<Box disabled="true" />)
expectError(<Box elevated="true" />)
expectError(<Box activeOnFocus="true" />)

// non-responsive booleans
expectError(<Box interactive={{ md: true }} />)
expectError(<Box disabled={{ md: true }} />)

// -------------------------------------
// variant
// -------------------------------------

expectType(<Box variant="solid" />)
expectType(<Box variant="outline" />)
expectType(<Box variant="soft-outline" />)
expectType(<Box variant="ghost" />)

expectType(<Box variant="solid" />)

expectError(<Box variant="wrong" />)

expectError(<Box variant={{ md: 'wrong' }} />)

expectError(<Box variant={{ wrong: 'solid' }} />)

// -------------------------------------
// intent
// -------------------------------------

expectType(<Box intent="neutral" />)
expectType(<Box intent="muted" />)
expectType(<Box intent="tertiary" />)
expectType(<Box intent="secondary" />)
expectType(<Box intent="primary" />)
expectType(<Box intent="inverse" />)
expectType(<Box intent="primary" />)

expectError(<Box intent="wrong" />)

expectError(<Box intent={{ md: 'wrong' }} />)

// -------------------------------------
// theme
// -------------------------------------

expectType(<Box theme="light" />)
expectType(<Box theme="dark" />)
expectType(<Box theme="global" />)
expectType(<Box theme="global-flipped" />)

expectType(<Box theme={{ md: 'dark' }} />)

expectError(<Box theme="wrong" />)

// -------------------------------------
// colors
// -------------------------------------

expectType(<Box color="blue" />)
expectType(<Box brand="green" />)
expectType(<Box color="red" />)

expectError(<Box color="wrong" />)
expectError(<Box brand="wrong" />)

// -------------------------------------
// display
// -------------------------------------

expectType(<Box display="block" />)
expectType(<Box display="inline" />)
expectType(<Box display="inline-block" />)
expectType(<Box display="none" />)
expectType(<Box display="contents" />)

expectType(<Box display={{ md: 'none' }} />)

expectError(<Box display="wrong" />)

expectError(<Box display={{ md: 'wrong' }} />)

expectError(<Box display={{ wrong: 'none' }} />)

// -------------------------------------
// overflow
// -------------------------------------

expectType(<Box overflow="hidden" />)
expectType(<Box overflowX="scroll" />)
expectType(<Box overflowY="auto" />)

expectError(<Box overflow="wrong" />)

// -------------------------------------
// position
// -------------------------------------

expectType(<Box position="static" />)
expectType(<Box position="relative" />)
expectType(<Box position="absolute" />)
expectType(<Box position="fixed" />)
expectType(<Box position="sticky" />)

expectType(<Box position={{ md: 'sticky' }} />)

expectError(<Box position="wrong" />)

// -------------------------------------
// pointer events
// -------------------------------------

expectType(<Box pointerEvents="auto" />)
expectType(<Box pointerEvents="none" />)

expectError(<Box pointerEvents="wrong" />)

// -------------------------------------
// surface
// -------------------------------------

expectType(<Box surface="selected" />)
expectType(<Box surface="dividing" />)

expectError(<Box surface="wrong" />)

// -------------------------------------
// visibility
// -------------------------------------

expectType(<Box visibility="visible" />)
expectType(<Box visibility="hidden" />)

expectError(<Box visibility="wrong" />)

// -------------------------------------
// text align
// -------------------------------------

expectType(<Box textAlign="left" />)
expectType(<Box textAlign="center" />)
expectType(<Box textAlign="end" />)

expectType(<Box textAlign={{ xl: 'justify' }} />)

expectError(<Box textAlign="wrong" />)

// -------------------------------------
// responsive sizing props
// -------------------------------------

expectType(<Box blockSize="20px" />)
expectType(<Box inlineSize="20px" />)
expectType(<Box minInlineSize="sm" />)
expectType(<Box maxInlineSize="2xl" />)

expectType(<Box padding={{ md: 'lg' }} />)

expectType(<Box marginLeft={{ lg: '10px' }} />)

expectType(<Box inset={{ md: 'xs' }} />)

expectError(<Box padding={{ wrong: 'md' }} />)

// -------------------------------------
// css string props
// -------------------------------------

expectType(<Box opacity="0.5" />)
expectType(<Box borderRadius="10px" />)
expectType(<Box aspectRatio="16 / 9" />)
expectType(<Box transform="translateX(10px)" />)

expectType(<Box opacity={{ md: '0.5' }} />)

// -------------------------------------
// zIndex
// -------------------------------------

expectType(<Box zIndex={1} />)

expectType(<Box zIndex={{ md: 10 }} />)

expectError(<Box zIndex="10" />)
