import { RefObject, useEffect, useLayoutEffect } from 'react'

export const useTransitionLifecycle = (elemRef: RefObject<HTMLElement>, enabled = true): void => {
  useLayoutEffect(() => {
    if (!enabled) return

    const el = elemRef.current
    if (!el) return

    el.setAttribute('data-neb-transitions', 'false')
  }, [elemRef, enabled])

  useEffect(() => {
    if (!enabled) return

    const el = elemRef.current
    if (!el) return

    let raf2: number

    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        el.setAttribute('data-neb-transitions', 'true')
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [elemRef, enabled])
}
