import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Image } from '../Image/image'

// -------------------------------------
// basic rendering
// -------------------------------------

expectType(<Image />)

expectType(<Image src="/image.png" alt="Image" />)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(<Image unknown="v" />)

expectError(<Image tagAttrs={{ unknown: 'v' }} />)

// -------------------------------------
// img attrs
// -------------------------------------

expectType(
  <Image
    tagAttrs={{
      draggable: false,
      'data-testid': 'image',
    }}
  />
)

// href invalid on img
expectError(<Image tagAttrs={{ href: '/x' }} />)

// -------------------------------------
// refs
// -------------------------------------

expectType(<Image tagRef={createRef<HTMLImageElement>()} />)

expectError(<Image tagRef={createRef<HTMLDivElement>()} />)

// -------------------------------------
// alt
// -------------------------------------

expectType(<Image alt="Image" />)

expectError(<Image alt={true} />)

// -------------------------------------
// crossOrigin
// -------------------------------------

expectType(<Image crossOrigin="anonymous" />)
expectType(<Image crossOrigin="use-credentials" />)

expectError(<Image crossOrigin="wrong" />)

// -------------------------------------
// decoding
// -------------------------------------

expectType(<Image decoding="sync" />)
expectType(<Image decoding="async" />)
expectType(<Image decoding="auto" />)

expectError(<Image decoding="wrong" />)

// -------------------------------------
// fetchPriority
// -------------------------------------

expectType(<Image fetchPriority="high" />)
expectType(<Image fetchPriority="low" />)
expectType(<Image fetchPriority="auto" />)

expectError(<Image fetchPriority="wrong" />)

// -------------------------------------
// loading
// -------------------------------------

expectType(<Image loading="eager" />)
expectType(<Image loading="lazy" />)

expectError(<Image loading="wrong" />)

// -------------------------------------
// objectFit
// -------------------------------------

expectType(<Image objectFit="cover" />)
expectType(<Image objectFit="contain" />)
expectType(<Image objectFit="fill" />)
expectType(<Image objectFit="none" />)
expectType(<Image objectFit="scale-down" />)

expectType(<Image objectFit={{ md: 'cover' }} />)

expectError(<Image objectFit="wrong" />)

expectError(<Image objectFit={{ md: 'wrong' }} />)

expectError(<Image objectFit={{ wrong: 'cover' }} />)

// -------------------------------------
// display
// -------------------------------------

expectType(<Image display="block" />)
expectType(<Image display="inline" />)
expectType(<Image display="inline-block" />)
expectType(<Image display="none" />)
expectType(<Image display="contents" />)

expectType(<Image display={{ lg: 'none' }} />)

expectError(<Image display="wrong" />)

// -------------------------------------
// overflow
// -------------------------------------

expectType(<Image overflow="hidden" />)
expectType(<Image overflowX="scroll" />)
expectType(<Image overflowY="auto" />)

expectError(<Image overflow="wrong" />)

// -------------------------------------
// pointerEvents
// -------------------------------------

expectType(<Image pointerEvents="auto" />)
expectType(<Image pointerEvents="none" />)

expectError(<Image pointerEvents="wrong" />)

// -------------------------------------
// responsive sizing props
// -------------------------------------

expectType(<Image blockSize="20px" />)
expectType(<Image inlineSize="300px" />)

expectType(<Image inlineSize={{ md: 'lg' }} />)

expectType(<Image maxInlineSize={{ lg: '500px' }} />)

expectType(<Image minBlockSize={{ md: 'xs' }} />)

expectError(<Image inlineSize={{ wrong: '10px' }} />)

// -------------------------------------
// css string props
// -------------------------------------

expectType(<Image aspectRatio="16 / 9" />)
expectType(<Image borderRadius="50%" />)
expectType(<Image objectPosition="center" />)
expectType(<Image opacity="0.5" />)

expectType(<Image opacity={{ md: '0.5' }} />)

// -------------------------------------
// referrerPolicy
// -------------------------------------

expectType(<Image referrerPolicy="no-referrer" />)

expectType(<Image referrerPolicy="strict-origin-when-cross-origin" />)

expectError(<Image referrerPolicy="wrong" />)

// -------------------------------------
// callbacks
// -------------------------------------

expectType(
  <Image
    onLoad={event => {
      expectType<React.SyntheticEvent<HTMLImageElement>>(event)
    }}
  />
)

expectType(
  <Image
    onError={event => {
      expectType<React.SyntheticEvent<HTMLImageElement>>(event)
    }}
  />
)

expectError(<Image onLoad="wrong" />)

expectError(<Image onError="wrong" />)
