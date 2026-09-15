import { useEffect, useRef } from 'react'

export type UseVisibilityTransitionProps = {
  visible: boolean
  onInitialize: () => void
  onEnterPrepare: () => void
  onEnterTransition: () => void
  onExitTransition: () => void
}

export const useVisibilityTransition = ({
  visible,
  onInitialize,
  onEnterPrepare,
  onEnterTransition,
  onExitTransition,
}: UseVisibilityTransitionProps) => {
  const hasMountedRef = useRef(false)
  const prevVisibleRef = useRef<boolean | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    onInitialize()

    hasMountedRef.current = true

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!hasMountedRef.current) return

    const wasVisible = prevVisibleRef.current

    prevVisibleRef.current = visible

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    // Initial mount
    if (wasVisible === null) {
      return
    }

    // Show
    if (!wasVisible && visible) {
      onEnterPrepare()

      rafRef.current = requestAnimationFrame(() => {
        onEnterTransition()
        rafRef.current = null
      })

      return
    }

    // Hide
    if (wasVisible && !visible) {
      onExitTransition()
    }
  }, [visible])
}
