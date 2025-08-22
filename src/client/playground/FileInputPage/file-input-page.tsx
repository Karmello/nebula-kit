import { useState } from 'react'

import { FileInput, FileInputProps } from 'lib/components'
import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'

const FileInputWrapper = (
  fileInputProps: Omit<FileInputProps, 'value' | 'onChange' | 'accept' | 'onAttach'>
) => {
  const [value, setValue] = useState<string>('')
  return <FileInput {...fileInputProps} value={value} onChange={setValue} />
}

export const FileInputPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']}>
      <PlaygroundScenario displayName="FileInput" title="Default" props>
        <FileInputWrapper />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
