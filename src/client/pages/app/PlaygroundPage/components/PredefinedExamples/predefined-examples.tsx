import { BoxProps, Button, Flex } from 'lib/components'

import { usePlaygroundStore } from '../../store'

const CONFIG: Record<string, object[]> = {
  Box: [
    {
      children: 'Interactive Box with solid variant and primary intent applied.',
      blockSize: '200px',
      borderRadius: '10px',
      color: 'blue',
      drawable: true,
      intent: 'primary',
      interactive: true,
      padding: '20px',
      variant: 'solid',
    },
  ] as BoxProps[],
}

export const PredefinedExamples = () => {
  const { components, activeComponent, setPropField } = usePlaygroundStore()

  if (!CONFIG[activeComponent]) return null

  const allProps = components[activeComponent].props

  return (
    <Flex columnGap="7px">
      {CONFIG[activeComponent].map((predefinedProps, index) => {
        return (
          <Button
            key={index}
            tagAttrs={{
              onClick: () => {
                Object.keys(allProps).forEach(propName => {
                  setPropField(activeComponent, propName, 'value', allProps[propName].defaultValue)
                })
                Object.keys(predefinedProps).forEach(propName => {
                  setPropField(activeComponent, propName, 'value', predefinedProps[propName as never])
                })
              },
            }}
            size="xs"
            intent="primary"
            color="blue"
          >
            Example {index + 1}
          </Button>
        )
      })}
    </Flex>
  )
}
