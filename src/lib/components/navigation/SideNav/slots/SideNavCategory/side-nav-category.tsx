import { useEffect, useId } from 'react'

import { WithSlots } from 'lib/components/internal'
import { Animate, Box, Button, Flex, Spacer } from 'lib/components'

import { useSideNavContext } from '../../SideNavProvider'
import { SideNavCategoryProps } from './definitions'

export const SideNavCategory = ({
  tagAttrs,
  tagRef,
  children,
  variant,
  intent,
  contentIntent,
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
          <Box tag="ul" tagAttrs={tagAttrs} tagRef={tagRef} inlineSize="100%">
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
                variant={variant}
                intent={intent}
                contentIntent={contentIntent}
                contentAlign="left"
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
              <Animate property="blockSize" visible={expandedCategories[id]}>
                <Spacer blockSize={2} />
                <Flex tag="ul" flexDirection="column" gap={2}>
                  {slots['SideNav.Item'].map((slot, key) => (
                    <Box key={key} tag="li" inlineSize="100%">
                      {slot}
                    </Box>
                  ))}
                </Flex>
              </Animate>
            </Box>
          </Box>
        )
      }}
    </WithSlots>
  )
}

SideNavCategory.displayName = 'SideNav.Category'
