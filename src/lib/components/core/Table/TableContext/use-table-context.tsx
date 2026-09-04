import { createContext, useContext } from 'react'

import type { TableProps } from '../types'

type TableContextValue = Pick<
  TableProps,
  'color' | 'intent' | 'paddingBlock' | 'paddingInline' | 'textAlign'
>

export const TableContext = createContext<TableContextValue>({})

export const useTableContext = () => useContext(TableContext)
