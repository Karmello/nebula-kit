import { useLayoutEffect, useState } from 'react'
import classNames from 'classnames'

import { Box, Flex, Button, IconButton } from 'lib/components'
import { useScreen, withPrefix } from 'lib/helpers'

import './app-nav-bar.scss'
import { BUTTON_SIZE_CONFIG } from 'lib/components/controls/Button/definitions'

export type AppNavBarOwnProps = {
  className?: string
  buttons: { value: string; label: string }[]
  selectedValue: string
  onSelect: (value: string) => void
}

export const AppNavBar = ({ className, buttons = [], selectedValue, onSelect }: AppNavBarOwnProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    setMenuOpen(bp !== 'base')
  }, [bp])

  return (
    <Flex
      elem="nav"
      elemProps={{ className: classNames(withPrefix('app-nav-bar'), className) }}
      flexDirection="column"
      alignItems="flex-end"
    >
      <Box
        blockSize={{ base: `var(--neb-scale-${BUTTON_SIZE_CONFIG.md.blockSize})`, sm: 0 }}
        inlineSize={{ base: `var(--neb-scale-${BUTTON_SIZE_CONFIG.md.blockSize})`, sm: 0 }}
      >
        <IconButton
          elemProps={{
            onClick: () => setMenuOpen(!menuOpen),
          }}
          iconName={bp === 'base' ? (menuOpen ? 'close' : 'menu') : 'menu'}
          intent="tertiary"
        />
      </Box>
      <Box
        inlineSize="100%"
        intent="tertiary"
        blockSize={{ base: 0, sm: `var(--neb-scale-${BUTTON_SIZE_CONFIG.md.blockSize})` }}
      >
        <Flex
          elem="ul"
          elemProps={{
            className: withPrefix('app-nav-bar-buttons-horizontal'),
          }}
          flexDirection="row"
        >
          {buttons.map(({ value, label }) => {
            return (
              <Box key={value} elem="li">
                <Button
                  elemProps={{
                    onClick: () => {
                      setMenuOpen(false)
                      onSelect(value)
                    },
                  }}
                  intent={selectedValue === value ? 'secondary' : 'tertiary'}
                >
                  {label}
                </Button>
              </Box>
            )
          })}
        </Flex>
      </Box>
      <Box
        blockSize={
          bp === 'base' && menuOpen
            ? `calc(var(--neb-scale-${BUTTON_SIZE_CONFIG.md.blockSize}) * ${buttons.length})`
            : 0
        }
        inlineSize="100%"
      >
        <Flex
          elem="ul"
          elemProps={{ className: withPrefix('app-nav-bar-buttons-vertical') }}
          flexDirection="column"
        >
          {buttons.map(({ value, label }) => {
            return (
              <Box key={value} elem="li" inlineSize="100%">
                <Button
                  elemProps={{
                    onClick: () => {
                      setMenuOpen(false)
                      onSelect(value)
                    },
                    style: { width: '100%' },
                  }}
                  intent={selectedValue === value ? 'secondary' : 'tertiary'}
                >
                  {label}
                </Button>
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Flex>
  )
}
