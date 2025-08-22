import { ButtonHTMLAttributes, Ref } from 'react'
import classNames from 'classnames'

import { Button, useNavLayoutContext } from 'lib-2/components'

export interface NavLayoutToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<any>
  targetId?: string
}

export const NavLayoutToggle = ({ targetId, children, className, ...btn }: NavLayoutToggleProps) => {
  const { sideId, open, setOpen } = useNavLayoutContext('Toggle')
  const id = targetId || sideId

  return <Button />
}

NavLayoutToggle.displayName = 'NavLayoutToggle'
