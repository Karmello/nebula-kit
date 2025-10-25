import { useEffect, useRef, useState } from 'react'

import { Flex, Button, Portal, Animate, ButtonGroup } from 'lib/components'

import { SelectProps } from './definitions'

export const Select = ({
  // Box
  variant,
  intent,
  // own
  options,
  value,
  onChange,
}: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [animateVisible, setAnimateVisible] = useState<boolean>(false)

  const triggerButtonRef = useRef<any>(null)

  useEffect(() => {
    setTimeout(() => {
      setAnimateVisible(open)
    })
  }, [open])

  return (
    <Flex flexDirection="column" alignItems="stretch">
      <Button
        tagRef={triggerButtonRef}
        tagAttrs={{
          onClick: () => setOpen(!open),
        }}
        iconName={open ? 'chevron-up' : 'chevron-down'}
        iconPosition="right"
        variant={variant}
        intent={intent}
      >
        {options.find(o => o.value === value)?.label}
      </Button>
      {open ? (
        <Portal anchorRef={triggerButtonRef}>
          <Animate property="blockSize" visible={animateVisible}>
            <ButtonGroup direction="column" attached stretch>
              {options.map(({ value, label }) => (
                <Button
                  key={value}
                  tagAttrs={{
                    onClick: () => {
                      onChange(value)
                      setOpen(false)
                    },
                    style: { minInlineSize: (triggerButtonRef.current?.offsetWidth || 0) + 'px' },
                  }}
                  variant={variant}
                  intent={intent}
                >
                  {label}
                </Button>
              ))}
            </ButtonGroup>
          </Animate>
        </Portal>
      ) : null}
    </Flex>
  )
}

Select.displayName = 'Select'
