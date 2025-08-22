import { Loader, LoaderProps } from 'lib/components'
import { PlaygroundScenario, PlaygroundConfigurator, PlaygroundArea } from 'client/components'

const LoaderWrapper = (loaderProps: LoaderProps) => {
  return (
    <PlaygroundArea style={{ width: '100%', height: '150px' }}>
      <Loader {...loaderProps} />
    </PlaygroundArea>
  )
}

LoaderWrapper.displayName = 'Loader'

export const LoaderPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'loading']} hasSurfaceInterface>
      <PlaygroundScenario title="Default" props>
        <LoaderWrapper surfaceProps={{ loading: true }} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Vertically centered" props>
        <LoaderWrapper surfaceProps={{ loading: true }} verticallyCentered />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
