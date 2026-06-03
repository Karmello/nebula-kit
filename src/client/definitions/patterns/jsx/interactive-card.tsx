import { useEffect, useState } from 'react'
import { Box, Divider, Spacer, Text, WithIcon } from '@nebula-kit/core'
import { Scale } from '@nebula-kit/pro'

export const InteractiveCard = () => {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    setVisible(false)
    setTimeout(() => {
      setVisible(true)
    })
  }, [])

  return (
    <Scale visible={visible}>
      <Box tag="button" drawable interactive variant="solid" intent="muted" color="amber" padding="lg" cursor="pointer">
        <WithIcon iconTypography="h4" iconName="orbit">
          <Text typography="h4">Interactive card</Text>
        </WithIcon>
        <Spacer blockSize="xs" />
        <Text>This is clickable card.</Text>
        <Divider marginBlock="xs" />
        <Text color="blue" intent="primary">
          Click to learn more
        </Text>
      </Box>
    </Scale>
  )
}
