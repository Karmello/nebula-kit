import { useEffect, useState } from 'react'

import { ActionSurface, Divider, Scale, Spacer, Text, WithIcon } from 'lib/components'

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
      <ActionSurface variant="solid" intent="muted" color="amber" padding="lg">
        <WithIcon iconTypography="h4" iconName="orbit">
          <Text typography="h4">Interactive card</Text>
        </WithIcon>
        <Spacer blockSize="xs" />
        <Text>This is clickable card.</Text>
        <Divider marginBlock="xs" />
        <Text color="blue" intent="primary">
          Click to learn more
        </Text>
      </ActionSurface>
    </Scale>
  )
}
