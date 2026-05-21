import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Dialog } from '../Dialog'

// -------------------------------------
// required props
// -------------------------------------

expectType(
  <Dialog open>
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

expectError(<Dialog />)

expectError(
  <Dialog>
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(
  <Dialog open unknown="v">
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// -------------------------------------
// root tag contract
// -------------------------------------

expectError(
  <Dialog tag="div" open>
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// -------------------------------------
// tag attrs
// -------------------------------------

expectType(
  <Dialog
    open
    tagAttrs={{
      id: 'dialog',
      onCancel: () => null,
    }}
  >
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// invalid dialog attrs
expectError(
  <Dialog
    open
    tagAttrs={{
      href: '/x',
    }}
  >
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// -------------------------------------
// refs
// -------------------------------------

expectType(
  <Dialog open tagRef={createRef<HTMLDialogElement>()}>
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

expectError(
  <Dialog open tagRef={createRef<HTMLDivElement>()}>
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// -------------------------------------
// open
// -------------------------------------

expectType(
  <Dialog open>
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

expectError(
  <Dialog open="true">
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// non-responsive
expectError(
  <Dialog open={{ md: true }}>
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// -------------------------------------
// closeOnBackdropClick
// -------------------------------------

expectType(
  <Dialog open closeOnBackdropClick>
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

expectError(
  <Dialog open closeOnBackdropClick="true">
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// non-responsive
expectError(
  <Dialog open closeOnBackdropClick={{ md: true }}>
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// -------------------------------------
// onClose
// -------------------------------------

expectType(
  <Dialog open onClose={() => null}>
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// -------------------------------------
// size
// -------------------------------------

expectType(
  <Dialog open size="sm">
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

expectType(
  <Dialog open size="md">
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

expectType(
  <Dialog open size="lg">
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

expectError(
  <Dialog open size="xl">
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// non-responsive
expectError(
  <Dialog open size={{ md: 'lg' }}>
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// -------------------------------------
// slots
// -------------------------------------

expectType(
  <Dialog open>
    <Dialog.Header>Header</Dialog.Header>
    <Dialog.Content>Content</Dialog.Content>
    <Dialog.Footer>Footer</Dialog.Footer>
  </Dialog>
)

expectType(
  <Dialog open>
    <Dialog.Content>Content</Dialog.Content>
  </Dialog>
)

// -------------------------------------
// Dialog.Header
// -------------------------------------

expectType(<Dialog.Header>Header</Dialog.Header>)

expectError(<Dialog.Header />)

// refs
expectType(<Dialog.Header tagRef={createRef<HTMLDivElement>()}>Header</Dialog.Header>)

expectError(<Dialog.Header tagRef={createRef<HTMLButtonElement>()}>Header</Dialog.Header>)

// hidden primitive leakage
expectError(<Dialog.Header padding="md">Header</Dialog.Header>)

expectError(<Dialog.Header variant="solid">Header</Dialog.Header>)

expectError(<Dialog.Header intent="primary">Header</Dialog.Header>)

// -------------------------------------
// Dialog.Content
// -------------------------------------

expectType(<Dialog.Content>Content</Dialog.Content>)

expectError(<Dialog.Content />)

// refs
expectType(<Dialog.Content tagRef={createRef<HTMLDivElement>()}>Content</Dialog.Content>)

expectError(<Dialog.Content tagRef={createRef<HTMLButtonElement>()}>Content</Dialog.Content>)

// hidden primitive leakage
expectError(<Dialog.Content padding="md">Content</Dialog.Content>)

expectError(<Dialog.Content variant="solid">Content</Dialog.Content>)

expectError(<Dialog.Content intent="primary">Content</Dialog.Content>)

// -------------------------------------
// Dialog.Footer
// -------------------------------------

expectType(<Dialog.Footer>Footer</Dialog.Footer>)

expectError(<Dialog.Footer />)

// refs
expectType(<Dialog.Footer tagRef={createRef<HTMLDivElement>()}>Footer</Dialog.Footer>)

expectError(<Dialog.Footer tagRef={createRef<HTMLButtonElement>()}>Footer</Dialog.Footer>)

// hidden primitive leakage
expectError(<Dialog.Footer padding="md">Footer</Dialog.Footer>)

expectError(<Dialog.Footer variant="solid">Footer</Dialog.Footer>)

expectError(<Dialog.Footer intent="primary">Footer</Dialog.Footer>)
