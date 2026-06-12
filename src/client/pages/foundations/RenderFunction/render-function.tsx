import { Box, Spacer, Text } from 'lib/components'
import { CodeSnippet } from 'client/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        Render functions provide an alternative way to define children. Instead of passing elements directly, you pass a function
        that returns them. This pattern gives access to the component's internal context, allowing you to use its data or state
        when rendering children. For components with slots, it's always the root component that exposes this context through a
        render function.
      </Text>
      <Spacer />
      <Text>
        This approach makes components more flexible and expressive. It allows dynamic rendering based on runtime conditions,
        simplifies state sharing between parent and child and removes the need for extra wrapper components or prop drilling. It
        also keeps markup cleaner, since the logic for how and when elements appear lives alongside the data that drives them.
      </Text>
      <Spacer blockSize="24px" />
      <CodeSnippet
        lang="tsx"
        code={`<SplitView>
  {({ setSideOpen, mode }) => (
    <>
      <SplitView.Side>
        <Button
          tagAttrs={{
            onClick: () => {
              // auto-close side panel on button click
              if (mode === 'overlay') {
                await setSideOpen(false)
              }
              // navigate to different route when animation done
              ...
            },
          }}
        >
          Menu button
        </Button>
      </SplitView.Side>
      <SplitView.Main>
        <SplitView.MainBar>MainBar</SplitView.MainBar>
        Main
      </SplitView.Main>
    </>
  )}
</SplitView>`}
        description="Example"
      />
    </Box>
  )
}
