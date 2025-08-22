import { Image } from 'lib/components'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'

import ny1Img from 'client/assets/ny1.jpeg'
import ny2Img from 'client/assets/ny2.jpeg'
import avatarImg from 'client/assets/avatar.jpg'

export const ImagePage = () => {
  return (
    <PlaygroundConfigurator>
      <PlaygroundScenario title="Default" props>
        <Image src={ny2Img} nativeImgProps={{ width: '756px', height: '482px' }} />
      </PlaygroundScenario>
      <PlaygroundScenario title="No cache" props>
        <Image src={ny1Img} noCache nativeImgProps={{ width: '350px', height: '525px' }} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Rounded and bordered" props>
        <Image rounded bordered src={avatarImg} nativeImgProps={{ width: '250px', height: '250px' }} />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
