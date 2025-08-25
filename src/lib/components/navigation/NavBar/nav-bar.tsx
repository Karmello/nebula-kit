import { useLayoutEffect, useMemo, useState } from 'react'
import classNames from 'classnames'

import { Box, Flex, Button, IconButton, BUTTON_SIZE_TO_PROPS } from 'lib/components'
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

  const MENU_BUTTONS = useMemo(() => {
    return buttons.map(({ value, label }) => {
      return (
        <Box key={value} as="li" intent="tertiary">
          <Button
            intent={selectedValue === value ? 'secondary' : 'tertiary'}
            onClick={() => {
              setMenuOpen(false)
              onSelect(value)
            }}
          >
            {label}
          </Button>
        </Box>
      )
    })
  }, [selectedValue])

  return (
    <Box as="nav" className={classNames(withPrefix('nav-bar'), className)} style={{ overflow: 'hidden' }}>
      <Flex intent="tertiary" direction="column">
        <Box display={{ sm: 'none' }}>
          <IconButton
            iconName={menuOpen ? 'close' : 'menu'}
            intent="tertiary"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </Box>
        <Box inlineSize={{ base: '100%' }}>
          <Flex
            as="ul"
            intent="tertiary"
            display={{ sm: 'none' }}
            direction="column"
            blockSize={
              bp === 'base' && menuOpen
                ? `calc(var(--neb-scale-${BUTTON_SIZE_TO_PROPS.md.blockSize}) * ${buttons.length})`
                : 0
            }
          >
            {MENU_BUTTONS}
          </Flex>
          <Flex as="ul" intent="tertiary" direction="row" inlineSize="100%">
            {MENU_BUTTONS}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
