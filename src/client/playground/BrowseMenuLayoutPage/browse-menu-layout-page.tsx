import { useState } from 'react'

import { BrowseMenuLayout, Paragraph } from 'lib/components'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'

export const BrowseMenuLayoutPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  return (
    <PlaygroundConfigurator surfaceConfigProps={['size']}>
      <PlaygroundScenario title="Default" props>
        <BrowseMenuLayout
          buttons={[
            { children: 'Button 1' },
            { children: 'Button 2' },
            { children: 'Button 3' },
            { children: 'Button 4' },
            { children: 'Button 5' },
          ]}
          selectedIndex={selectedIndex}
          handleButtonClick={index => setSelectedIndex(index)}
        >
          <Paragraph>Here goes content specific to the selected button</Paragraph>
        </BrowseMenuLayout>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
