import { createContext, useContext } from 'react'

import { TableProps } from 'lib/components'

type TableContextValue = Pick<TableProps, 'color' | 'intent' | 'paddingBlock' | 'paddingInline' | 'textAlign'>

export const TableContext = createContext<TableContextValue>({})

export const useTableContext = () => useContext(TableContext)
