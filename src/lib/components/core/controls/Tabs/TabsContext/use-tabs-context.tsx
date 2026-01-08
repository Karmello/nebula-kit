import { createContext, useContext } from 'react'

import { TabsProps } from '../definitions'

type TabsContextValue = Pick<TabsProps, 'color' | 'intent'> & {
  currentValue?: TabsProps['value']
}

export const TabsContext = createContext<TabsContextValue>({})

export const useTabsContext = () => useContext(TabsContext)
