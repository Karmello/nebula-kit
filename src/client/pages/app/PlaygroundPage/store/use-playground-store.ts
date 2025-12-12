import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { LIB_PREFIX } from 'lib/definitions'

import { getInitialState } from './get-initial-state'
import { PlaygroundView, State } from './definitions'

type Store = State & {
  setView: (view: PlaygroundView) => void
  setActiveComponent: (activeComponent: string) => void
  setActiveSlot: (activeSlot: string) => void
  setActiveProp: (componentName: string, activeProp: string) => void
  setPropField: (component: string, prop: string, field: string, value: unknown) => void
  //
  getActiveSlot: () => string | null
  getNoSlotComponentNames: () => string[]
  getActiveComponentSlotNames: () => string[]
}

export const usePlaygroundStore = create<Store>()(
  persist(
    (set, get) => ({
      ...getInitialState(),
      setView: (view: PlaygroundView) => set(state => ({ ...state, view })),
      setActiveComponent: (activeComponent: string) => set(state => ({ ...state, activeComponent })),
      setActiveSlot: (activeSlot: string) =>
        set(state => ({
          ...state,
          components: {
            ...state.components,
            [state.activeComponent]: {
              ...state.components[state.activeComponent],
              activeSlot,
            },
          },
        })),
      setActiveProp: (componentName: string, activeProp: string) =>
        set(state => ({
          ...state,
          components: {
            ...state.components,
            [componentName]: {
              ...state.components[componentName],
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
      getActiveSlot: () => {
        const state = get()
        if (!state.activeComponent) return null
        return state.components[state.activeComponent].activeSlot
      },
      getNoSlotComponentNames: () => {
        const state = get()
        return Object.keys(state.components).filter(name => !name.includes('.'))
      },
      getActiveComponentSlotNames: () => {
        const state = get()
        return state.activeComponent
          ? Object.keys(state.components).filter(name => name.includes(`${state.activeComponent}.`))
          : []
      },
    }),
    {
      name: `${LIB_PREFIX}.playground`,
    }
  )
)
