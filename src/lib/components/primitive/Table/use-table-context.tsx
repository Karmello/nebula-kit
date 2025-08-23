import { createContext, useContext } from 'react'

import { TableOwnProps } from 'lib/components'

type TableContextValue = { variant?: TableOwnProps['variant']; intent?: TableOwnProps['intent'] }

export const TableContext = createContext<TableContextValue>({})

export const useTableContext = () => useContext(TableContext)
