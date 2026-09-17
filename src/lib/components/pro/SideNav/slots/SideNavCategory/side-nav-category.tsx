import { cloneElement, useEffect, useId, useLayoutEffect } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { Icon } from 'lib/components/core/Icon'
import { Resize } from 'lib/components/core/Resize'
import { Spacer } from 'lib/components/core/Spacer'
import { Text } from 'lib/components/core/Text'
import { CONTROL_SCALE_MAP, NEB_LENGTH } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { useSlots } from 'lib/hooks'

import { useSideNavContext } from '../../providers/SideNavProvider'
import { DEFAULT_SIDE_NAV_CATEGORY_ALIGN, DEFAULT_SIDE_NAV_CATEGORY_EXPANDED } from './constants'
import { SideNavCategoryProps } from './types'

export const SideNavCategory = ({
  // Box
  elemAttrs,
  elemRef,
  children,
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

  const slots = useSlots<'SideNav.Item'>({
    componentName: 'SideNav.Category',
    slotsConfig: [{ name: 'SideNav.Item', required: true, allowMultiple: true }],
    childrenToVerify: children,
  })

  if (!slots) return null

  return (
    <Box
      elemTag="ul"
      className={classNames(withPrefix('side-nav-category'), elemAttrs?.className || '')}
      elemAttrs={elemAttrs}
      elemRef={elemRef}
      inlineSize="100%"
    >
      <Box elemTag="li">
        <Box
          elemTag="button"
          elemAttrs={{
            type: 'button',
            'aria-expanded': expandedCategories[id],
          }}
          interactive
          display="flex"
          justifyContent={
            align === 'split' ? 'space-between' : align === 'center' ? 'center' : 'flex-start'
          }
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            if (expandMode === 'multiple') {
              setExpandedCategories(state => ({ ...state, [id]: !state[id] }))
            } else {
              setExpandedCategories(state =>
                Object.fromEntries(
                  Object.keys(state).map(_id => [_id, _id === id ? !state[id] : false])
                )
              )
            }
          }}
          bgMode={rootVariant === 'solid' ? 'filled' : 'transparent'}
          textMode={rootVariant === 'solid' ? 'default' : 'colored'}
          borderRadius={NEB_LENGTH.px_000}
          color={rootColor}
          intent={rootIntent}
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
      <Box elemTag="li">
        <Resize property="blockSize" visible={expandedCategories[id]}>
          <Spacer blockSize={gap} />
          <Box display="flex" elemTag="ul" flexDirection="column" gap={gap}>
            {slots.slotsByName['SideNav.Item'].map((slot, key) => (
              <Box key={key} elemTag="li" inlineSize="100%">
                {cloneElement(slot as any, { categoryId: id })}
              </Box>
            ))}
          </Box>
        </Resize>
      </Box>
    </Box>
  )
}

SideNavCategory.displayName = 'SideNav.Category'
