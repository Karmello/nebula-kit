import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { LIB_PREFIX } from 'lib/definitions'

import { getInitialState, State, PlaygroundView } from './get-initial-state'

type Store = State & {
  setView: (view: PlaygroundView) => void
  setActiveComponent: (activeComponent: string) => void
  setActiveProp: (activeProp: string) => void
  setPropField: (component: string, prop: string, field: string, value: unknown) => void
}

export const usePlaygroundStore = create<Store>()(
  persist(
    set => ({
      ...getInitialState(),
      setView: (view: PlaygroundView) => set(state => ({ ...state, view })),
      setActiveComponent: (activeComponent: string) => set(state => ({ ...state, activeComponent })),
      setActiveProp: (activeProp: string) =>
        set(state => ({
          ...state,
          components: {
            ...state.components,
            [state.activeComponent]: {
              ...state.components[state.activeComponent],
              activeProp,
            },
          },
        })),
      setPropField: (component: string, prop: string, field: string, value: unknown) =>
        set(state => ({
          ...state,
          components: {
            ...state.components,
            [component]: {
              ...state.components[component],
              props: {
                ...state.components[component].props,
                [prop]: {
                  ...state.components[component].props[prop],
                  [field]: value,
                },
              },
            },
          },
        })),
    }),
    {
      name: `${LIB_PREFIX}.playground`,
    }
  )
)
