import { useTranslation } from 'react-i18next'

import { SurfaceConfig, FlexContainer, FlexItem, Section } from 'lib/components'
import { usePlaygroundStore } from 'client/store'

import { PlaygroundPropControlsProps } from '../../playground-prop-controls'
import { PaddingControl, SizeControl, ColorControl } from '../../controls'

const CONTROL_COMPONENTS: Record<
  Extract<keyof SurfaceConfig, 'padding' | 'size' | 'color' | 'backgroundColor'>,
  typeof ColorControl | typeof PaddingControl | typeof SizeControl
> = {
  padding: PaddingControl,
  size: SizeControl,
  color: ColorControl,
  backgroundColor: ColorControl,
}

const allowedProps = ['padding', 'size', 'color', 'backgroundColor']

export const ValuesSection = ({ surfaceConfigProps }: PlaygroundPropControlsProps) => {
  const { t } = useTranslation()

  const { surfaceConfig, setSurfaceConfig } = usePlaygroundStore()

  if (!allowedProps.some(s => surfaceConfigProps.includes(s as never))) {
    return null
  }

  return (
    <Section
      headingText={t('common.values')}
      surfaceProps={{ size: 's' }}
      topDividerSize="m-micro"
      bottomDividerSize="xs"
    >
      <FlexContainer flexWrap="wrap" vGapSize="xxl-micro" hGapSize="m-micro">
        {surfaceConfigProps.map(optionName => {
          const Component = CONTROL_COMPONENTS[optionName as never] as any
          if (!Component) return null
          return (
            <FlexItem key={optionName} flex={1} minWidth="130px" maxWidth="160px">
              <Component
                label={t(`common.${optionName}`)}
                value={surfaceConfig[optionName]}
                onChange={(value: never) => setSurfaceConfig({ ...surfaceConfig, [optionName]: value })}
              />
            </FlexItem>
          )
        })}
      </FlexContainer>
    </Section>
  )
}
