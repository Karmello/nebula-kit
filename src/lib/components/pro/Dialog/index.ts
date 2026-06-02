import { Dialog as DialogBase } from './dialog'
import { DialogContent, DialogFooter,DialogHeader } from './slots'

export const Dialog = Object.assign(DialogBase, {
  Header: DialogHeader,
  Content: DialogContent,
  Footer: DialogFooter,
})

export * from './definitions'
export * from './slots'
