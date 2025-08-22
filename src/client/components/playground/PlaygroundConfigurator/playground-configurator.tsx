import { cloneElement, ReactElement, useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'
import isArray from 'lodash/isArray'

import { SurfaceConfig, Paragraph, ScrollTopButton, FlexContainer, Divider } from 'lib/components'
import { useStore } from 'lib/state'
import { usePlaygroundStore } from 'client/store'

import { PlaygroundPropControls } from './PlaygroundPropControls'
import { PlaygroundScenarioProps } from '../PlaygroundScenario'

export type PlaygroundConfiguratorProps = {
  children: ReactElement<PlaygroundScenarioProps> | ReactElement<PlaygroundScenarioProps>[]
  surfaceConfigProps?: (keyof SurfaceConfig)[]
  hasSurfaceInterface?: boolean
  scrollTopButton?: boolean
}

export const PlaygroundConfigurator = ({
  children,
  surfaceConfigProps = [],
  hasSurfaceInterface = false,
  scrollTopButton = false,
}: PlaygroundConfiguratorProps) => {
  const { t } = useTranslation()

  const { theme } = useStore()

  const {
    categoryKey,
    surfaceConfigOpen,
    toggleSurfaceConfigOpen,
    resetSurfaceConfig,
    surfaceConfigEnabled,
    toggleSurfaceConfigEnabled,
  } = usePlaygroundStore()

  useLayoutEffect(() => {
    toggleSurfaceConfigOpen(false)
  }, [theme, categoryKey])

  useLayoutEffect(() => {
    if (!surfaceConfigOpen) {
      resetSurfaceConfig(theme)
    }
  }, [surfaceConfigOpen, theme])

  useLayoutEffect(() => {
    if (surfaceConfigEnabled !== !!surfaceConfigProps.length) {
      toggleSurfaceConfigEnabled(!!surfaceConfigProps.length)
    }
  }, [surfaceConfigProps])

  return (
    <>
      {surfaceConfigOpen ? (
        <>
          {surfaceConfigProps.length ? (
            <PlaygroundPropControls surfaceConfigProps={surfaceConfigProps} />
          ) : (
            <Paragraph surfaceProps={{ color: 'red-3' }}>{t('common.noConfiguration')}</Paragraph>
          )}
          <Divider size="m" />
        </>
      ) : null}
      {isArray(children)
        ? children.map((child, key) => cloneElement(child, { key, surfaceConfigProps, hasSurfaceInterface }))
        : cloneElement(children, { surfaceConfigProps, hasSurfaceInterface })}
      {scrollTopButton ? (
        <FlexContainer justifyContent="center">
          <ScrollTopButton />
        </FlexContainer>
      ) : null}
    </>
  )
}
