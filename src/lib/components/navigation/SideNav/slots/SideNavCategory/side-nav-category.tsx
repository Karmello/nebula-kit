import { useEffect, useId } from 'react'

import { WithSlots } from 'lib/components/internal'
import { Animate, Box, Button } from 'lib/components'

import { useSideNavContext } from '../../SideNavProvider'
import { SideNavCategoryProps } from './definitions'

export const SideNavCategory = ({
  tagAttrs,
  tagRef,
  children,
  variant,
  intent,
  label,
}: SideNavCategoryProps) => {
  const {
    expandedCategories,
    setExpandedCategories,
    variant: rootVariant,
    intent: rootIntent,
    expandMode,
  } = useSideNavContext()

  const id = useId()

  useEffect(() => {
    setExpandedCategories(state => ({ ...state, [id]: false }))
  }, [id])

  return (
    <WithSlots<'SideNav.Item'>
      componentName="SideNav.Category"
      slotsConfig={[{ name: 'SideNav.Item', required: true, allowMultiple: true }]}
      childrenToVerify={children}
    >
      {({ slots }) => {
        return (
          <Box tag="ul" tagAttrs={tagAttrs} tagRef={tagRef}>
            <Box tag="li">
              <Button
                tagAttrs={{
                  style: { inlineSize: '100%', justifyContent: 'flex-start' },
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
                iconName={expandedCategories[id] ? 'chevron-down' : 'chevron-right'}
                variant={variant || rootVariant}
                intent={intent || rootIntent}
                size="sm"
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
              <Box tag="ul">
                <Animate property="blockSize" visible={expandedCategories[id]}>
                  {slots['SideNav.Item'].map((slot, key) => (
                    <Box key={key} tag="li">
                      {slot}
                    </Box>
                  ))}
                </Animate>
              </Box>
            </Box>
          </Box>
        )
      }}
    </WithSlots>
  )
}

SideNavCategory.displayName = 'SideNav.Category'
