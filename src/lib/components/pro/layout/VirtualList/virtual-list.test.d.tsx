import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { VirtualList } from '../VirtualList'

// -------------------------------------
// required props
// -------------------------------------

expectType(<VirtualList items={['a', 'b']} itemHeight={40} visibleItemsCount={5} renderItem={item => item} />)

expectError(<VirtualList />)

expectError(<VirtualList items={['a']} visibleItemsCount={5} renderItem={item => item} />)

expectError(<VirtualList items={['a']} itemHeight={40} renderItem={item => item} />)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} />)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(<VirtualList unknown="v" items={['a']} itemHeight={40} visibleItemsCount={5} renderItem={item => item} />)

// -------------------------------------
// root tag contract
// -------------------------------------

expectError(<VirtualList tag="section" items={['a']} itemHeight={40} visibleItemsCount={5} renderItem={item => item} />)

// -------------------------------------
// tag attrs
// -------------------------------------

expectType(
  <VirtualList
    items={['a']}
    itemHeight={40}
    visibleItemsCount={5}
    renderItem={item => item}
    tagAttrs={{
      id: 'list',
      onScroll: () => null,
    }}
  />
)

// invalid div attrs
expectError(
  <VirtualList
    items={['a']}
    itemHeight={40}
    visibleItemsCount={5}
    renderItem={item => item}
    tagAttrs={{
      href: '/x',
    }}
  />
)

// -------------------------------------
// refs
// -------------------------------------

expectType(
  <VirtualList
    items={['a']}
    itemHeight={40}
    visibleItemsCount={5}
    renderItem={item => item}
    tagRef={createRef<HTMLDivElement>()}
  />
)

expectError(
  <VirtualList
    items={['a']}
    itemHeight={40}
    visibleItemsCount={5}
    renderItem={item => item}
    tagRef={createRef<HTMLButtonElement>()}
  />
)

// -------------------------------------
// generics
// -------------------------------------

expectType(
  <VirtualList<{ id: number; label: string }>
    items={[
      { id: 1, label: 'A' },
      { id: 2, label: 'B' },
    ]}
    itemHeight={40}
    visibleItemsCount={5}
    renderItem={(item, index) => {
      expectType<number>(item.id)
      expectType<string>(item.label)
      expectType<number>(index)

      return item.label
    }}
  />
)

// -------------------------------------
// items
// -------------------------------------

expectType(<VirtualList items={[]} itemHeight={40} visibleItemsCount={5} renderItem={item => item} />)

expectError(<VirtualList items="wrong" itemHeight={40} visibleItemsCount={5} renderItem={item => item} />)

// -------------------------------------
// itemHeight
// -------------------------------------

expectType(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} renderItem={item => item} />)

expectError(<VirtualList items={['a']} itemHeight="40px" visibleItemsCount={5} renderItem={item => item} />)

// non-responsive
expectError(<VirtualList items={['a']} itemHeight={{ md: 40 }} visibleItemsCount={5} renderItem={item => item} />)

// -------------------------------------
// visibleItemsCount
// -------------------------------------

expectType(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} renderItem={item => item} />)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount="5" renderItem={item => item} />)

// non-responsive
expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={{ md: 5 }} renderItem={item => item} />)

// -------------------------------------
// overscan
// -------------------------------------

expectType(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} overscan={10} renderItem={item => item} />)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} overscan="10" renderItem={item => item} />)

// -------------------------------------
// scroll indexes
// -------------------------------------

expectType(
  <VirtualList
    items={['a']}
    itemHeight={40}
    visibleItemsCount={5}
    scrollToIndex={0}
    ensureVisibleIndex={2}
    renderItem={item => item}
  />
)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} scrollToIndex="0" renderItem={item => item} />)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} ensureVisibleIndex="2" renderItem={item => item} />)

// -------------------------------------
// scroll align
// -------------------------------------

expectType(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} scrollAlign="start" renderItem={item => item} />)

expectType(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} scrollAlign="center" renderItem={item => item} />)

expectType(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} scrollAlign="end" renderItem={item => item} />)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} scrollAlign="wrong" renderItem={item => item} />)

// non-responsive
expectError(
  <VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} scrollAlign={{ md: 'center' }} renderItem={item => item} />
)

// -------------------------------------
// color
// -------------------------------------

expectType(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} color="blue" renderItem={item => item} />)

expectType(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} color={{ md: 'red' }} renderItem={item => item} />)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} color="wrong" renderItem={item => item} />)

// -------------------------------------
// intent
// -------------------------------------

expectType(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} intent="primary" renderItem={item => item} />)

expectType(
  <VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} intent={{ lg: 'inverse' }} renderItem={item => item} />
)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} intent="wrong" renderItem={item => item} />)

// -------------------------------------
// elevated
// -------------------------------------

expectType(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} elevated renderItem={item => item} />)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} elevated="true" renderItem={item => item} />)

// non-responsive
expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} elevated={{ md: true }} renderItem={item => item} />)

// -------------------------------------
// hidden primitive leakage
// -------------------------------------

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} renderItem={item => item} gap="md" />)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} renderItem={item => item} flex="1" />)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} renderItem={item => item} padding="md" />)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} renderItem={item => item} variant="solid" />)

expectError(<VirtualList items={['a']} itemHeight={40} visibleItemsCount={5} renderItem={item => item} fullWidth />)
