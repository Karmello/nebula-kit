import { JSX, SVGProps } from 'react'

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
  Info,
  TriangleAlert,
  CheckCircle,
  CircleAlert,
  ExternalLink,
  ListChevronsDownUp,
  ListChevronsUpDown,
} from 'lucide-react'

import { IconName } from 'lib/definitions'

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
  info: Info,
  'triangle-alert': TriangleAlert,
  'check-circle': CheckCircle,
  'circle-alert': CircleAlert,
  'external-link': ExternalLink,
  'list-chevrons-down-up': ListChevronsDownUp,
  'list-chevrons-up-down': ListChevronsUpDown,
}

export const getSvgIconComponent = (name: IconName): ((props: SVGProps<SVGElement>) => JSX.Element) => {
  return ICONS[name]
}
