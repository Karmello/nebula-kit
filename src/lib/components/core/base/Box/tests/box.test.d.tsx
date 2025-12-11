import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Box } from '../'

// no children required
expectType(<Box />)

// passing children possible
expectType(<Box>Box</Box>)

// unknown prop not allowed
expectError(<Box unknown="v" />)

// <div> attrs available by default
expectType(<Box tagAttrs={{ onClick: () => null }} />)

// <a> attrs not available by default
expectError(<Box tagAttrs={{ href: 'href' }} />)

// wrong ref type not allowed
expectError(<Box tagRef={createRef<HTMLAnchorElement>()} />)

// possible to render as <a> and pass right ref type
expectType(<Box tag="a" tagAttrs={{ href: 'href' }} tagRef={createRef<HTMLAnchorElement>()} />)

// variant
expectError(<Box variant="wrong">Box</Box>)
expectType(<Box variant="solid">Box</Box>)

// intent
expectError(<Box intent="wrong">Box</Box>)
expectType(<Box intent="primary">Box</Box>)

// opacity
expectError(<Box opacity="wrong">Box</Box>)
expectType(<Box opacity={0.5}>Box</Box>)
expectType(<Box opacity={{ md: 0.5 }}>Box</Box>)

// borderRadius
expectType(<Box borderRadius="5px">Box</Box>)
expectType(<Box borderRadius="10px">Box</Box>)

// interactive
expectError(<Box interactive="wrong">Box</Box>)
expectType(<Box interactive={false}>Box</Box>)
expectType(<Box interactive>Box</Box>)

// disabled
expectError(<Box disabled="wrong">Box</Box>)
expectType(<Box disabled={false}>Box</Box>)
expectType(<Box disabled>Box</Box>)

// display
expectError(<Box display="wrong">Box</Box>)
expectType(<Box display="inline">Box</Box>)
expectType(<Box display={{ lg: 'none' }}>Box</Box>)

// overflowX
expectError(<Box overflowX="wrong">Box</Box>)
expectType(<Box overflowX="scroll">Box</Box>)
expectType(<Box overflowX={{ lg: 'visible' }}>Box</Box>)

// position
expectError(<Box position="wrong">Box</Box>)
expectType(<Box position="sticky">Box</Box>)
expectType(<Box position={{ md: 'relative' }}>Box</Box>)

// textAlign
expectError(<Box textAlign="wrong">Box</Box>)
expectType(<Box textAlign="center">Box</Box>)
expectType(<Box textAlign={{ xl: 'end' }}>Box</Box>)

// blockSize
expectType(<Box blockSize="20px">Box</Box>)
expectType(<Box blockSize={{ md: '5px' }}>Box</Box>)

// inlineSize
expectType(<Box inlineSize="20px">Box</Box>)
expectType(<Box inlineSize={{ md: '5px' }}>Box</Box>)

// marginLeft
expectType(<Box marginLeft="20px">Box</Box>)
expectType(<Box marginLeft={{ md: '5px' }}>Box</Box>)

// paddingBottom
expectType(<Box paddingBottom="20px">Box</Box>)
expectType(<Box paddingBottom={{ md: '5px' }}>Box</Box>)
