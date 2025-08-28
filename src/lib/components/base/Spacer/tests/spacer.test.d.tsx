import { JSX } from 'react'
import { expectType, expectError } from 'tsd'

import { ResponsiveProp, ScaleValue } from 'lib/definitions'
import { Spacer, SpacerOwnProps } from '../'

// Spacer returns a ReactElement
expectType<JSX.Element>(<Spacer />)

// Props type
declare const props: SpacerOwnProps
expectType<ResponsiveProp<ScaleValue | string> | undefined>(props.size)
expectType<'block' | 'inline' | undefined>(props.axis)

// size accepts scale value
expectType<JSX.Element>(<Spacer size={2} />)
expectType<JSX.Element>(<Spacer size="var(--neb-space-3)" />)

// size accepts responsive object
expectType<JSX.Element>(<Spacer size={{ base: 2, md: 4, lg: '1rem' }} />)

// invalid size type
expectError(() => <Spacer size={{ wrong: 2 }} />)

// axis accepts only "block" or "inline"
expectType<JSX.Element>(<Spacer axis="block" />)
expectType<JSX.Element>(<Spacer axis="inline" />)

// invalid axis
expectError(() => <Spacer axis="horizontal" />)

// both props together
expectType<JSX.Element>(<Spacer axis="inline" size={3} />)

// children are not accepted
expectError(() => <Spacer>oops</Spacer>)
