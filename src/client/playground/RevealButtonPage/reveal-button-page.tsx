import { useState } from 'react'

import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { RevealButton } from 'lib/components'

export const RevealButtonPage = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <PlaygroundConfigurator surfaceConfigProps={['size']}>
      <PlaygroundScenario props>
        <RevealButton open={open} setOpen={setOpen} />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
