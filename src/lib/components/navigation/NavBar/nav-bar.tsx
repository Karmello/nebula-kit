import { useLayoutEffect, useState } from 'react'
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

  return (
    <Box
      as="nav"
      intent="tertiary"
      className={classNames(withPrefix('nav-bar'), className)}
      style={{ overflow: 'hidden' }}
    >
      <Flex as="ul" gap={0} intent="tertiary" direction="column">
        <Box as="li" intent="tertiary" display={{ sm: 'none' }}>
          <IconButton
            iconName={menuOpen ? 'close' : 'menu'}
            intent="tertiary"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </Box>
        <Box
          as="li"
          intent="tertiary"
          blockSize={{
            base:
              bp === 'base' && menuOpen
                ? `calc(var(--neb-scale-${BUTTON_SIZE_TO_PROPS.md.blockSize}) * ${buttons.length})`
                : 0,
            sm: 'auto',
          }}
          inlineSize={{ base: '100%', sm: 'auto' }}
        >
          <Flex as="ul" intent="tertiary" direction={{ base: 'column', sm: 'row' }}>
            {buttons.map(({ value, label }) => {
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
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
