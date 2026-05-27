import { createContext, useContext, ReactNode, RefObject, useState, useRef } from 'react'

import { FloatingResolved } from 'lib/internals/positioning'

import { type DropdownListProps } from '../../definitions'

type ProviderProps = { children: ReactNode } & ExternalProps

type ExternalProps = Pick<
  DropdownListProps,
  | 'keepOpen'
  | 'openOnFocus'
  | 'scrollToIndex'
  | 'scrollAlign'
  | 'disableListAnimation'
  | 'onClosed'
  | 'onOpened'
  | 'placement'
  | 'noOptionsLabel'
>

export type ProviderContextValue = {
  // refs
  triggerRef: RefObject<HTMLButtonElement>
  portalRef: RefObject<HTMLDivElement>
  scrollWrapperRef: RefObject<HTMLDivElement>
  // state
  open: boolean
  setOpen: (open: boolean) => void
  resizeVisible: boolean
  setResizeVisible: (visible: boolean) => void
  hoveredIndex: number
  setHoveredIndex: (index: number) => void
  ensureVisibleIndex: number | undefined
  setEnsureVisibleIndex: (index: number | undefined) => void
  blockMouse: boolean
  setBlockMouse: (block: boolean) => void
  floatingResolved: FloatingResolved | undefined
  setFloatingResolved: (resolved: FloatingResolved | undefined) => void
  // props
} & ExternalProps

const Context = createContext<ProviderContextValue | undefined>(undefined)

export const DropdownListProvider = ({
  children,
  // external props
  keepOpen,
  openOnFocus,
  scrollToIndex,
  scrollAlign,
  disableListAnimation,
  onClosed,
  onOpened,
  placement,
  noOptionsLabel,
}: ProviderProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)
  const scrollWrapperRef = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState<boolean>(false)
  const [resizeVisible, setResizeVisible] = useState<boolean>(false)
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1)
  const [ensureVisibleIndex, setEnsureVisibleIndex] = useState<number | undefined>(undefined)
  const [blockMouse, setBlockMouse] = useState<boolean>(false)
  const [floatingResolved, setFloatingResolved] = useState<FloatingResolved | undefined>(undefined)

  return (
    <Context.Provider
      value={{
        // ref
        triggerRef,
        portalRef,
        scrollWrapperRef,
        // state
        open,
        setOpen,
        resizeVisible,
        setResizeVisible,
        hoveredIndex,
        setHoveredIndex,
        ensureVisibleIndex,
        setEnsureVisibleIndex,
        blockMouse,
        setBlockMouse,
        floatingResolved,
        setFloatingResolved,
        // external props
        keepOpen,
        openOnFocus,
        scrollToIndex,
        scrollAlign,
        disableListAnimation,
        onClosed,
        onOpened,
        placement,
        noOptionsLabel,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useDropdownListContext = () => {
  return useContext(Context)
}
