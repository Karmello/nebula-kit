import { useTranslation } from 'react-i18next'

import { Checkbox, FlexContainer, Section } from 'lib/components'
import { usePlaygroundStore } from 'client/store'

import { PlaygroundPropControlsProps } from '../../playground-prop-controls'

export const ClassesSection = ({ surfaceConfigProps }: PlaygroundPropControlsProps) => {
  const { t } = useTranslation()

  const { surfaceConfig, setSurfaceConfig } = usePlaygroundStore()

  if (!['disabled', 'focusable', 'loading', 'selected'].some(s => surfaceConfigProps.includes(s as never))) {
    return null
  }

  return (
    <Section
      headingText={t('common.classes')}
      surfaceProps={{ size: 's' }}
      topDividerSize="m-micro"
      bottomDividerSize="xs"
    >
      <FlexContainer vGapSize="xxl-micro" hGapSize="m-micro" alignItems="center">
        {surfaceConfigProps.map(optionName => {
          if (['disabled', 'focusable', 'loading', 'selected'].includes(optionName)) {
            return (
              <Checkbox
                key={optionName}
                label={t(`common.${optionName}`)}
                value={surfaceConfig[optionName] as boolean}
                onChange={value => setSurfaceConfig({ ...surfaceConfig, [optionName]: value })}
                surfaceProps={{ size: 's' }}
              />
            )
          }
          return null
        })}
      </FlexContainer>
    </Section>
  )
}
