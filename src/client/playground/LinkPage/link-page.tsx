import { Image, Link, Paragraph } from 'lib/components'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'

import avatarImg from 'client/assets/avatar.jpg'

export const LinkPage = () => {
  return (
    <PlaygroundConfigurator>
      <PlaygroundScenario title="Text" props>
        <Link href="https://google.com">
          <Paragraph surfaceProps={{ size: 'm' }}>Link</Paragraph>
        </Link>
      </PlaygroundScenario>
      <PlaygroundScenario title="Text (new tab)" props>
        <Link href="https://google.com" target="_blank">
          <Paragraph surfaceProps={{ size: 'm' }}>Link</Paragraph>
        </Link>
      </PlaygroundScenario>
      <PlaygroundScenario title="Image (new tab)" props>
        <Link href={avatarImg} target="_blank">
          <Image src={avatarImg} nativeImgProps={{ width: '250px', height: '250px' }} />
        </Link>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
