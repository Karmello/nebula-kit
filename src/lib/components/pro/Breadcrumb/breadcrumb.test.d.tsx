import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Breadcrumb } from '../Breadcrumb'

// -------------------------------------
// required props
// -------------------------------------

expectType(<Breadcrumb tree={[]} />)

expectError(<Breadcrumb />)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(<Breadcrumb tree={[]} unknown="v" />)

// -------------------------------------
// polymorphic tags
// -------------------------------------

// default div attrs
expectType(
  <Breadcrumb
    tree={[]}
    tagAttrs={{
      onClick: () => null,
    }}
  />
)

// nav attrs
expectType(
  <Breadcrumb
    tree={[]}
    tag="nav"
    tagAttrs={{
      'aria-label': 'Breadcrumb',
    }}
  />
)

// section attrs
expectType(
  <Breadcrumb
    tree={[]}
    tag="section"
    tagAttrs={{
      id: 'breadcrumb',
    }}
  />
)

// invalid div attrs
expectError(
  <Breadcrumb
    tree={[]}
    tagAttrs={{
      href: '/x',
    }}
  />
)

// invalid tag
expectError(<Breadcrumb tree={[]} tag="article" />)

// -------------------------------------
// refs
// -------------------------------------

expectType(<Breadcrumb tree={[]} tagRef={createRef<HTMLDivElement>()} />)

expectType(<Breadcrumb tree={[]} tag="nav" tagRef={createRef<HTMLElement>()} />)

expectType(<Breadcrumb tree={[]} tag="section" tagRef={createRef<HTMLElement>()} />)

// -------------------------------------
// tree
// -------------------------------------

expectType(
  <Breadcrumb
    tree={[
      {
        label: 'Home',
        value: 'home',
      },
    ]}
  />
)

expectType(
  <Breadcrumb
    tree={[
      {
        label: 'Home',
        value: 'home',
        children: [
          {
            label: 'Settings',
            value: 'settings',
          },
        ],
      },
    ]}
  />
)

expectError(<Breadcrumb tree="wrong" />)

expectError(
  <Breadcrumb
    tree={[
      {
        value: 'home',
      },
    ]}
  />
)

expectError(
  <Breadcrumb
    tree={[
      {
        label: 'Home',
      },
    ]}
  />
)

// -------------------------------------
// path
// -------------------------------------

expectType(<Breadcrumb tree={[]} path={['home', 'settings']} />)

expectError(<Breadcrumb tree={[]} path="home" />)

// -------------------------------------
// defaultPath
// -------------------------------------

expectType(<Breadcrumb tree={[]} defaultPath={['home']} />)

expectError(<Breadcrumb tree={[]} defaultPath="home" />)

// -------------------------------------
// onChange
// -------------------------------------

expectType(
  <Breadcrumb
    tree={[]}
    onChange={path => {
      expectType<string[]>(path)
    }}
  />
)

expectType(<Breadcrumb tree={[]} onChange={() => null} />)

// -------------------------------------
// color
// -------------------------------------

expectType(<Breadcrumb tree={[]} color="blue" />)

expectType(<Breadcrumb tree={[]} color="red" />)

expectError(<Breadcrumb tree={[]} color="wrong" />)

expectError(<Breadcrumb tree={[]} color={{ md: 'wrong' }} />)

// -------------------------------------
// intent
// -------------------------------------

expectType(<Breadcrumb tree={[]} intent="neutral" />)

expectType(<Breadcrumb tree={[]} intent="primary" />)

expectType(<Breadcrumb tree={[]} intent="inverse" />)

expectError(<Breadcrumb tree={[]} intent="wrong" />)

expectError(<Breadcrumb tree={[]} intent={{ md: 'wrong' }} />)

// -------------------------------------
// size
// -------------------------------------

expectType(<Breadcrumb tree={[]} size="xs" />)

expectType(<Breadcrumb tree={[]} size="sm" />)

expectType(<Breadcrumb tree={[]} size="md" />)

expectType(<Breadcrumb tree={[]} size="lg" />)

expectType(<Breadcrumb tree={[]} size="xl" />)

// non-responsive
expectError(<Breadcrumb tree={[]} size={{ md: 'lg' }} />)

// -------------------------------------
// hidden primitive leakage
// -------------------------------------

expectError(<Breadcrumb tree={[]} gap="md" />)

expectError(<Breadcrumb tree={[]} padding="md" />)

expectError(<Breadcrumb tree={[]} margin="md" />)

expectError(<Breadcrumb tree={[]} flex="1" />)

expectError(<Breadcrumb tree={[]} variant="solid" />)

expectError(<Breadcrumb tree={[]} inlineSize="md" />)
