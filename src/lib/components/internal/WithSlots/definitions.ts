import { ReactNode, JSX } from 'react'

export type WithSlotsProps<SlotName extends string> = {
  componentName: string
  childrenToVerify: ReactNode
  slotsConfig: { name: SlotName; required?: boolean; allowMultiple?: boolean }[]
  children: (slots: Record<SlotName, ReactNode>) => JSX.Element
}
