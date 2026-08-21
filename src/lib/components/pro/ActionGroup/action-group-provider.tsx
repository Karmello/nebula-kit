import { createContext, ReactNode, useContext, useState } from 'react'

type ContextValue = {
  itemSlots: ReactNode[]
  activeIndex: number
  setActiveIndex: (index: number) => void
}

const ActionGroupContext = createContext<ContextValue>({} as ContextValue)

export const ActionGroupProvider = ({
  children,
  itemSlots,
}: {
  children: ReactNode
  itemSlots: ReactNode[]
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <ActionGroupContext.Provider
      value={{
        itemSlots,
        activeIndex,
        setActiveIndex,
      }}
    >
      {children}
    </ActionGroupContext.Provider>
  )
}

export const useActionGroupContext = () => {
  return useContext(ActionGroupContext)
}
