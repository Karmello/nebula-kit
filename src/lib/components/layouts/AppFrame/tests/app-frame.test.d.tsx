import { expectType, expectError } from 'tsd'

import { AppFrame } from '../'

// children required
expectError(<AppFrame />)

// children passed
expectType(
  <AppFrame>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

// custom tag not allowed
expectError(
  <AppFrame tag="span">
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

// allowed props
expectType(
  <AppFrame stickyHeader>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

expectType(
  <AppFrame>
    <AppFrame.Main padding={10}>main</AppFrame.Main>
  </AppFrame>
)

// invalid props
expectError(
  <AppFrame x={100}>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

expectError(
  <AppFrame>
    <AppFrame.Main margin={10}>main</AppFrame.Main>
  </AppFrame>
)
