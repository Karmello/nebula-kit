import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'
import { ImageCropper } from 'lib/components'

import gianna from 'client/assets/gianna.jpg'

const IMAGE_SIZE = 250

export const ImageCropperPage = () => {
  return (
    <PlaygroundConfigurator>
      <PlaygroundScenario title="Default" props>
        <ImageCropper size={IMAGE_SIZE} src={gianna} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Rounded" props>
        <ImageCropper size={IMAGE_SIZE} src={gianna} rounded />
      </PlaygroundScenario>
      <PlaygroundScenario title="Zoomed in" props>
        <ImageCropper size={IMAGE_SIZE} src={gianna} rounded zoom={2} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Zoomed out" props>
        <ImageCropper size={IMAGE_SIZE} src={gianna} rounded zoom={0.25} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Zoomed out and rotated" props>
        <ImageCropper size={IMAGE_SIZE} src={gianna} rounded zoom={0.25} rotation={90} />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
