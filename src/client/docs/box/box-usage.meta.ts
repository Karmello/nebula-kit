import { ComponentUsageMeta } from 'lib/definitions'

const BOX_USAGE_META: ComponentUsageMeta = [
  {
    heading: 'Example 1',
    code: `
<AppFrame stickyHeader>
  <AppFrame.Header>
    <AppNavBar />
  </AppFrame.Header>
  <AppFrame.Main mt={10}>
    <RootPage />
  </AppFrame.Main>
</AppFrame>`,
  },
]

export default BOX_USAGE_META
