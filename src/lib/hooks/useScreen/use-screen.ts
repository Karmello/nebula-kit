import { useSyncExternalStore } from 'react'

import { Breakpoint } from 'lib/types'

export const BP = { sm: 480, md: 768, lg: 1024, xl: 1280, xxl: 1536 } as const

const hasWindow = () => typeof window !== 'undefined' && 'matchMedia' in window
const q = (px: number) => `(min-width: ${px}px)`

let started = false
let current: Breakpoint = 'base'

let mqls: {
  sm: MediaQueryList
  md: MediaQueryList
  lg: MediaQueryList
  xl: MediaQueryList
  xxl: MediaQueryList
} | null = null

const listeners = new Set<() => void>()

const buildMqls = () => {
  mqls = {
    sm: window.matchMedia(q(BP.sm)),
    md: window.matchMedia(q(BP.md)),
    lg: window.matchMedia(q(BP.lg)),
    xl: window.matchMedia(q(BP.xl)),
    xxl: window.matchMedia(q(BP.xxl)),
  }
  return mqls
}

const compute = (): Breakpoint => {
  if (!hasWindow()) return 'base'
  const { sm, md, lg, xl, xxl } = mqls ?? buildMqls()
  if (xxl.matches) return 'xxl'
  if (xl.matches) return 'xl'
  if (lg.matches) return 'lg'
  if (md.matches) return 'md'
  if (sm.matches) return 'sm'
  return 'base'
}

const start = () => {
  if (started || !hasWindow()) return
  const { sm, md, lg, xl, xxl } = buildMqls()

  const onChange = () => {
    const next = compute()
    if (next !== current) {
      current = next
      listeners.forEach(l => l())
    }
  }

  const add = (mql: MediaQueryList) => {
    if (mql.addEventListener) {
      mql.addEventListener('change', onChange)
    } else {
      mql.addListener(onChange)
    }
  }

  add(sm)
  add(md)
  add(lg)
  add(xl)
  add(xxl)

  current = compute()
  started = true
}

const subscribe = (cb: () => void) => {
  start()
  listeners.add(cb)
  return () => listeners.delete(cb)
}

const getSnapshot = () => current
const getServerSnapshot = (): Breakpoint => 'base'

export const useScreen = () => {
  const bp = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return {
    bp,
    isMobile: ['base', 'sm', 'md'].includes(bp),
    isDesktop: ['lg', 'xl', 'xxl'].includes(bp),
  }
}
