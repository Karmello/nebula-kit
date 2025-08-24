import { JSX } from 'react'
import { expectType, expectError } from 'tsd'

import { Box } from '../box'

// children
expectType<JSX.Element>(<Box />)

// as
expectType<JSX.Element>(<Box as="a" href="#" />)

// as + disabled
expectType<JSX.Element>(<Box as="button" disabled />)

// href
expectError(<Box href="#" />)

// variant  + intent
expectType<JSX.Element>(<Box variant="ghost" intent="neutral" />)
expectError(<Box variant="made-up" />)

// data attrs booleans
expectType<JSX.Element>(<Box interactive disabled />)

// fontSize (token | string, responsive ok)
expectType<JSX.Element>(<Box fontSize={10} />)
expectType<JSX.Element>(<Box fontSize="14px" />)
expectType<JSX.Element>(<Box fontSize={{ base: 8, md: 12 }} />)

// lineHeight (number | string)
expectType<JSX.Element>(<Box lineHeight={1.4} />)
expectType<JSX.Element>(<Box lineHeight="150%" />)
expectType<JSX.Element>(<Box lineHeight={{ base: 1.2, lg: 'normal' }} />)

// textAlign (union with globals if you used csstype)
expectType<JSX.Element>(<Box textAlign="center" />)
expectType<JSX.Element>(<Box textAlign={{ base: 'left', md: 'right' }} />)
expectError(<Box textAlign="middle" />)

// blockSize/minBlockSize/maxBlockSize (token | string, responsive ok)
expectType<JSX.Element>(<Box blockSize={20} />)
expectType<JSX.Element>(<Box blockSize={{ lg: '50vh' }} />)

// padding shorthands (token | string | responsive)
expectType<JSX.Element>(<Box p={8} />)
expectType<JSX.Element>(<Box px={{ base: 4, md: 10 }} />)
expectType<JSX.Element>(<Box pt="2rem" />)

// margin shorthands
expectType<JSX.Element>(<Box m={6} />)
expectType<JSX.Element>(<Box my={{ md: 12 }} />)
expectType<JSX.Element>(<Box ml="1em" />)

// className/style escape hatches
expectType<JSX.Element>(<Box className="x" style={{ outline: '1px solid red' }} />)
