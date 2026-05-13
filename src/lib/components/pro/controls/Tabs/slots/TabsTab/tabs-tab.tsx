import { useCallback } from 'react'
import classNames from 'classnames'

import { Button } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TabsTabProps } from './definitions'
import { useTabsContext } from '../../TabsContext'

export const TabsTab = ({
  // Button
  children,
  customSvgIcon,
  disabled,
  iconName,
  iconPlacement,
  inlineSize,
  align,
  tagAttrs,
  tagRef,
  // own
  value,
}: TabsTabProps) => {
  const { rootRef, tabs, currentValue, handleChange, color, intent, size, flexDirection } = useTabsContext()

  const findNext = useCallback(
    (start: number, direction: 1 | -1) => {
      let i = start + direction
      while (i >= 0 && i < tabs.length) {
        if (!tabs[i].disabled) return i
        i += direction
      }
      return null
    },
    [tabs]
  )

  const isSelected = currentValue === value
  const currentIndex = tabs.findIndex(tab => tab.value === currentValue)

  return (
    <Button
      bold={isSelected}
      selected={isSelected}
      color={color}
      customSvgIcon={customSvgIcon}
      disabled={disabled}
      fullWidth
      iconName={iconName}
      iconPlacement={iconPlacement}
      inlineSize={inlineSize}
      intent={intent}
      align={align}
      size={size}
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('tabs-tab'), tagAttrs?.className),
        style: {
          ...tagAttrs?.style,
          borderRadius: '0px',
        },
        role: 'tab',
        id: `tab-${value}`,
        'aria-selected': isSelected,
        'aria-controls': `panel-${value}`,
        tabIndex: isSelected ? 0 : -1,
        onClick: () => {
          handleChange(value)
        },
        onKeyDown: e => {
          if (
            (['ArrowRight', 'ArrowLeft'].includes(e.key) && flexDirection === 'column') ||
            (['ArrowDown', 'ArrowUp'].includes(e.key) && flexDirection === 'row')
          ) {
            return
          }

          switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown': {
              const next = findNext(currentIndex, 1)
              if (next === null) return
              e.preventDefault()
              handleChange(tabs[next].value)
              rootRef.current?.querySelector<HTMLElement>(`#tab-${tabs[next].value}`)?.focus()
              break
            }

            case 'ArrowLeft':
            case 'ArrowUp': {
              const prev = findNext(currentIndex, -1)
              if (prev === null) return
              e.preventDefault()
              handleChange(tabs[prev].value)
              rootRef.current?.querySelector<HTMLElement>(`#tab-${tabs[prev].value}`)?.focus()
              break
            }
          }
        },
      }}
      tagRef={tagRef}
    >
      {children}
    </Button>
  )
}

TabsTab.displayName = 'Tabs.Tab'
