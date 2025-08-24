import { useLayoutEffect, useState } from 'react'
import classNames from 'classnames'

import { Box, Flex, Button, IconButton } from 'lib/components'
import { useCurrentBreakpoint, withPrefix } from 'lib/helpers'

import './nav-bar.scss'

export type NavBarOwnProps = {
  className?: string
  buttons: { value: string; label: string }[]
  selectedValue: string
  onSelect: (value: string) => void
}

export const NavBar = ({ className, buttons = [], selectedValue, onSelect }: NavBarOwnProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const bp = useCurrentBreakpoint()

  useLayoutEffect(() => {
    setMenuOpen(bp !== 'base')
  }, [bp])

  return (
    <Box as="nav" className={classNames(withPrefix('nav-bar'), className)}>
      <Flex as="ul" gap={0} intent="tertiary" direction={{ base: 'column', sm: 'row' }}>
        <Box as="li" intent="tertiary" display={{ sm: 'none' }}>
          <IconButton iconName="menu" intent="tertiary" onClick={() => setMenuOpen(!menuOpen)} />
        </Box>
        {buttons.map(({ value, label }) => {
          return (
            <Box
              key={value}
              as="li"
              blockSize="100%"
              display={{ base: menuOpen ? 'revert' : 'none', sm: 'revert' }}
            >
              <Button
                intent={selectedValue === value ? 'secondary' : 'tertiary'}
                style={{ width: '100%' }}
                onClick={() => {
                  setMenuOpen(false)
                  onSelect(value)
                }}
              >
                {label}
              </Button>
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}
