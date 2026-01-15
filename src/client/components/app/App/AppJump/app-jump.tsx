import { CSSProperties, useLayoutEffect, useMemo, useRef, useState } from 'react'

import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { Autocomplete, Box, Resize } from 'lib/components'

import { OPTIONS } from './definitions'

export const AppJump = () => {
  const [value, setValue] = useState<string>('')
  const [query, setQuery] = useState<string>('')
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query)
  const autocompleteRef = useRef<HTMLDivElement>(null)

  const navigateTo = useNavigateTo()
  const showAppJump = useAppStore(state => state.showAppJump)

  const queryTokens = useMemo(() => {
    return debouncedQuery.trim().toLowerCase().split(/\s+/).filter(Boolean)
  }, [debouncedQuery])

  const filtered = useMemo(() => {
    if (!queryTokens.length) return []
    return OPTIONS.filter(option => queryTokens.every(q => option.tokens.some(t => t.includes(q))))
  }, [queryTokens])

  useLayoutEffect(() => {
    const id = setTimeout(() => {
      setDebouncedQuery(query)
    }, 200)

    return () => clearTimeout(id)
  }, [query])

  const autocomplete = useMemo(() => {
    return (
      <Autocomplete
        tagRef={autocompleteRef}
        intent="secondary"
        itemBorderIntent="secondary"
        value={value}
        onChange={value => {
          setValue(value)
        }}
        onInputChange={setQuery}
        onClosed={() => {
          if (value) {
            setTimeout(() => {
              navigateTo(value)
            }, 125)
          }
          setValue('')
          setQuery('')
        }}
        disableFiltering
        visibleItemsCount={10}
        placeholder="Search website ..."
        noOptionsLabel="No results"
        showToggle={false}
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
    <Resize property="blockSize" visible={showAppJump} duration={125}>
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
        borderBottomWidth="0px"
        borderRadius="0px"
      >
        <Box drawable variant="solid" intent="muted" padding="0px" borderRadius="0px">
          {autocomplete}
        </Box>
      </Box>
    </Resize>
  )
}
