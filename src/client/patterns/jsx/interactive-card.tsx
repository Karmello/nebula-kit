import { useEffect, useState } from 'react'
import { Box, Divider, NEB_LENGTH, Spacer, Text, Title } from '@nebula-kit/core'
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
      <Box
        tag="button"
        interactive
        ripple
        bgMode="filled"
        intent="muted"
        color="amber"
        padding={NEB_LENGTH.px_048}
        cursor="pointer"
      >
        <Title typography="h4" iconName="orbit">
          Interactive card
        </Title>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>This is clickable card.</Text>
        <Divider marginBlock={NEB_LENGTH.px_008} />
        <Text color="blue" intent="primary">
          Click to learn more
        </Text>
      </Box>
    </Scale>
  )
}
