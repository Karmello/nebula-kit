import { Check, X, Search, Menu, PanelLeftOpen, PanelRightOpen, ChevronDown, ChevronUp } from 'lucide-react'

import { registerIcons } from './icon-registry'

registerIcons({
  check: Check,
  close: X,
  search: Search,
  menu: Menu,
  'panel-left-open': PanelLeftOpen,
  'panel-right-open': PanelRightOpen,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
} as never)
