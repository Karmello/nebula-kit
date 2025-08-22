import { Avatar } from 'lib/components'
import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'

import avatarImg from 'client/assets/avatar.jpg'

export const AvatarPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size']}>
      <PlaygroundScenario title="Default" props>
        <Avatar src={avatarImg + 'xyz'} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Custom" props>
        <Avatar src={avatarImg} />
      </PlaygroundScenario>
      <PlaygroundScenario title="With tooltip" props>
        <Avatar src={avatarImg} tooltipText="Miauuuuu :P" />
      </PlaygroundScenario>
      <PlaygroundScenario title="With link" props>
        <Avatar src={avatarImg} linkProps={{ href: avatarImg, target: '_blank' }} />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
