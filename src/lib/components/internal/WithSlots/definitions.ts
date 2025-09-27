import { ReactNode, JSX } from 'react'

export type WithSlotsProps<SlotName extends string> = {
  componentName: string
  childrenToVerify: ReactNode
  slotsConfig: { name: SlotName; required?: boolean; allowMultiple?: boolean }[]
  someRequired?: boolean
  children: (args: { slots: Record<SlotName, ReactNode[]>; validNodes: ReactNode[] }) => JSX.Element
}
