import { CodeSnippet } from 'client/components'
import { Box, AppFrame, Text, Spacer } from 'lib/components'
import { elemToStringService } from 'client/services'

const Example = (
  <AppFrame>
    <AppFrame.Header paddingTop={5} paddingLeft={5}>
      <Text>Header</Text>
    </AppFrame.Header>
    <AppFrame.Main paddingTop={5} paddingLeft={5}>
      <Text>Main</Text>
    </AppFrame.Main>
    <AppFrame.Footer paddingTop={5} paddingLeft={5}>
      <Text>Footer</Text>
    </AppFrame.Footer>
  </AppFrame>
)

export default () => {
  const elemToString = elemToStringService()

  return (
    <>
      <Box variant="outline" borderRadius={0} elemProps={{ style: { borderStyle: 'dashed' } }}>
        {Example}
      </Box>
      <Spacer size={30} />
      <CodeSnippet code={elemToString(Example)} />
    </>
  )
}
