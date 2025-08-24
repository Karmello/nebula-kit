import { BoxCssVars, FlexCssVars, GridCssVars, ClusterCssVars, NavLayoutCssVars } from 'lib/definitions'

export const LIB_PREFIX = 'neb'

export const BREAKPOINTS = ['base', 'sm', 'md', 'lg', 'xl'] as const

export const SCALE = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
] as const

export const BOX_VARIANTS = ['solid', 'outline', 'ghost'] as const

export const BOX_INTENTS = [
  'neutral',
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'danger',
  'inverse',
] as const

export const BOX_CSS_VARS: BoxCssVars = {
  fontSize: 'inherit',
  lineHeight: 'normal',
  textAlign: 'initial',
  blockSize: 'auto',
  minBlockSize: 'auto',
  maxBlockSize: 'auto',
  inlineSize: 'auto',
  minInlineSize: 'auto',
  maxInlineSize: 'auto',
  p: 0,
  pb: 0,
  pl: 0,
  pr: 0,
  pt: 0,
  px: 0,
  py: 0,
  m: 0,
  mb: 0,
  ml: 0,
  mr: 0,
  mt: 0,
  mx: 0,
  my: 0,
}

export const FLEX_CSS_VARS: FlexCssVars = {
  direction: 'row',
  wrap: 'nowrap',
  justify: 'flex-start',
  align: 'flex-start',
  gap: 0,
  rowGap: 0,
  columnGap: 0,
}

export const GRID_CSS_VARS: GridCssVars = {
  columns: '1fr',
  rows: 'auto',
  gap: 0,
  rowGap: 0,
  columnGap: 0,
  autoFlow: 'row',
  autoRows: 'auto',
  autoColumns: 'auto',
  placeItems: 'stretch',
  placeContent: 'start',
}

export const CLUSTER_CSS_VARS: ClusterCssVars = {
  minItemWidth: 'auto',
}

export const NAV_LAYOUT_CSS_VARS: NavLayoutCssVars = {
  sideWidth: 80,
}

export const CSS_VARS_CONFIG = {
  box: BOX_CSS_VARS,
  flex: FLEX_CSS_VARS,
  grid: GRID_CSS_VARS,
  cluster: CLUSTER_CSS_VARS,
  'nav-layout': NAV_LAYOUT_CSS_VARS,
}
