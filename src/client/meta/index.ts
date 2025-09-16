import { ComponentMeta } from 'client/definitions'

import appFrameMeta from './app-frame.meta'
import boxMeta from './box.meta'
import buttonMeta from './button.meta'
import calloutMeta from './callout.meta'
import dividerMeta from './divider.meta'
import flexMeta from './flex.meta'
import gridMeta from './grid.meta'
import iconButtonMeta from './icon-button.meta'
import markerListMeta from './marker-list.meta'
import nativeElemMeta from './native-elem.meta'
import nebkitProviderMeta from './nebkit-provider.meta'
import sectionMeta from './section.meta'
import sidePanelLayoutMeta from './side-panel-layout.meta'
import spacerMeta from './spacer.meta'
import svgIconMeta from './svg-icon.meta'
import textMeta from './text.meta'
import withIconMeta from './with-icon.meta'

export default {
  'app-frame': appFrameMeta,
  box: boxMeta,
  button: buttonMeta,
  callout: calloutMeta,
  divider: dividerMeta,
  flex: flexMeta,
  grid: gridMeta,
  'icon-button': iconButtonMeta,
  'marker-list': markerListMeta,
  'native-elem': nativeElemMeta,
  'nebkit-provider': nebkitProviderMeta,
  section: sectionMeta,
  'side-panel-layout': sidePanelLayoutMeta,
  spacer: spacerMeta,
  'svg-icon': svgIconMeta,
  text: textMeta,
  'with-icon': withIconMeta,
} as Record<string, Record<string, ComponentMeta<unknown>>>
