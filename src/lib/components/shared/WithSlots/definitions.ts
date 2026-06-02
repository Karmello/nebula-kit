import { JSX,ReactNode } from 'react'

export type WithSlotsProps<SlotName extends string> = {
  componentName: string
  childrenToVerify: ReactNode
  slotsConfig: { name: SlotName; required?: boolean; allowMultiple?: boolean }[]
  someRequired?: boolean
  children: (args: {
    slotsByName: Record<SlotName, ReactNode[]>
    allValidSlots: ReactNode[]
    allNonSlots: ReactNode[] | null
  }) => JSX.Element
}
