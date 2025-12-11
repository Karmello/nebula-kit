import { create } from 'zustand'

export type PlaygroundStore = {
  componentName: string
  setComponentName: (componentName: string) => void
  propsEditorValues: object
  setPropsEditorValues: (propsEditorValues: object) => void
}

export const usePlaygroundStore = create<PlaygroundStore>()(set => ({
  componentName: 'Box',
  setComponentName: (componentName: string) => set({ componentName }),
  propsEditorValues: {},
  setPropsEditorValues: (propsEditorValues: object) => set({ propsEditorValues }),
}))
