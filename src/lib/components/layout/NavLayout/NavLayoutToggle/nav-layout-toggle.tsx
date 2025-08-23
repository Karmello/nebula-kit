import { ButtonHTMLAttributes, Ref } from 'react'

import { Button, useNavLayoutContext } from 'lib/components'

export interface NavLayoutToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<any>
  targetId?: string
}

export const NavLayoutToggle = ({ targetId, children, className, ...btn }: NavLayoutToggleProps) => {
  const { sideId } = useNavLayoutContext('Toggle')
  const id = targetId || sideId

  return <Button {...btn} />
}

NavLayoutToggle.displayName = 'NavLayoutToggle'
