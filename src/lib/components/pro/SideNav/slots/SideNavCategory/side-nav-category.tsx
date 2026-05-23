import { cloneElement, useEffect, useId, useLayoutEffect } from 'react'
import classNames from 'classnames'

import { WithSlots } from 'lib/components/internal'
import { Resize, Box, Button, Flex, Spacer } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { useSideNavContext } from '../../SideNavProvider'

import {
  DEFAULT_SIDE_NAV_CATEGORY_INTENT,
  DEFAULT_SIDE_NAV_CATEGORY_VARIANT,
  DEFAULT_SIDE_NAV_CATEGORY_EXPANDED,
  SideNavCategoryProps,
} from './definitions'

export const SideNavCategory = ({
  // Box
  tagAttrs,
  tagRef,
  children,
  // Button
  variant = DEFAULT_SIDE_NAV_CATEGORY_VARIANT,
  color,
  intent = DEFAULT_SIDE_NAV_CATEGORY_INTENT,
  align,
  bold,
  // own
  label,
  expanded = DEFAULT_SIDE_NAV_CATEGORY_EXPANDED,
}: SideNavCategoryProps) => {
  const {
    expandedCategories,
    setExpandedCategories,
    expandMode,
    variant: rootVariant,
    color: rootColor,
    intent: rootIntent,
    size,
    gap,
  } = useSideNavContext()

  const id = useId()

  useLayoutEffect(() => {
    setExpandedCategories(state => ({ ...state, [id]: false }))
  }, [id])

  useEffect(() => {
    if (expanded) {
      setExpandedCategories(state => ({ ...state, [id]: true }))
    }
  }, [expanded])

  return (
    <WithSlots<'SideNav.Item'>
      componentName="SideNav.Category"
      slotsConfig={[{ name: 'SideNav.Item', required: true, allowMultiple: true }]}
      childrenToVerify={children}
    >
      {({ slotsByName }) => {
        return (
          <Box
            tag="ul"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('side-nav-category'), tagAttrs?.className || ''),
            }}
            tagRef={tagRef}
            inlineSize="100%"
          >
            <Box tag="li">
              <Button
                tagAttrs={{
                  onClick: () => {
                    if (expandMode === 'multiple') {
                      setExpandedCategories(state => ({ ...state, [id]: !state[id] }))
                    } else {
                      setExpandedCategories(state =>
                        Object.fromEntries(Object.keys(state).map(_id => [_id, _id === id ? !state[id] : false]))
                      )
                    }
                  },
                  'aria-expanded': expandedCategories[id],
                }}
                iconName="chevron-right"
                iconAngle={expandedCategories[id] ? 90 : 0}
                variant={variant || rootVariant}
                color={color || rootColor}
                intent={intent || rootIntent}
                align={align}
                size={size}
                fullWidth
                bold={bold}
                ripple={!expandedCategories[id]}
              >
                {label}
              </Button>
            </Box>
            <Box tag="li">
              <Resize property="blockSize" visible={expandedCategories[id]}>
                <Spacer blockSize={gap} />
                <Flex tag="ul" flexDirection="column" gap={gap}>
                  {slotsByName['SideNav.Item'].map((slot, key) => (
                    <Box key={key} tag="li" inlineSize="100%">
                      {cloneElement(slot as any, { categoryId: id })}
                    </Box>
                  ))}
                </Flex>
              </Resize>
            </Box>
          </Box>
        )
      }}
    </WithSlots>
  )
}

SideNavCategory.displayName = 'SideNav.Category'
