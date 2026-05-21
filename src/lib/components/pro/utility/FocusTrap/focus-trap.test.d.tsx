import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { FocusTrap } from '../FocusTrap'

// -------------------------------------
// required props
// -------------------------------------

const tagRef = createRef<HTMLDivElement>()

expectType(
  <FocusTrap active tagRef={tagRef}>
    Focus trap
  </FocusTrap>
)

expectError(<FocusTrap />)

expectError(<FocusTrap tagRef={tagRef}>Focus trap</FocusTrap>)

expectError(<FocusTrap active>Focus trap</FocusTrap>)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(
  <FocusTrap active tagRef={tagRef} unknown="v">
    Focus trap
  </FocusTrap>
)

// -------------------------------------
// active
// -------------------------------------

expectType(
  <FocusTrap active tagRef={tagRef}>
    Focus trap
  </FocusTrap>
)

expectError(
  <FocusTrap active="true" tagRef={tagRef}>
    Focus trap
  </FocusTrap>
)

// non-responsive
expectError(
  <FocusTrap active={{ md: true }} tagRef={tagRef}>
    Focus trap
  </FocusTrap>
)

// -------------------------------------
// tagRef
// -------------------------------------

expectType(
  <FocusTrap active tagRef={createRef<HTMLDivElement>()}>
    Focus trap
  </FocusTrap>
)

expectType(
  <FocusTrap active tagRef={createRef<HTMLElement>()}>
    Focus trap
  </FocusTrap>
)

// -------------------------------------
// disableEscapeOnOutsideClick
// -------------------------------------

expectType(
  <FocusTrap active tagRef={tagRef} disableEscapeOnOutsideClick>
    Focus trap
  </FocusTrap>
)

expectError(
  <FocusTrap active tagRef={tagRef} disableEscapeOnOutsideClick="true">
    Focus trap
  </FocusTrap>
)

// non-responsive
expectError(
  <FocusTrap active tagRef={tagRef} disableEscapeOnOutsideClick={{ md: true }}>
    Focus trap
  </FocusTrap>
)

// -------------------------------------
// onFocusEscape
// -------------------------------------

expectType(
  <FocusTrap active tagRef={tagRef} onFocusEscape={() => null}>
    Focus trap
  </FocusTrap>
)

expectError(
  <FocusTrap active tagRef={tagRef} onFocusEscape={(value: boolean) => null}>
    Focus trap
  </FocusTrap>
)

// -------------------------------------
// children
// -------------------------------------

expectType(
  <FocusTrap active tagRef={tagRef}>
    <>Fragment</>
  </FocusTrap>
)

expectType(
  <FocusTrap active tagRef={tagRef}>
    {null}
  </FocusTrap>
)

// -------------------------------------
// hidden primitive leakage
// -------------------------------------

expectError(
  <FocusTrap active tagRef={tagRef} color="blue">
    Focus trap
  </FocusTrap>
)

expectError(
  <FocusTrap active tagRef={tagRef} intent="primary">
    Focus trap
  </FocusTrap>
)

expectError(
  <FocusTrap active tagRef={tagRef} variant="solid">
    Focus trap
  </FocusTrap>
)

expectError(
  <FocusTrap active tagRef={tagRef} padding="md">
    Focus trap
  </FocusTrap>
)

expectError(
  <FocusTrap active tagRef={tagRef} tag="div">
    Focus trap
  </FocusTrap>
)
