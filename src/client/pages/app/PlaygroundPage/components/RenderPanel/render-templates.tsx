import { FC } from 'react'

import { AppFrame } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const RENDER_TEMPLATES: Record<string, FC> = {
  AppFrame: () => {
    const { getPropValues } = usePlaygroundStore()

    const rootProps = getPropValues('AppFrame') as any
    const headerProps = getPropValues('AppFrame.Header') as any
    const mainProps = getPropValues('AppFrame.Main') as any
    const footerProps = getPropValues('AppFrame.Footer') as any

    return (
      <AppFrame {...rootProps}>
        <AppFrame.Header {...headerProps}>{headerProps.children}</AppFrame.Header>
        <AppFrame.Main {...mainProps}>{mainProps.children}</AppFrame.Main>
        <AppFrame.Footer {...footerProps}>{footerProps.children}</AppFrame.Footer>
      </AppFrame>
    )
  },
}
