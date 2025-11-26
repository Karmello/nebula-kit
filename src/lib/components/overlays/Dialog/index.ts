import { Dialog as DialogBase } from './dialog'

import { DialogHeader, DialogContent, DialogFooter } from './slots'

export const Dialog = Object.assign(DialogBase, {
  Header: DialogHeader,
  Content: DialogContent,
  Footer: DialogFooter,
})

export { type DialogProps } from './definitions'
export type { DialogHeaderProps, DialogContentProps, DialogFooterProps } from './slots'
