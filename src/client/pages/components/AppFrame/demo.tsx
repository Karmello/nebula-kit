import { Box, AppFrame, Text } from 'lib/components'

export default () => {
  return (
    <Box variant="outline" borderRadius={0} elemProps={{ style: { borderStyle: 'dashed' } }}>
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
    </Box>
  )
}
