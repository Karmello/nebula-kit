import { expectType, expectError } from 'tsd'
import { Snackbar, useSnackbar } from '../Snackbar'

//
// basic rendering
//

expectType(
  <Snackbar>
    <div />
  </Snackbar>
)

//
// responsive inherited props
//

expectType(
  <Snackbar inlineSize={{ base: '100%', lg: '400px' }}>
    <div />
  </Snackbar>
)

//
// intentionally NON-responsive props
//

expectError(
  <Snackbar placement={{ base: 'top-left' }}>
    <div />
  </Snackbar>
)

expectError(
  <Snackbar autoCloseDelay={{ base: 1000 }}>
    <div />
  </Snackbar>
)

//
// enum validation
//

expectError(
  <Snackbar placement="center">
    <div />
  </Snackbar>
)

//
// invalid responsive breakpoint keys
//

expectError(
  <Snackbar inlineSize={{ mobile: '400px' }}>
    <div />
  </Snackbar>
)

//
// hidden primitive leakage
//

expectError(
  <Snackbar margin="md">
    <div />
  </Snackbar>
)

expectError(
  <Snackbar padding="md">
    <div />
  </Snackbar>
)

expectError(
  <Snackbar gap="md">
    <div />
  </Snackbar>
)

expectError(
  <Snackbar flexDirection="column">
    <div />
  </Snackbar>
)

expectError(
  <Snackbar drawable>
    <div />
  </Snackbar>
)

expectError(
  <Snackbar variant="solid">
    <div />
  </Snackbar>
)

expectError(
  <Snackbar intent="primary">
    <div />
  </Snackbar>
)

//
// intentionally NOT exposed
//

expectError(
  <Snackbar tag="section">
    <div />
  </Snackbar>
)

expectError(
  <Snackbar tagAttrs={{ id: 'x' }}>
    <div />
  </Snackbar>
)

expectError(
  <Snackbar tagRef={null}>
    <div />
  </Snackbar>
)

//
// useSnackbar
//

const snackbar = useSnackbar()

if (snackbar) {
  expectType<
    (args: {
      content: string
      heading?: string
      placement?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
      status: 'info' | 'success' | 'warning' | 'error'
    }) => void
  >(snackbar.show)

  //
  // valid show calls
  //

  snackbar.show({
    status: 'info',
    content: 'Hello',
  })

  snackbar.show({
    status: 'success',
    content: 'Saved',
    heading: 'Success',
    placement: 'top-right',
  })

  //
  // invalid show calls
  //

  expectError(
    snackbar.show({
      content: 'Hello',
    })
  )

  expectError(
    snackbar.show({
      status: 'info',
    })
  )

  expectError(
    snackbar.show({
      status: 'danger',
      content: 'Hello',
    })
  )

  expectError(
    snackbar.show({
      status: 'info',
      content: 'Hello',
      placement: 'center',
    })
  )
}
