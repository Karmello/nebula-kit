import { useLayoutEffect, useMemo, useRef, useState } from 'react'

import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { Autocomplete, Resize, Text } from 'lib/components'

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
      document.documentElement.scrollTo(0, 0)
      setTimeout(() => {
        autocompleteRef.current?.querySelector('input')?.focus()
      }, RESIZE_DURATION)
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
      const target = e.target as HTMLElement
      const isTyping = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable
      if (isTyping) return
      if (e.key === '/') {
        e.preventDefault()
        setShowAppJump(v => !v)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setShowAppJump])

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
        intent="muted"
        onChange={value => {
          setShowAppJump(false)
          setTimeout(() => {
            navigateTo(value)
          }, RESIZE_DURATION)
        }}
        onInputChange={setQuery}
        disableFiltering
        visibleItemsCount={10}
        placeholder="Search website ... (open with /, close with ESC)"
        showToggle={false}
      >
        {filtered.map(({ label, href, iconName }) => {
          return (
            <Autocomplete.Option key={href} value={href} label={href} iconName={iconName} iconPlacement="right" align="split">
              <Text tagAttrs={{ style: { whiteSpace: 'wrap', lineHeight: 1.1 } }}>{label}</Text>
            </Autocomplete.Option>
          )
        })}
      </Autocomplete>
    )
  }, [showAppJump, filtered])

  return (
    <Resize property="blockSize" visible={showAppJump} duration={RESIZE_DURATION} easing="cubic-bezier(0.4, 0, 0.2, 1)">
      {autocomplete}
    </Resize>
  )
}
