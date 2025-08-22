import { useState } from 'react'

import { PlaygroundConfigurator, PlaygroundScenario, PlaygroundArea } from 'client/components'
import { POPOVER_VISIBLE_OPTIONS_MAX, Popover, PopoverProps, PopoverOptionType } from 'lib/components'

const getOptions = (length: number, checkBox = false): PopoverOptionType[] =>
  Array.from({ length }, (v, k) => ({
    value: `option-${k + 1}`,
    text: `Option ${k + 1}`,
    checkBox,
  }))

const OPTIONS_WITH_ICONS: PopoverOptionType[] = [
  { value: 'new', text: 'New', iconName: 'write' },
  { value: 'open', text: 'Open', iconName: 'share square' },
  { value: 'save', text: 'Save', iconName: 'check' },
  { value: 'close', text: 'Close', iconName: 'close' },
]

const PopoverWrapper = (popoverProps: Omit<PopoverProps, 'children' | 'open' | 'setOpen' | 'onChange'>) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Popover {...popoverProps} open={open} setOpen={setOpen} onChange={() => null}>
      <PlaygroundArea
        style={{
          width: '100%',
          height: '45px',
          cursor: 'pointer',
        }}
        tabIndex={0}
      />
    </Popover>
  )
}

export const PopoverPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']} hasSurfaceInterface scrollTopButton>
      <PlaygroundScenario displayName="Popover" title="No options" props>
        <PopoverWrapper values={['']} options={[]} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Popover" title="Single option" props>
        <PopoverWrapper values={['']} options={getOptions(1)} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Popover" title="Less than max visible options" props>
        <PopoverWrapper values={['']} options={getOptions(3)} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Popover" title="Exactly as max visible options" props>
        <PopoverWrapper values={['']} options={getOptions(POPOVER_VISIBLE_OPTIONS_MAX)} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Popover" title="More than max visible options" props>
        <PopoverWrapper values={['']} options={getOptions(POPOVER_VISIBLE_OPTIONS_MAX * 2)} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Popover" title="Single option selected" props>
        <PopoverWrapper values={['option-5']} options={getOptions(POPOVER_VISIBLE_OPTIONS_MAX * 2)} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Popover" title="Multiple options selected" props>
        <PopoverWrapper
          values={['option-2', 'option-4', 'option-6']}
          options={getOptions(POPOVER_VISIBLE_OPTIONS_MAX * 2)}
        />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Popover" title="Selected option autoscroll disabled" props>
        <PopoverWrapper
          values={['option-2', 'option-4', 'option-6']}
          options={getOptions(POPOVER_VISIBLE_OPTIONS_MAX * 2)}
          selectedItemAutoScroll={false}
        />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Popover" title="Options with icons" props>
        <PopoverWrapper values={['']} options={OPTIONS_WITH_ICONS} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Popover" title="Checked options" props>
        <PopoverWrapper
          values={['option-1', 'option-3']}
          options={getOptions(POPOVER_VISIBLE_OPTIONS_MAX, true)}
        />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Popover" title="Closing on second click disabled" props>
        <PopoverWrapper values={['']} options={OPTIONS_WITH_ICONS} closeOnSecondClick={false} />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
