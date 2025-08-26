import { useLayoutEffect, useState } from 'react'
import classNames from 'classnames'

import { Box, Flex, Button, IconButton, BUTTON_SIZE_TO_PROPS } from 'lib/components'
import { useScreen, withPrefix } from 'lib/helpers'

import './app-nav-bar.scss'

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
      as="nav"
      className={classNames(withPrefix('app-nav-bar'), className)}
      style={{ overflow: 'hidden' }}
      direction="column"
      align="flex-end"
      borderRadius={0}
    >
      <Box blockSize={{ base: `var(--neb-scale-${BUTTON_SIZE_TO_PROPS.md.blockSize})`, sm: 0 }}>
        <IconButton
          iconName={bp === 'base' ? (menuOpen ? 'close' : 'menu') : undefined}
          onClick={() => setMenuOpen(!menuOpen)}
          intent="tertiary"
          borderRadius={0}
        />
      </Box>
      <Flex
        className={withPrefix('app-nav-bar-buttons-horizontal')}
        as="ul"
        direction="row"
        inlineSize="100%"
        intent="tertiary"
        blockSize={{ base: 0, sm: `var(--neb-scale-${BUTTON_SIZE_TO_PROPS.md.blockSize})` }}
      >
        {buttons.map(({ value, label }) => {
          return (
            <Box key={value} as="li">
              <Button
                intent={selectedValue === value ? 'secondary' : 'tertiary'}
                borderRadius={0}
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
      <Flex
        className={withPrefix('app-nav-bar-buttons-vertical')}
        as="ul"
        direction="column"
        blockSize={
          bp === 'base' && menuOpen
            ? `calc(var(--neb-scale-${BUTTON_SIZE_TO_PROPS.md.blockSize}) * ${buttons.length})`
            : 0
        }
        inlineSize="100%"
      >
        {buttons.map(({ value, label }) => {
          return (
            <Box key={value} as="li" inlineSize="100%">
              <Button
                intent={selectedValue === value ? 'secondary' : 'tertiary'}
                borderRadius={0}
                onClick={() => {
                  setMenuOpen(false)
                  onSelect(value)
                }}
                style={{ width: '100%' }}
              >
                {label}
              </Button>
            </Box>
          )
        })}
      </Flex>
    </Flex>
  )
}
