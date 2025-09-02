import { expectType, expectError } from 'tsd'

import { AppFrame } from '../'

expectError(<AppFrame />)

expectType(
  <AppFrame>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

expectError(
  <AppFrame x={100}>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)

expectType(
  <AppFrame stickyHeader>
    <AppFrame.Main>main</AppFrame.Main>
  </AppFrame>
)
