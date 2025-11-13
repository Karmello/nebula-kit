import { createContext, useContext, ReactNode, RefObject } from 'react'

import { DropdownListProps } from '../definitions'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  animateVisible: boolean
  setAnimateVisible: (animateVisible: boolean) => void
  triggerRef: RefObject<HTMLElement | null>
  hoveredIndex: number
  setHoveredIndex: (hoveredIndex: number) => void
  keepOpen: DropdownListProps['keepOpen']
  size: DropdownListProps['size']
  variant: DropdownListProps['variant']
  color: DropdownListProps['color']
  intent: DropdownListProps['intent']
  blockMouse: boolean
  setBlockMouse: (blockMouse: boolean) => void
}

type ProviderProps = {
  children: ReactNode
} & Props

const DropdownListContext = createContext<Props | undefined>(undefined)

export const DropdownListProvider = ({
  children,
  open,
  setOpen,
  animateVisible,
  setAnimateVisible,
  triggerRef,
  hoveredIndex,
  setHoveredIndex,
  keepOpen,
  size,
  variant,
  color,
  intent,
  blockMouse,
  setBlockMouse,
}: ProviderProps) => {
  return (
    <DropdownListContext.Provider
      value={{
        open,
        setOpen,
        animateVisible,
        setAnimateVisible,
        triggerRef,
        hoveredIndex,
        setHoveredIndex,
        keepOpen,
        size,
        variant,
        color,
        intent,
        blockMouse,
        setBlockMouse,
      }}
    >
      {children}
    </DropdownListContext.Provider>
  )
}

export const useDropdownListContext = () => {
  const ctx = useContext(DropdownListContext)

  if (!ctx) {
    throw new Error('useDropdownListContext must be used within a DropdownListProvider')
  }

  return ctx
}
