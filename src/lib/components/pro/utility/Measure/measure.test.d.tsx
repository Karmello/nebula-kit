import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Measure } from '../Measure'

// -------------------------------------
// required props
// -------------------------------------

expectType(<Measure onMeasure={() => null}>Measure</Measure>)

expectError(<Measure />)

expectError(<Measure>Measure</Measure>)

expectError(<Measure onMeasure={() => null} />)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(
  <Measure onMeasure={() => null} unknown="v">
    Measure
  </Measure>
)

// -------------------------------------
// root tag contract
// -------------------------------------

expectError(
  <Measure tag="section" onMeasure={() => null}>
    Measure
  </Measure>
)

// -------------------------------------
// tag attrs
// -------------------------------------

expectType(
  <Measure
    onMeasure={() => null}
    tagAttrs={{
      id: 'measure',
      onClick: () => null,
    }}
  >
    Measure
  </Measure>
)

// invalid div attrs
expectError(
  <Measure
    onMeasure={() => null}
    tagAttrs={{
      href: '/x',
    }}
  >
    Measure
  </Measure>
)

// -------------------------------------
// refs
// -------------------------------------

expectType(
  <Measure onMeasure={() => null} tagRef={createRef<HTMLDivElement>()}>
    Measure
  </Measure>
)

expectError(
  <Measure onMeasure={() => null} tagRef={createRef<HTMLButtonElement>()}>
    Measure
  </Measure>
)

// -------------------------------------
// onMeasure
// -------------------------------------

expectType(
  <Measure
    onMeasure={size => {
      expectType<number>(size.blockSize)
      expectType<number>(size.inlineSize)
    }}
  >
    Measure
  </Measure>
)

expectError(<Measure onMeasure={(size: string) => null}>Measure</Measure>)

// -------------------------------------
// children
// -------------------------------------

expectType(
  <Measure onMeasure={() => null}>
    <>Fragment</>
  </Measure>
)

expectType(<Measure onMeasure={() => null}>{null}</Measure>)

expectType(<Measure onMeasure={() => null}>{false}</Measure>)

// -------------------------------------
// hidden primitive leakage
// -------------------------------------

expectError(
  <Measure onMeasure={() => null} color="blue">
    Measure
  </Measure>
)

expectError(
  <Measure onMeasure={() => null} intent="primary">
    Measure
  </Measure>
)

expectError(
  <Measure onMeasure={() => null} variant="solid">
    Measure
  </Measure>
)

expectError(
  <Measure onMeasure={() => null} padding="md">
    Measure
  </Measure>
)

expectError(
  <Measure onMeasure={() => null} margin="md">
    Measure
  </Measure>
)

expectError(
  <Measure onMeasure={() => null} gap="md">
    Measure
  </Measure>
)

expectError(
  <Measure onMeasure={() => null} flex="1">
    Measure
  </Measure>
)

expectError(
  <Measure onMeasure={() => null} inlineSize="md">
    Measure
  </Measure>
)
