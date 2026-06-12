import { useEffect, useState } from 'react'
import { Box, Divider, Spacer, Text, Title } from '@nebula-kit/core'
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
      <Box tag="button" interactive ripple variant="solid" intent="muted" color="amber" padding="48px" cursor="pointer">
        <Title typography="h4" iconName="orbit">
          Interactive card
        </Title>
        <Spacer blockSize="8px" />
        <Text>This is clickable card.</Text>
        <Divider marginBlock="8px" />
        <Text color="blue" intent="primary">
          Click to learn more
        </Text>
      </Box>
    </Scale>
  )
}
