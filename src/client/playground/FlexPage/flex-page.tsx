import { FlexContainerProps } from 'lib/components'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { Box, Flex, Stack } from 'lib-2/components'

const Content = () => <div style={{ width: '150px', height: '40px' }} />

const flexContainerProps: Partial<FlexContainerProps> = {
  flexWrap: 'wrap',
  backgroundColor: 'var(--box-default-background-color)',
}

const flexItemProps = { border: 'var(--border-width) dashed var(--blue-5)' }

export const FlexPage = () => {
  return (
    <PlaygroundConfigurator>
      <PlaygroundScenario title="Flex">
        <Box style={{ outline: '1px solid red' }} p={{ base: 8, md: 16 }} />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
