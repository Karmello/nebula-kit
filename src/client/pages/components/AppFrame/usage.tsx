import { CodeSnippet } from 'client/components'

export default () => {
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
