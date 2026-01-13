import { useLayoutEffect, useMemo, useRef, useState } from 'react'

import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { Autocomplete, Resize } from 'lib/components'

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
        value={value}
        onChange={value => {
          setValue('')
          setQuery('')
          navigateTo(value)
          setShowAppJump(false)
        }}
        onInputChange={setQuery}
        disableFiltering
        scrollAlign="center"
        placeholder="Search ..."
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
              {label}
            </Autocomplete.Option>
          )
        })}
      </Autocomplete>
    )
  }, [filtered])

  return (
    <Resize property="blockSize" visible={showAppJump}>
      {autocomplete}
    </Resize>
  )
}
