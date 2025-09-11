import { SidePanelLayoutProps } from './definitions'

export const getToggleIconName = (sidePosition: SidePanelLayoutProps['sidePosition'], sideOpen: boolean) => {
  return sidePosition === 'left'
    ? sideOpen
      ? 'panel-right-open'
      : 'panel-left-open'
    : sideOpen
      ? 'panel-left-open'
      : 'panel-right-open'
}
