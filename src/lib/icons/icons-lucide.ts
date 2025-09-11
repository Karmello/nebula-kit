import {
  Check,
  X,
  Search,
  Menu,
  PanelLeftOpen,
  PanelRightOpen,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Copy,
  CopyCheck,
} from 'lucide-react'

import { IconName, registerIcons } from './icon-registry'

const ICONS: Record<IconName, any> = {
  check: Check,
  close: X,
  search: Search,
  menu: Menu,
  'panel-left-open': PanelLeftOpen,
  'panel-right-open': PanelRightOpen,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  copy: Copy,
  'copy-check': CopyCheck,
}

registerIcons(ICONS)
