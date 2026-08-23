import { cloneElement, useEffect, useId, useLayoutEffect } from 'react'
import classNames from 'classnames'

import { WithSlots } from 'lib/components/shared'
import { CONTROL_SCALE_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { Box, Icon, Resize, Spacer, Text } from 'lib/index.core'
import { SideNavCategoryProps } from 'lib/index.pro'

import { useSideNavContext } from '../../SideNavProvider'
import {
  DEFAULT_SIDE_NAV_CATEGORY_ALIGN,
  DEFAULT_SIDE_NAV_CATEGORY_EXPANDED,
  DEFAULT_SIDE_NAV_CATEGORY_INTENT,
  DEFAULT_SIDE_NAV_CATEGORY_VARIANT,
} from './constants'

export const SideNavCategory = ({
  // Box
  tagAttrs,
  tagRef,
  children,
  variant = DEFAULT_SIDE_NAV_CATEGORY_VARIANT,
  color,
  intent = DEFAULT_SIDE_NAV_CATEGORY_INTENT,
  // own
  align = DEFAULT_SIDE_NAV_CATEGORY_ALIGN,
  bold,
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
    scale,
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
              <Box
                tag="button"
                interactive
                display="flex"
                justifyContent={
                  align === 'split' ? 'space-between' : align === 'center' ? 'center' : 'flex-start'
                }
                alignItems="center"
                cursor="pointer"
                tagAttrs={{
                  type: 'button',
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
                variant={variant || rootVariant}
                color={color || rootColor}
                intent={intent || rootIntent}
                ripple={!expandedCategories[id]}
                inlineSize="100%"
                columnGap={CONTROL_SCALE_MAP[scale].gap}
                blockSize={CONTROL_SCALE_MAP[scale].blockSize}
                paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
              >
                <Icon name="chevron-right" size={CONTROL_SCALE_MAP[scale].fontSize} />
                <Text
                  bold={bold}
                  fontSize={CONTROL_SCALE_MAP[scale].fontSize}
                  lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
                  textAlign={align === 'center' ? 'center' : undefined}
                >
                  {label}
                </Text>
              </Box>
            </Box>
            <Box tag="li">
              <Resize property="blockSize" visible={expandedCategories[id]}>
                <Spacer blockSize={gap} />
                <Box display="flex" tag="ul" flexDirection="column" gap={gap}>
                  {slotsByName['SideNav.Item'].map((slot, key) => (
                    <Box key={key} tag="li" inlineSize="100%">
                      {cloneElement(slot as any, { categoryId: id })}
                    </Box>
                  ))}
                </Box>
              </Resize>
            </Box>
          </Box>
        )
      }}
    </WithSlots>
  )
}

SideNavCategory.displayName = 'SideNav.Category'
