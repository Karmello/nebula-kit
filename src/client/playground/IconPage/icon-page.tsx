import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'
import { FlexGroup, Icon, IconProps } from 'lib/components'

const Icons = (iconProps?: Partial<IconProps>) => {
  return (
    <FlexGroup size={iconProps.surfaceProps?.size || 'm'}>
      <Icon {...iconProps} name="thumbs up" />
      <Icon {...iconProps} name="idea" />
      <Icon {...iconProps} name="setting" />
      <Icon {...iconProps} name="hourglass" />
      <Icon {...iconProps} name="bar" />
    </FlexGroup>
  )
}

export const IconPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'color', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario displayName="Icon" props>
        <Icons />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
