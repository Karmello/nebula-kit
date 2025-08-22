import { create } from 'zustand'

import { SurfaceConfig } from 'lib/components'
import { useStore } from 'lib/state'
import { Themes } from 'lib/enums'

import { RoutingCategoryKey, RoutingItemKey } from 'client/types'

import { DEFAULT_SURFACE_CONFIG } from './constants'

export type PlaygroundStore = {
  categoryKey: RoutingCategoryKey
  setCategoryKey: (categoryKey: RoutingCategoryKey) => void
  itemKey: RoutingItemKey
  setItemKey: (itemKey: RoutingItemKey) => void
  surfaceConfigEnabled: boolean
  toggleSurfaceConfigEnabled: (enabled: boolean) => void
  surfaceConfigOpen: boolean
  toggleSurfaceConfigOpen: (open: boolean) => void
  surfaceConfig: SurfaceConfig
  setSurfaceConfig: (options: SurfaceConfig) => void
  resetSurfaceConfig: (theme: Themes) => void
}

const theme = useStore.getState().theme

export const usePlaygroundStore = create<PlaygroundStore>(set => ({
  categoryKey: RoutingCategoryKey.primitive,
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  itemKey: RoutingItemKey.box,
  setItemKey: itemKey => set(() => ({ itemKey })),
  surfaceConfigEnabled: false,
  toggleSurfaceConfigEnabled: surfaceConfigEnabled => set(() => ({ surfaceConfigEnabled })),
  surfaceConfigOpen: false,
  toggleSurfaceConfigOpen: surfaceConfigOpen => set(() => ({ surfaceConfigOpen })),
  surfaceConfig: DEFAULT_SURFACE_CONFIG[theme],
  setSurfaceConfig: surfaceConfig => set(() => ({ surfaceConfig })),
  resetSurfaceConfig: theme => set(() => ({ surfaceConfig: DEFAULT_SURFACE_CONFIG[theme] })),
}))
