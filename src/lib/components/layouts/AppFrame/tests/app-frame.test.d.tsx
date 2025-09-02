import { expectType, expectError } from 'tsd'

import { AppFrame } from '../'

expectType(
  <AppFrame>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

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

expectError(<AppFrame />)

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
