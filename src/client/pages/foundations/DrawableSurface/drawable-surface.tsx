import { Box, MarkerList, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>Only drawable Boxes participate in visual styling.</Text>
      <Spacer />
      <MarkerList>
        <MarkerList.Item>
          <Text>The drawable prop enables backgrounds, text color, variants and intents</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>Non-drawable Boxes are structural and visually neutral</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>Theme, brand, color, variant and intent apply only to drawable Boxes</Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer />
      <Text>This separation keeps layouts clean and reduces unnecessary styling work.</Text>
    </Box>
  )
}
