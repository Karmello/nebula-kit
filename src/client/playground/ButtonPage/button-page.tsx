import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { Box, Button, Flex, SvgIcon, Text, WithIcon } from 'lib-2/components'

export const ButtonPage = () => {
  return (
    <PlaygroundConfigurator
      surfaceConfigProps={['size', 'backgroundColor', 'disabled', 'loading', 'selected']}
      hasSurfaceInterface
    >
      <PlaygroundScenario title="Solid" props>
        <div style={{ display: 'flex', gap: '5px' }}>
          <Button variant="solid" intent="neutral">
            Neutral
          </Button>
          <Button variant="solid" intent="primary">
            Primary
          </Button>
          <Button variant="solid" intent="secondary">
            Secondary
          </Button>
          <Button variant="solid" intent="tertiary">
            Tertiary
          </Button>
          <Button variant="solid" intent="success">
            Success
          </Button>
          <Button variant="solid" intent="info">
            Info
          </Button>
          <Button variant="solid" intent="warning">
            Warning
          </Button>
          <Button variant="solid" intent="danger">
            Danger
          </Button>
          <Button variant="solid" intent="inverse">
            Inverse
          </Button>
        </div>
      </PlaygroundScenario>
      <PlaygroundScenario title="Outline" props>
        <div style={{ display: 'flex', gap: '5px' }}>
          <Button variant="outline" intent="neutral">
            Neutral
          </Button>
          <Button variant="outline" intent="primary">
            Primary
          </Button>
          <Button variant="outline" intent="secondary">
            Secondary
          </Button>
          <Button variant="outline" intent="tertiary">
            Tertiary
          </Button>
          <Button variant="outline" intent="success">
            Success
          </Button>
          <Button variant="outline" intent="info">
            Info
          </Button>
          <Button variant="outline" intent="warning">
            Warning
          </Button>
          <Button variant="outline" intent="danger">
            Danger
          </Button>
          <Button variant="outline" intent="inverse">
            Inverse
          </Button>
        </div>
      </PlaygroundScenario>
      <PlaygroundScenario title="Ghost" props>
        <div style={{ display: 'flex', gap: '5px' }}>
          <Button variant="ghost" intent="neutral">
            Neutral
          </Button>
          <Button variant="ghost" intent="primary">
            Primary
          </Button>
          <Button variant="ghost" intent="secondary">
            Secondary
          </Button>
          <Button variant="ghost" intent="tertiary">
            Tertiary
          </Button>
          <Button variant="ghost" intent="success">
            Success
          </Button>
          <Button variant="ghost" intent="info">
            Info
          </Button>
          <Button variant="ghost" intent="warning">
            Warning
          </Button>
          <Button variant="ghost" intent="danger">
            Danger
          </Button>
          <Button variant="ghost" intent="inverse">
            Inverse
          </Button>
        </div>
      </PlaygroundScenario>
      <PlaygroundScenario>
        <Box intent="tertiary">Hello World !</Box>
      </PlaygroundScenario>
      <PlaygroundScenario>
        <SvgIcon name="check" />
      </PlaygroundScenario>
      <PlaygroundScenario>
        <Button variant="solid" intent="primary" iconName="search" disabled>
          Search
        </Button>
      </PlaygroundScenario>
      <PlaygroundScenario>
        <Button variant="solid" intent="success" iconName="search" />
      </PlaygroundScenario>
      <PlaygroundScenario>
        <Text typography="h1">Text component h1</Text>
      </PlaygroundScenario>
      <PlaygroundScenario>
        <Text typography="body" iconName="search" iconPosition="right">
          Text component body
        </Text>
      </PlaygroundScenario>
      <PlaygroundScenario>
        <Text typography="h4" iconName="search" iconPosition="right">
          Text component h4
        </Text>
      </PlaygroundScenario>
      <PlaygroundScenario>
        <WithIcon iconName="search">WithIcon</WithIcon>
      </PlaygroundScenario>
      <PlaygroundScenario title="Flex">
        <Flex direction="row" />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
