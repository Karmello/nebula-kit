import { JSX, createRef } from 'react'
import { expectType, expectAssignable, expectError } from 'tsd'

import { Button, type ButtonProps, type ButtonSize } from '..'
import type { BoxOwnProps, WithIconProps } from 'lib-2/components'

// --- Basic render ---
expectType<JSX.Element>(<Button />)
expectType<JSX.Element>(<Button>Click</Button>)

// HTML button attributes passthrough
expectType<JSX.Element>(
  <Button
    type="submit"
    autoFocus
    onClick={e => {
      e.currentTarget
    }}
    disabled
  />
)

// Forwarded ref typing
const btnRef = createRef<HTMLButtonElement>()
expectType<JSX.Element>(<Button ref={btnRef} />)

// size prop
expectType<JSX.Element>(<Button size="sm" />)
expectType<JSX.Element>(<Button size="md" />)
expectType<JSX.Element>(<Button size="lg" />)
expectError(<Button size="xl" />)

// iconName / iconPosition should line up with WithIconProps
const iconName: WithIconProps['iconName'] = 'search'
const iconPosition: WithIconProps['iconPosition'] = 'left'
expectType<JSX.Element>(<Button iconName={iconName} />)
expectType<JSX.Element>(<Button iconPosition={iconPosition} />)

// variant / intent / disabled from BoxOwnProps
const variant: BoxOwnProps['variant'] = 'solid'
const intent: BoxOwnProps['intent'] = 'primary'
expectType<JSX.Element>(<Button variant={variant} intent={intent} disabled />)

// as HTML button only — ensure invalid 'as' is not allowed (Button hardcodes as="button")
expectError(<Button as="a" />)

// type default is 'button', but explicit values should be allowed via HTMLButton props
expectType<JSX.Element>(<Button type="reset" />)
expectType<JSX.Element>(<Button type="submit" />)

// Square mode when no children — should still accept icon props
expectType<JSX.Element>(<Button iconName={iconName} />)

// Ensure ButtonProps matches inferred props shape
expectAssignable<React.ComponentProps<typeof Button>>({} as ButtonProps)

// Ensure foreign/unknown props are rejected
expectError(<Button nope="x" />)

// Enforce ButtonSize as only 'sm' | 'md' | 'lg'
const justSize = null as unknown as ButtonSize
expectType<JSX.Element>(<Button size={justSize} />)

// data attributes allowed (forwarded via Box)
expectType<JSX.Element>(<Button data-testid="cta" />)
