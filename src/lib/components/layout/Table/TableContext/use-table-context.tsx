import { createContext, useContext } from 'react'

import { TableProps } from 'lib/components'

type TableContextValue = Pick<TableProps, 'color' | 'intent' | 'layout'>

export const TableContext = createContext<TableContextValue>({})

export const useTableContext = () => useContext(TableContext)
