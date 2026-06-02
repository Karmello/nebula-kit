import { createContext, RefObject, useContext } from 'react'

import { TabsProps } from '../definitions'

export type TabsContextValue = Pick<TabsProps, 'color' | 'intent' | 'size' | 'orientation'> & {
  rootRef: RefObject<HTMLDivElement | null>
  tabs: Array<{ value: string | number; disabled: boolean }>
  currentValue: TabsProps['value']
  handleChange: (value: string | number) => void
}

export const TabsContext = createContext<TabsContextValue>({} as TabsContextValue)

export const useTabsContext = () => useContext(TabsContext)
