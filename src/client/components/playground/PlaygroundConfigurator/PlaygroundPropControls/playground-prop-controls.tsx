import { useTranslation } from 'react-i18next'

import { Box, Button, Divider, FlexContainer, FlexItem, Section } from 'lib/components'
import { useStore } from 'lib/state'
import { usePlaygroundStore } from 'client/store'

import { ClassesSection, ValuesSection } from './sections'
import type { PlaygroundConfiguratorProps } from '../playground-configurator'

export type PlaygroundPropControlsProps = Omit<PlaygroundConfiguratorProps, 'children'>

export const PlaygroundPropControls = ({ surfaceConfigProps }: PlaygroundPropControlsProps) => {
  const { t } = useTranslation()

  const { resetSurfaceConfig, toggleSurfaceConfigOpen } = usePlaygroundStore()
  const { theme } = useStore()

  return (
    <Box
      surfaceProps={{ padding: 'xl-micro' }}
      closeButtonProps={{ nativeButtonProps: { onClick: () => toggleSurfaceConfigOpen(false) } }}
    >
      <Section
        headingText={t('common.changeBasicProps')}
        iconName="settings"
        iconColor="blue-3"
        bottomDividerSize="xs-micro"
      >
        <ValuesSection surfaceConfigProps={surfaceConfigProps} />
        <ClassesSection surfaceConfigProps={surfaceConfigProps} />
        <Divider size="xxl-micro" />
        {surfaceConfigProps.length ? (
          <FlexContainer justifyContent="flex-end">
            <FlexItem>
              <Button
                surfaceProps={{ size: 's' }}
                nativeButtonProps={{ onClick: () => resetSurfaceConfig(theme) }}
              >
                Reset props
              </Button>
            </FlexItem>
          </FlexContainer>
        ) : null}
      </Section>
    </Box>
  )
}
