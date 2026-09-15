import { BoxIntent } from 'lib/components/core/Box'
import {
  DEFAULT_SELECT_VARIANT,
  SELECT_VARIANT_MAP,
  SELECT_VARIANTS,
} from 'lib/components/core/Select/constants'

export const MULTI_SELECT_VARIANTS = SELECT_VARIANTS
export const MULTI_SELECT_VARIANT_MAP = SELECT_VARIANT_MAP

export const DEFAULT_MULTI_SELECT_INLINE_SIZE = '100%'
export const DEFAULT_MULTI_SELECT_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_MULTI_SELECT_VARIANT: (typeof MULTI_SELECT_VARIANTS)[number] =
  DEFAULT_SELECT_VARIANT
export const DEFAULT_MULTI_SELECT_VISIBLE_ITEMS_COUNT = 5
