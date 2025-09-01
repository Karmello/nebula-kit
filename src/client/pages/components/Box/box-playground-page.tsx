import { Box } from 'lib/components'

const BoxPlaygroundPage = () => {
  return (
    <Box variant="outline" intent="info" padding={{ sm: 15 }}>
      Box parent
      <Box variant="outline" intent="danger">
        Box child
      </Box>
    </Box>
  )
}

export default BoxPlaygroundPage
