import { createContext, useContext, ReactNode, RefObject } from 'react'

import { DropdownListProps } from '../definitions'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  animateVisible: boolean
  setAnimateVisible: (animateVisible: boolean) => void
  triggerRef: RefObject<HTMLElement | null>
  keepOpen: DropdownListProps['keepOpen']
  size: DropdownListProps['size']
  inlineSize: DropdownListProps['inlineSize']
  variant: DropdownListProps['variant']
  intent: DropdownListProps['intent']
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
  keepOpen,
  size,
  inlineSize,
  variant,
  intent,
}: ProviderProps) => {
  return (
    <DropdownListContext.Provider
      value={{
        open,
        setOpen,
        animateVisible,
        setAnimateVisible,
        triggerRef,
        keepOpen,
        size,
        inlineSize,
        variant,
        intent,
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
