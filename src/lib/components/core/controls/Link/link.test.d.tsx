import { expectType, expectError } from 'tsd'

import { Link } from '../Link'
import { Button } from '../Button'
import { Image } from '../../base/Image'
import { Text } from '../../base/Text'

// required props
expectType(
  <Link href="/dashboard">
    <Button>Dashboard</Button>
  </Link>
)

// children are required
expectError(<Link href="/dashboard" />)

// href is required
expectError(
  <Link>
    <Button>Dashboard</Button>
  </Link>
)

// href must be string
expectError(
  <Link href={123}>
    <Button>Dashboard</Button>
  </Link>
)

// target values
expectType(
  <Link href="/dashboard" target="_self">
    <Button>Dashboard</Button>
  </Link>
)

expectType(
  <Link href="/dashboard" target="_blank">
    <Button>Dashboard</Button>
  </Link>
)

expectType(
  <Link href="/dashboard" target="_parent">
    <Button>Dashboard</Button>
  </Link>
)

expectType(
  <Link href="/dashboard" target="_top">
    <Button>Dashboard</Button>
  </Link>
)

// invalid target
expectError(
  <Link href="/dashboard" target="blank">
    <Button>Dashboard</Button>
  </Link>
)

// Button child
expectType(
  <Link href="/dashboard">
    <Button intent="primary">Dashboard</Button>
  </Link>
)

// Text child
expectType(
  <Link href="/docs">
    <Text intent="primary">Docs</Text>
  </Link>
)

// Image child
expectType(
  <Link href="/image">
    <Image src="/logo.png" alt="Logo" />
  </Link>
)

// plain content is allowed as ReactNode
expectType(<Link href="/plain">Plain link</Link>)

// onClick allowed
expectType(
  <Link
    href="/dashboard"
    onClick={e => {
      expectType<React.MouseEvent<HTMLAnchorElement>>(e)
    }}
  >
    <Button>Dashboard</Button>
  </Link>
)

// onClick must be function
expectError(
  <Link href="/dashboard" onClick="click">
    <Button>Dashboard</Button>
  </Link>
)

// responsive props are not exposed
expectError(
  <Link href="/dashboard" target={{ base: '_self', md: '_blank' }}>
    <Button>Dashboard</Button>
  </Link>
)

// hidden Box/Button/Text props must not leak
expectError(
  <Link href="/dashboard" intent="primary">
    <Button>Dashboard</Button>
  </Link>
)

expectError(
  <Link href="/dashboard" variant="solid">
    <Button>Dashboard</Button>
  </Link>
)

expectError(
  <Link href="/dashboard" color="blue">
    <Button>Dashboard</Button>
  </Link>
)

expectError(
  <Link href="/dashboard" tagAttrs={{ className: 'x' }}>
    <Button>Dashboard</Button>
  </Link>
)

expectError(
  <Link href="/dashboard" tagRef={null}>
    <Button>Dashboard</Button>
  </Link>
)
