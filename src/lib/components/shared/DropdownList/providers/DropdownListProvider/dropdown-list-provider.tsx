import { createContext, useContext, ReactNode, RefObject, useState, useRef, useEffect } from 'react'

import { FloatingResolved } from 'lib/internals/positioning'

import { type DropdownListPlacement, type DropdownListProps } from '../../definitions'

type ProviderProps = { children: ReactNode } & ExternalProps

type ExternalProps = Pick<
  DropdownListProps,
  | 'state'
  | 'onStateChange'
  | 'keepOpen'
  | 'openOnFocus'
  | 'scrollToIndex'
  | 'scrollAlign'
  | 'disableListAnimation'
  | 'onClosed'
  | 'onOpened'
  | 'placement'
  | 'noOptionsLabel'
  | 'color'
  | 'intent'
>

export type ProviderContextValue = {
  // refs
  triggerRef: RefObject<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement | null>
  portalRef: RefObject<HTMLDivElement | null>
  scrollWrapperRef: RefObject<HTMLDivElement | null>
  // state
  internalOpen: boolean
  setInternalOpen: (internalOpen: boolean) => void
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

const Context = createContext<ProviderContextValue>({} as ProviderContextValue)

export const DropdownListProvider = ({
  children,
  // external props
  state,
  onStateChange,
  keepOpen,
  openOnFocus,
  scrollToIndex,
  scrollAlign,
  disableListAnimation,
  onClosed,
  onOpened,
  placement,
  noOptionsLabel,
  color,
  intent,
}: ProviderProps) => {
  const triggerRef = useRef<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)
  const scrollWrapperRef = useRef<HTMLDivElement>(null)

  const [internalOpen, setInternalOpen] = useState<boolean>(state?.open || false)
  const [resizeVisible, setResizeVisible] = useState<boolean>(false)
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1)
  const [ensureVisibleIndex, setEnsureVisibleIndex] = useState<number | undefined>(undefined)
  const [blockMouse, setBlockMouse] = useState<boolean>(false)
  const [floatingResolved, setFloatingResolved] = useState<FloatingResolved | undefined>(undefined)

  useEffect(() => {
    onStateChange?.({ open: internalOpen, placement: floatingResolved?.placement as DropdownListPlacement })
  }, [internalOpen, floatingResolved?.placement])

  useEffect(() => {
    if (state?.open !== undefined) setInternalOpen(state?.open)
  }, [state?.open])

  return (
    <Context.Provider
      value={{
        // ref
        triggerRef,
        portalRef,
        scrollWrapperRef,
        // state
        internalOpen,
        setInternalOpen,
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
        color,
        intent,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useDropdownListContext = () => {
  return useContext(Context)
}
