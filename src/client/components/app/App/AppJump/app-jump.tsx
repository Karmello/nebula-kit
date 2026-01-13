import { CSSProperties, useLayoutEffect, useMemo, useRef, useState } from 'react'

import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { Autocomplete, Box, Resize, Text } from 'lib/components'

import { OPTIONS } from './definitions'

export const AppJump = () => {
  const autocompleteRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState<string>('')
  const [query, setQuery] = useState<string>('')

  const navigateTo = useNavigateTo()
  const showAppJump = useAppStore(state => state.showAppJump)
  const setShowAppJump = useAppStore(state => state.setShowAppJump)

  // useLayoutEffect(() => {
  //   if (showAppJump) {
  //     autocompleteRef.current?.querySelector<HTMLElement>('.neb-input')?.focus()
  //   }
  // }, [showAppJump])

  const queryTokens = useMemo(() => {
    return query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  }, [query])

  const filtered = useMemo(() => {
    if (!queryTokens.length) return OPTIONS
    return OPTIONS.filter(option => queryTokens.every(q => option.tokens.some(t => t.includes(q))))
  }, [queryTokens])

  const autocomplete = useMemo(() => {
    return (
      <Autocomplete
        tagRef={autocompleteRef}
        intent="muted"
        itemBorderIntent="tertiary"
        value={value}
        onChange={value => {
          setValue('')
          setQuery('')
          navigateTo(value)
          setShowAppJump(false)
        }}
        onInputChange={setQuery}
        disableFiltering
        placeholder="Search website ..."
        visibleItemsCount={10}
      >
        {filtered.map(({ label, href, iconName }) => {
          return (
            <Autocomplete.Option
              key={href}
              value={href}
              label={href}
              iconName={iconName}
              iconPlacement="right"
              justifyContent="space-between"
            >
              <Text truncate tagAttrs={{ style: { whiteSpace: 'wrap', lineHeight: 1.15 } }}>
                {label}
              </Text>
            </Autocomplete.Option>
          )
        })}
      </Autocomplete>
    )
  }, [filtered])

  return (
    <Resize property="blockSize" visible={showAppJump}>
      <Box
        tagAttrs={{
          style: {
            '--neb-border-radius': '0px',
          } as CSSProperties,
        }}
        drawable
        variant="outline"
        intent="tertiary"
        borderLeftWidth="0px"
        borderRightWidth="0px"
        borderTopWidth="0px"
        borderRadius="0px"
      >
        <Box drawable variant="solid" intent="muted" padding="0px" borderRadius="0px">
          {autocomplete}
        </Box>
      </Box>
    </Resize>
  )
}
