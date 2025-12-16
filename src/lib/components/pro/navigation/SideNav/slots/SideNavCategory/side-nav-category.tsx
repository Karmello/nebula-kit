import { useEffect, useId, useLayoutEffect } from 'react'
import classNames from 'classnames'

import { WithSlots } from 'lib/components/core/internal'
import { Resize, Box, Button, Flex, Spacer } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { useSideNavContext } from '../../SideNavProvider'

import {
  DEFAULT_SIDE_NAV_CATEGORY_INTENT,
  DEFAULT_SIDE_NAV_CATEGORY_VARIANT,
  SideNavCategoryProps,
} from './definitions'

export const SideNavCategory = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  children,
  // Button
  variant = DEFAULT_SIDE_NAV_CATEGORY_VARIANT,
  color,
  intent = DEFAULT_SIDE_NAV_CATEGORY_INTENT,
  justifyContent,
  // own
  label,
  initiallyExpanded = false,
}: SideNavCategoryProps) => {
  const {
    expandedCategories,
    setExpandedCategories,
    expandMode,
    rowGap,
    variant: rootVariant,
    color: rootColor,
    intent: rootIntent,
  } = useSideNavContext()

  const id = useId()

  useLayoutEffect(() => {
    setExpandedCategories(state => ({ ...state, [id]: false }))
  }, [id])

  useEffect(() => {
    if (initiallyExpanded) {
      setExpandedCategories(state => ({ ...state, [id]: true }))
    }
  }, [initiallyExpanded])

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
                        Object.fromEntries(
                          Object.keys(state).map(_id => [_id, _id === id ? !state[id] : false])
                        )
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
                justifyContent={justifyContent}
                size="sm"
                fullWidth
              >
                {label}
              </Button>
            </Box>
            <Box
              tag="li"
              tagAttrs={{
                inert: !expandedCategories[id],
              }}
            >
              <Resize property="blockSize" visible={expandedCategories[id]}>
                <Spacer blockSize={rowGap !== undefined ? rowGap : '0px'} />
                <Flex tag="ul" flexDirection="column" rowGap={rowGap}>
                  {slotsByName['SideNav.Item'].map((slot, key) => (
                    <Box key={key} tag="li" inlineSize="100%">
                      {slot}
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
