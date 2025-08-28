import { SidePanelLayoutOwnProps } from './side-panel-layout'

export const getToggleIconName = (
  sidePosition: SidePanelLayoutOwnProps['sidePosition'],
  sideOpen: boolean
) => {
  return sidePosition === 'left'
    ? sideOpen
      ? 'panel-right-open'
      : 'panel-left-open'
    : sideOpen
      ? 'panel-left-open'
      : 'panel-right-open'
}
