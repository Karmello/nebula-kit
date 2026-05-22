import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { LIB_PREFIX } from 'lib/definitions'

import { getInitialState } from './get-initial-state'
import { PropValue, State } from './definitions'

type Store = State & {
  setDisplayProps: (displayProps: boolean) => void
  setActiveComponent: (activeComponent: string) => void
  setActiveProp: (componentName: string, activeProp: string) => void
  setPropField: (componentName: string, prop: string, field: string, value: unknown) => void
  getPropValues: (componentName: string) => Record<string, PropValue>
}

export const usePlaygroundStore = create<Store>()(
  persist(
    (set, get) => ({
      ...getInitialState(),
      setDisplayProps: (displayProps: boolean) => set(state => ({ ...state, displayProps })),
      setActiveComponent: (activeComponent: string) => set(state => ({ ...state, activeComponent })),
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
      setPropField: (componentName: string, prop: string, field: string, value: unknown) =>
        set(state => ({
          ...state,
          components: {
            ...state.components,
            [componentName]: {
              ...state.components[componentName],
              props: {
                ...state.components[componentName].props,
                [prop]: {
                  ...state.components[componentName].props[prop],
                  [field]: value,
                },
              },
            },
          },
        })),
      getPropValues: (componentName: string) => {
        const state = get()
        const { props } = state.components[componentName]

        const parsedValues: Record<string, PropValue> = {}

        Object.keys(props).forEach(propName => {
          const { value } = props[propName]
          if (value !== undefined && value !== '') {
            parsedValues[propName] = props[propName].value
          }
        })

        return parsedValues
      },
    }),
    {
      name: `${LIB_PREFIX}.playground`,
    }
  )
)
