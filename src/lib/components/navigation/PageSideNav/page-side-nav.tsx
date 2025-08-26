import { useState } from 'react'

import { Box, Button, BUTTON_SIZE_TO_PROPS, ButtonProps, ButtonSize, VStack } from 'lib/components'
import { scale } from 'lib/helpers'

type PageSideNavItem = Omit<ButtonProps, 'children' | 'size'> & {
  label: string
  subItems?: PageSideNavItem[]
}

export type PageSideNavProps = {
  items: PageSideNavItem[]
}

const DEFAULT_SIZE: ButtonSize = 'md'

export const PageSideNav = ({ items }: PageSideNavProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1)

  return (
    <VStack>
      {items.map(({ label, subItems, ...rest }, index) => (
        <Box key={`item-${index}`}>
          <Button
            size={DEFAULT_SIZE}
            borderRadius={0}
            iconName={expandedIndex !== index ? 'chevron-down' : 'chevron-up'}
            style={{ justifyContent: 'flex-start', width: '100%' }}
            {...rest}
            onClick={e => {
              setExpandedIndex(expandedIndex !== index ? index : -1)
              rest.onClick?.(e)
            }}
          >
            {label}
          </Button>
          <Box
            blockSize={
              index !== expandedIndex
                ? 0
                : `calc(${scale(BUTTON_SIZE_TO_PROPS[DEFAULT_SIZE].blockSize)} * ${subItems?.length || 0})`
            }
            overflowY="hidden"
          >
            <VStack>
              {subItems?.map(({ label, ...rest }, index) => (
                <Button key={`sub-item-${index}`} size={DEFAULT_SIZE} borderRadius={0} {...rest}>
                  {label}
                </Button>
              ))}
            </VStack>
          </Box>
        </Box>
      ))}
    </VStack>
  )
}
