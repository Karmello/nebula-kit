import { useState } from 'react'

import { Tooltip, Input, Icon, Paragraph, Image } from 'lib/components'
import { EXAMPLE_SHORT_TEXT } from 'client/constants'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'

import avatarImg from 'client/assets/avatar.jpg'

export const TooltipPage = () => {
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <PlaygroundConfigurator surfaceConfigProps={['backgroundColor']} hasSurfaceInterface>
      <PlaygroundScenario title="Around paragraph" props>
        <Tooltip Content={() => <Paragraph>{EXAMPLE_SHORT_TEXT}</Paragraph>}>
          <Paragraph>{EXAMPLE_SHORT_TEXT}</Paragraph>
        </Tooltip>
      </PlaygroundScenario>
      <PlaygroundScenario title="Around an icon" props>
        <Tooltip Content={() => <Paragraph>{EXAMPLE_SHORT_TEXT}</Paragraph>}>
          <Icon name="smile" surfaceProps={{ size: 'xl', color: 'blue-4' }} />
        </Tooltip>
      </PlaygroundScenario>
      <PlaygroundScenario title="Around form input" props>
        <Tooltip Content={() => <Paragraph>{EXAMPLE_SHORT_TEXT}</Paragraph>} style={{ width: '100%' }}>
          <Input value={inputValue} onChange={setInputValue} />
        </Tooltip>
      </PlaygroundScenario>
      <PlaygroundScenario title="Around an image" props>
        <Tooltip Content={() => <Paragraph>{EXAMPLE_SHORT_TEXT}</Paragraph>}>
          <Image src={avatarImg} nativeImgProps={{ width: '250px', height: '250px' }} />
        </Tooltip>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
