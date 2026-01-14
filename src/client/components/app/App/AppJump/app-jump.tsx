import { CSSProperties, useMemo, useRef, useState } from 'react'

import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { Autocomplete, Box, Resize } from 'lib/components'

import { OPTIONS } from './definitions'

export const AppJump = () => {
  const [value, setValue] = useState<string>('')
  const [query, setQuery] = useState<string>('')
  const autocompleteRef = useRef<HTMLDivElement>(null)

  const navigateTo = useNavigateTo()
  const showAppJump = useAppStore(state => state.showAppJump)
  const setShowAppJump = useAppStore(state => state.setShowAppJump)

  const queryTokens = useMemo(() => {
    return query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  }, [query])

  const filtered = useMemo(() => {
    if (!queryTokens.length) return []
    return OPTIONS.filter(option => queryTokens.every(q => option.tokens.some(t => t.includes(q))))
  }, [queryTokens])

  const autocomplete = useMemo(() => {
    return (
      <Autocomplete
        tagRef={autocompleteRef}
        intent="secondary"
        itemBorderIntent="primary"
        value={value}
        onChange={value => {
          setValue(value)
          setShowAppJump(false)
        }}
        onInputChange={setQuery}
        onClosed={() => {
          if (value) navigateTo(value)
          setValue('')
          setQuery('')
        }}
        disableFiltering
        visibleItemsCount={10}
        placeholder="Search website ..."
        noOptionsLabel="No results"
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
              {label}
            </Autocomplete.Option>
          )
        })}
      </Autocomplete>
    )
  }, [filtered, value])

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
