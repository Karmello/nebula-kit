import { JSX, SVGProps } from 'react'

import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleAlert,
  X,
  Copy,
  CopyCheck,
  ExternalLink,
  Info,
  ListChevronsDownUp,
  ListChevronsUpDown,
  Menu,
  PanelLeftOpen,
  PanelRightOpen,
  Search,
  TriangleAlert,
} from 'lucide-react'

import { IconName } from 'lib/definitions'

export const ICONS: Record<IconName, any> = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  check: Check,
  'check-circle': CheckCircle,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  'circle-alert': CircleAlert,
  close: X,
  copy: Copy,
  'copy-check': CopyCheck,
  'external-link': ExternalLink,
  info: Info,
  'list-chevrons-down-up': ListChevronsDownUp,
  'list-chevrons-up-down': ListChevronsUpDown,
  menu: Menu,
  'panel-left-open': PanelLeftOpen,
  'panel-right-open': PanelRightOpen,
  search: Search,
  'triangle-alert': TriangleAlert,
}

export const getSvgIconComponent = (name: IconName): ((props: SVGProps<SVGElement>) => JSX.Element) => {
  return ICONS[name]
}
