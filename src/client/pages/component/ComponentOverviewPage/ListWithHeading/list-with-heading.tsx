import {
  Box,
  HorizontalRule,
  MarkerList,
  Markup,
  NEB_LENGTH,
  Spacer,
  Text,
  Title,
} from 'lib/components'

export const ListWithHeading = ({ heading, items }: { heading: string; items: string[] }) => (
  <Box drawable overflowX="auto" overflowY="hidden" maxInlineSize="100%">
    <Title typography="h6">{heading}</Title>
    <HorizontalRule marginTop={NEB_LENGTH.px_004} />
    <Spacer blockSize={NEB_LENGTH.px_004} />
    <MarkerList>
      {items.map((s, i) => (
        <MarkerList.Item key={i}>
          <Markup>
            <Text>{s}</Text>
          </Markup>
        </MarkerList.Item>
      ))}
    </MarkerList>
  </Box>
)
