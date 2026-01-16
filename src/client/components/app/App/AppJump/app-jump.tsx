import { CSSProperties, useLayoutEffect, useMemo, useRef, useState } from 'react'

import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { Autocomplete, Box, Resize, Text } from 'lib/components'

import { RESIZE_DURATION, OPTIONS } from './definitions'

export const AppJump = () => {
  const [query, setQuery] = useState<string>('')
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query)
  const autocompleteRef = useRef<HTMLDivElement>(null)

  const navigateTo = useNavigateTo()
  const showAppJump = useAppStore(state => state.showAppJump)
  const setShowAppJump = useAppStore(state => state.setShowAppJump)

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

  useLayoutEffect(() => {
    if (showAppJump) {
      setTimeout(() => {
        autocompleteRef.current?.querySelector('input')?.focus()
      })
    }
  }, [showAppJump])

  useLayoutEffect(() => {
    if (!showAppJump) return
    const input = autocompleteRef.current?.querySelector('input')
    if (input) {
      input.onkeydown = e => {
        if (e.key === 'Escape') setShowAppJump(false)
      }
      input.onblur = () => {
        setTimeout(() => {
          setShowAppJump(false)
        }, RESIZE_DURATION)
      }
    }
  }, [autocompleteRef.current, showAppJump])

  useLayoutEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/') setShowAppJump(!showAppJump)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [showAppJump])

  useLayoutEffect(() => {
    if (!showAppJump) {
      setQuery('')
      setDebouncedQuery('')
    }
  }, [showAppJump])

  const autocomplete = useMemo(() => {
    return (
      <Autocomplete
        key={String(showAppJump)}
        tagRef={autocompleteRef}
        intent="secondary"
        itemBorderIntent="secondary"
        onChange={value => {
          setShowAppJump(false)
          setTimeout(() => {
            navigateTo(value)
          }, RESIZE_DURATION)
        }}
        onInputChange={setQuery}
        disableFiltering
        visibleItemsCount={10}
        placeholder='Search website (toggle with "/")'
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
              <Text tagAttrs={{ style: { whiteSpace: 'wrap', lineHeight: 1.1 } }}>{label}</Text>
            </Autocomplete.Option>
          )
        })}
      </Autocomplete>
    )
  }, [showAppJump, filtered])

  return (
    <Resize property="blockSize" visible={showAppJump} duration={RESIZE_DURATION}>
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
