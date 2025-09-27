import { useEffect, useId } from 'react'

import { WithSlots } from 'lib/components/internal'
import { Animate, Box, Button } from 'lib/components'
import { DEFAULT_BOX_INTENT, DEFAULT_BOX_VARIANT } from 'lib/components/base/Box/definitions'

import { useSideNavContext } from '../../SideNavProvider'
import { SideNavCategoryProps } from './definitions'

export const SideNavCategory = ({
  tagAttrs,
  tagRef,
  children,
  variant = DEFAULT_BOX_VARIANT,
  intent = DEFAULT_BOX_INTENT,
  label,
}: SideNavCategoryProps) => {
  const { expandedCategories, setExpandedCategories, expandMode } = useSideNavContext()

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
                }}
                iconName={expandedCategories[id] ? 'chevron-down' : 'chevron-right'}
                variant={variant}
                intent={intent}
                size="sm"
              >
                {label}
              </Button>
            </Box>
            <Box tag="li">
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
