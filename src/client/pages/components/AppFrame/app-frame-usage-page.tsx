import { CodeSnippet } from 'client/components'

const AppFrameUsagePage = () => {
  return (
    <CodeSnippet
      code={`
<AppFrame stickyHeader>
  <AppFrame.Header intent="tertiary">
    ...
  </AppFrame.Header>
  <AppFrame.Main paddingTop={{ base: 5, lg: 20 }} paddingBottom={40}>
    ...
  </AppFrame.Main>
  <AppFrame.Footer intent="tertiary">
    ...
  </AppFrame.Footer>
</AppFrame>
    `}
    />
  )
}

export default AppFrameUsagePage
