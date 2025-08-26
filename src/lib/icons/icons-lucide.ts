import { Check, X, Search, Menu, PanelLeftOpen, PanelRightOpen } from 'lucide-react'

import { registerIcons } from './icon-registry'

registerIcons({
  check: Check as never,
  close: X as never,
  search: Search as never,
  menu: Menu as never,
  'panel-left-open': PanelLeftOpen as never,
  'panel-right-open': PanelRightOpen as never,
})
