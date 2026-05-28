import { useEffect, useState } from 'react'

import { ActionSurface, Divider, Scale, Spacer, Text, WithIcon } from 'lib/components'

import { Pattern } from '../../definitions'

const InteractiveCard = () => {
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

export const INTERACTIVE_CARD: Pattern = {
  id: 'interactive-card',
  category: 'Cards',
  title: 'Interactive card',
  description:
    'A clickable card can be composed from **ActionSurface** and layout primitives while keeping content structure fully authored by the user.',
  jsx: <InteractiveCard />,
  code: `import { useEffect, useState } from 'react'
import { ActionSurface, Divider, Scale, Spacer, Text, WithIcon } from 'lib/components'

const InteractiveCard = () => {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    setVisible(false)
    setTimeout(() => {
      setVisible(true)
    })
  }, [])

  return (
    <Scale visible={visible} axis="x">
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
}`,
}
