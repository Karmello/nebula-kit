import { createContext, useContext, ReactNode, RefObject, useLayoutEffect } from 'react'

import { DropdownListProps } from '../../definitions'

type ContextValue = {
  // refs
  triggerRef: RefObject<HTMLElement | null>
  portalRef: RefObject<HTMLDivElement | null>
  scrollWrapperRef: RefObject<HTMLDivElement | null>
  // slots
  slotsByName: Record<string, ReactNode[]>
  // state
  open: boolean
  setOpen: (open: boolean) => void
  resizeVisible: boolean
  setResizeVisible: (resizeVisible: boolean) => void
  hoveredIndex: number
  setHoveredIndex: (hoveredIndex: number) => void
  blockMouse: boolean
  setBlockMouse: (blockMouse: boolean) => void
  defaultResolvedVisibleItemsCount: DropdownListProps['visibleItemsCount']
  resolvedVisibleItemsCount: DropdownListProps['visibleItemsCount']
  setResolvedVisibleItemsCount: (resolvedVisibleItemsCount: DropdownListProps['visibleItemsCount']) => void
  resolvedPlacement: DropdownListProps['placement']
  setResolvedPlacement: (resolvedPlacement: DropdownListProps['placement']) => void
} & Omit<DropdownListProps, 'children' | 'tagAttrs' | 'tagRef'>

type ProviderProps = {
  children: ReactNode
} & ContextValue

const DropdownListContext = createContext<ContextValue>({} as ContextValue)

export const DropdownListProvider = ({ children, ...rest }: ProviderProps) => {
  useLayoutEffect(() => {
    rest.setResolvedVisibleItemsCount(rest.defaultResolvedVisibleItemsCount)
  }, [rest.defaultResolvedVisibleItemsCount])

  return <DropdownListContext.Provider value={rest}>{children}</DropdownListContext.Provider>
}

export const useDropdownListContext = () => {
  return useContext(DropdownListContext)
}
