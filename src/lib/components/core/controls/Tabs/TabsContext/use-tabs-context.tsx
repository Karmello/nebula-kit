import { RefObject, createContext, useContext } from 'react'

import { TabsProps } from '../definitions'

export type TabsContextValue = Pick<TabsProps, 'color' | 'intent' | 'size' | 'flexDirection'> & {
  rootRef: RefObject<HTMLDivElement>
  tabs: Array<{ value: TabsProps['value']; disabled: boolean }>
  currentValue: TabsProps['value']
  handleChange: (value: TabsProps['value']) => void
}

export const TabsContext = createContext<TabsContextValue>({} as TabsContextValue)

export const useTabsContext = () => useContext(TabsContext)
