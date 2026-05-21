import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Floating } from '../Floating'

// -------------------------------------
// required props
// -------------------------------------

const anchorRef = createRef<HTMLElement>()

expectType(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300}>
    Floating
  </Floating>
)

expectType(
  <Floating anchorRef={anchorRef} mode="fit-y" floatingBlockSize={400}>
    Floating
  </Floating>
)

expectError(<Floating />)

expectError(
  <Floating mode="project-both" minInlineSize={100} maxInlineSize={300}>
    Floating
  </Floating>
)

expectError(<Floating anchorRef={anchorRef}>Floating</Floating>)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} unknown="v">
    Floating
  </Floating>
)

// -------------------------------------
// anchorRef
// -------------------------------------

expectType(
  <Floating anchorRef={createRef<HTMLElement>()} mode="project-both" minInlineSize={100} maxInlineSize={300}>
    Floating
  </Floating>
)

// -------------------------------------
// project modes
// -------------------------------------

expectType(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300}>
    Floating
  </Floating>
)

expectType(
  <Floating anchorRef={anchorRef} mode="project-x" minInlineSize={100} maxInlineSize={300}>
    Floating
  </Floating>
)

expectType(
  <Floating anchorRef={anchorRef} mode="project-y" minInlineSize={100} maxInlineSize={300}>
    Floating
  </Floating>
)

// required project props
expectError(
  <Floating anchorRef={anchorRef} mode="project-both">
    Floating
  </Floating>
)

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100}>
    Floating
  </Floating>
)

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" maxInlineSize={300}>
    Floating
  </Floating>
)

// forbidden project props
expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} floatingBlockSize={400}>
    Floating
  </Floating>
)

// -------------------------------------
// fit modes
// -------------------------------------

expectType(
  <Floating anchorRef={anchorRef} mode="fit-x" floatingBlockSize={400}>
    Floating
  </Floating>
)

expectType(
  <Floating anchorRef={anchorRef} mode="fit-y" floatingBlockSize={400}>
    Floating
  </Floating>
)

// required fit props
expectError(
  <Floating anchorRef={anchorRef} mode="fit-x">
    Floating
  </Floating>
)

// forbidden fit props
expectError(
  <Floating anchorRef={anchorRef} mode="fit-x" floatingBlockSize={400} minInlineSize={100} maxInlineSize={300}>
    Floating
  </Floating>
)

// -------------------------------------
// invalid mode
// -------------------------------------

expectError(
  <Floating anchorRef={anchorRef} mode="wrong" minInlineSize={100} maxInlineSize={300}>
    Floating
  </Floating>
)

// non-responsive
expectError(
  <Floating anchorRef={anchorRef} mode={{ md: 'project-both' }} minInlineSize={100} maxInlineSize={300}>
    Floating
  </Floating>
)

// -------------------------------------
// placement
// -------------------------------------

expectType(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} placement="top-start">
    Floating
  </Floating>
)

expectType(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} placement="left-end">
    Floating
  </Floating>
)

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} placement="center">
    Floating
  </Floating>
)

// -------------------------------------
// numeric props
// -------------------------------------

expectType(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} offset={10} viewportPadding={20}>
    Floating
  </Floating>
)

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize="100" maxInlineSize={300}>
    Floating
  </Floating>
)

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize="300">
    Floating
  </Floating>
)

expectError(
  <Floating anchorRef={anchorRef} mode="fit-y" floatingBlockSize="400">
    Floating
  </Floating>
)

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} offset="10">
    Floating
  </Floating>
)

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} viewportPadding="20">
    Floating
  </Floating>
)

// -------------------------------------
// onResolve
// -------------------------------------

expectType(
  <Floating
    anchorRef={anchorRef}
    mode="project-both"
    minInlineSize={100}
    maxInlineSize={300}
    onResolve={resolved => {
      expectType<
        | 'top-start'
        | 'top-center'
        | 'top-end'
        | 'right-start'
        | 'right-center'
        | 'right-end'
        | 'bottom-start'
        | 'bottom-center'
        | 'bottom-end'
        | 'left-start'
        | 'left-center'
        | 'left-end'
      >(resolved.placement)

      expectType<number | undefined>(resolved.blockSize)
    }}
  >
    Floating
  </Floating>
)

expectError(
  <Floating
    anchorRef={anchorRef}
    mode="project-both"
    minInlineSize={100}
    maxInlineSize={300}
    onResolve={(resolved: string) => null}
  >
    Floating
  </Floating>
)

// -------------------------------------
// hidden primitive leakage
// -------------------------------------

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} color="blue">
    Floating
  </Floating>
)

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} intent="primary">
    Floating
  </Floating>
)

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} variant="solid">
    Floating
  </Floating>
)

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} padding="md">
    Floating
  </Floating>
)

expectError(
  <Floating anchorRef={anchorRef} mode="project-both" minInlineSize={100} maxInlineSize={300} tag="div">
    Floating
  </Floating>
)
