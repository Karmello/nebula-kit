import { ReactNode } from 'react'

export type UseSlotsArgs<SlotName extends string> = {
  componentName: string
  childrenToVerify: ReactNode
  slotsConfig: { name: SlotName; required?: boolean; allowMultiple?: boolean }[]
  someRequired?: boolean
}

export type UseSlotsResult<SlotName extends string> = {
  slotsByName: Record<SlotName, ReactNode[]>
  allValidSlots: ReactNode[]
  allNonSlots: ReactNode[]
} | null
