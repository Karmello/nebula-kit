import { createRef } from 'react'
import { expectType, expectError } from 'tsd'

import { Button } from '..'

// children are optional
expectType(<Button />)

// children passed
expectType(<Button>Button</Button>)

// correct default button ref
expectType(<Button tagRef={createRef<HTMLButtonElement>()}>Button</Button>)

// polymorphic anchor ref
expectType(
  <Button tag="a" tagRef={createRef<HTMLAnchorElement>()}>
    Button
  </Button>
)

// obvious impossible ref mismatch
expectError(<Button tagRef={createRef<HTMLParagraphElement>()}>Button</Button>)

// valid semantic variants
expectType(<Button variant="solid">Button</Button>)
expectType(<Button variant="outline">Button</Button>)
expectType(<Button variant="soft-outline">Button</Button>)
expectType(<Button variant="ghost">Button</Button>)

// invalid variant
expectError(<Button variant="filled">Button</Button>)

// valid intents
expectType(<Button intent="neutral">Button</Button>)
expectType(<Button intent="primary">Button</Button>)
expectType(<Button intent="inverse">Button</Button>)

// invalid intent
expectError(<Button intent="danger">Button</Button>)

// valid align values
expectType(<Button align="center">Button</Button>)
expectType(<Button align="start">Button</Button>)
expectType(<Button align="split">Button</Button>)

// invalid align value
expectError(<Button align="between">Button</Button>)

// valid responsive props
expectType(
  <Button
    variant={{ base: 'solid', md: 'ghost' }}
    intent={{ base: 'primary', lg: 'secondary' }}
    inlineSize={{ base: '100%', md: '200px' }}
    fullWidth={{ base: true, md: false }}
  >
    Button
  </Button>
)

// invalid responsive breakpoint key
expectError(<Button variant={{ mobile: 'solid' }}>Button</Button>)

// invalid responsive enum value
expectError(<Button intent={{ base: 'primary', md: 'danger' }}>Button</Button>)

// non-responsive prop misuse
expectError(<Button disabled={{ base: true }}>Button</Button>)

expectError(<Button loading={{ base: true }}>Button</Button>)

// valid size values
expectType(<Button size="2xs">Button</Button>)
expectType(<Button size="xl">Button</Button>)

// invalid size
expectError(<Button size="2xl">Button</Button>)

// icon props
expectType(
  <Button iconName="check" iconPlacement="right" iconAngle={90}>
    Button
  </Button>
)

// invalid icon placement
expectError(<Button iconPlacement="top">Button</Button>)

// callback typing
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {}
expectType(<Button onClick={handleClick}>Button</Button>)

// anchor attrs allowed when polymorphic
expectType(
  <Button
    tag="a"
    tagAttrs={{
      href: '/dashboard',
      target: '_blank',
    }}
  >
    Link button
  </Button>
)

// invalid anchor attrs on button tag
expectError(
  <Button
    tagAttrs={{
      href: '/dashboard',
    }}
  >
    Button
  </Button>
)

// allowed sizing props
expectType(<Button inlineSize="5px">Button</Button>)
expectType(<Button minInlineSize="100px">Button</Button>)
expectType(<Button maxInlineSize="500px">Button</Button>)

// exposed state props
expectType(<Button selected>Button</Button>)
expectType(<Button loading>Button</Button>)
expectType(<Button ripple={false}>Button</Button>)
expectType(<Button elevated>Button</Button>)
expectType(<Button interactive={false}>Button</Button>)

// hidden Box props must NOT leak
expectError(<Button margin="5px">Button</Button>)
expectError(<Button padding="5px">Button</Button>)
expectError(<Button blockSize="5px">Button</Button>)
expectError(<Button borderRadius="10px">Button</Button>)
expectError(<Button display="block">Button</Button>)
expectError(<Button overflow="hidden">Button</Button>)
expectError(<Button position="absolute">Button</Button>)
expectError(<Button textAlign="center">Button</Button>)

// removed API regression protection
expectError(<Button justifyContent="center">Button</Button>)

// hidden Flex props must NOT leak
expectError(<Button gap="md">Button</Button>)
expectError(<Button flexDirection="row">Button</Button>)
