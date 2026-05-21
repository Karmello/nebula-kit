import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Pagination } from '../Pagination'

// -------------------------------------
// required props
// -------------------------------------

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} />)

expectError(<Pagination />)

expectError(<Pagination totalPages={10} onChange={() => null} />)

expectError(<Pagination currentPage={1} onChange={() => null} />)

expectError(<Pagination currentPage={1} totalPages={10} />)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} unknown="v" />)

// -------------------------------------
// root tag contract
// -------------------------------------

expectError(<Pagination tag="div" currentPage={1} totalPages={10} onChange={() => null} />)

// -------------------------------------
// tag attrs
// -------------------------------------

expectType(
  <Pagination
    currentPage={1}
    totalPages={10}
    onChange={() => null}
    tagAttrs={{
      'aria-label': 'Pagination',
      onClick: () => null,
    }}
  />
)

// invalid nav attrs
expectError(
  <Pagination
    currentPage={1}
    totalPages={10}
    onChange={() => null}
    tagAttrs={{
      href: '/x',
    }}
  />
)

// -------------------------------------
// refs
// -------------------------------------

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} tagRef={createRef<HTMLElement>()} />)

// -------------------------------------
// currentPage
// -------------------------------------

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} />)

expectError(<Pagination currentPage="1" totalPages={10} onChange={() => null} />)

// non-responsive
expectError(<Pagination currentPage={{ md: 1 }} totalPages={10} onChange={() => null} />)

// -------------------------------------
// totalPages
// -------------------------------------

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} />)

expectError(<Pagination currentPage={1} totalPages="10" onChange={() => null} />)

// non-responsive
expectError(<Pagination currentPage={1} totalPages={{ md: 10 }} onChange={() => null} />)

// -------------------------------------
// boundaryCount
// -------------------------------------

expectType(<Pagination currentPage={1} totalPages={10} boundaryCount={2} onChange={() => null} />)

expectError(<Pagination currentPage={1} totalPages={10} boundaryCount="2" onChange={() => null} />)

// -------------------------------------
// siblingCount
// -------------------------------------

expectType(<Pagination currentPage={1} totalPages={10} siblingCount={2} onChange={() => null} />)

expectError(<Pagination currentPage={1} totalPages={10} siblingCount="2" onChange={() => null} />)

// -------------------------------------
// booleans
// -------------------------------------

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} disabled />)

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} showFirstLast />)

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} showPrevNext />)

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} disabled="true" />)

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} showFirstLast="true" />)

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} showPrevNext="true" />)

// non-responsive
expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} disabled={{ md: true }} />)

// -------------------------------------
// hrefBuilder
// -------------------------------------

expectType(
  <Pagination
    currentPage={1}
    totalPages={10}
    onChange={() => null}
    hrefBuilder={page => {
      expectType<number>(page)

      return `/page/${page}`
    }}
  />
)

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} hrefBuilder={() => 123} />)

// -------------------------------------
// onChange
// -------------------------------------

expectType(
  <Pagination
    currentPage={1}
    totalPages={10}
    onChange={page => {
      expectType<number>(page)
    }}
  />
)

expectError(<Pagination currentPage={1} totalPages={10} onChange={(page: string) => null} />)

// -------------------------------------
// color
// -------------------------------------

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} color="blue" />)

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} color={{ md: 'red' }} />)

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} color="wrong" />)

// -------------------------------------
// intent
// -------------------------------------

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} intent="neutral" />)

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} intent={{ lg: 'inverse' }} />)

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} intent="wrong" />)

// -------------------------------------
// variant
// -------------------------------------

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} variant="solid" />)

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} variant={{ md: 'outline' }} />)

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} variant="wrong" />)

// -------------------------------------
// size
// -------------------------------------

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} size="2xs" />)

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} size="xs" />)

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} size="sm" />)

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} size="md" />)

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} size="lg" />)

expectType(<Pagination currentPage={1} totalPages={10} onChange={() => null} size="xl" />)

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} size="2xl" />)

// non-responsive
expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} size={{ md: 'lg' }} />)

// -------------------------------------
// hidden primitive leakage
// -------------------------------------

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} gap="md" />)

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} padding="md" />)

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} margin="md" />)

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} flex="1" />)

expectError(<Pagination currentPage={1} totalPages={10} onChange={() => null} inlineSize="md" />)
