import { useEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_RESIZE_DURATION, DEFAULT_RESIZE_EASING, ResizeProps } from './definitions'

export const Resize = ({
  tagAttrs,
  tagRef,
  children,
  property,
  visible,
  duration = DEFAULT_RESIZE_DURATION,
  easing = DEFAULT_RESIZE_EASING,
}: ResizeProps) => {
  /**
   * Animated container.
   * This element owns the animated inlineSize / blockSize
   * and is intentionally constrained (overflow: hidden).
   */
  const containerRef = useRef<HTMLDivElement>(null)

  /**
   * Content wrapper.
   * IMPORTANT:
   * - This element is NOT animated
   * - This element is NOT size-constrained
   * - We measure THIS element, not the container
   *
   * Measuring the container breaks shrink + responsive reflow
   * because the container is explicitly sized during animation.
   */
  const contentRef = useRef<HTMLDivElement>(null)

  const finalRef = tagRef || containerRef

  /**
   * Last resolved pixel sizes.
   * Resize animates ONLY between concrete pixel values.
   * No responsive logic, no viewport awareness.
   */
  const resolvedSizes = useRef<Record<ResizeProps['property'], string>>({
    blockSize: '',
    inlineSize: '',
  })

  useEffect(() => {
    const container = finalRef.current
    const content = contentRef.current
    if (!container || !content) return

    /**
     * Measure intrinsic content size and animate container to match.
     *
     * NOTE:
     * - scrollWidth / scrollHeight are intentional here
     * - Resize is content-driven, not layout-driven
     * - Responsive motion is explicitly out of scope for v1
     */
    const update = () => {
      resolvedSizes.current.inlineSize = `${content.scrollWidth}px`
      resolvedSizes.current.blockSize = `${content.scrollHeight}px`

      if (visible) {
        container.style[property] = resolvedSizes.current[property]
      }
    }

    // Initial measurement on mount / visibility change
    update()

    /**
     * Observe CONTENT changes, not container changes.
     * This reacts to:
     * - dynamic children
     * - text reflow
     * - slot changes
     * - expand / collapse use cases
     */
    const observer = new ResizeObserver(update)
    observer.observe(content)

    return () => observer.disconnect()
  }, [finalRef, property, visible])

  /**
   * Visibility toggle.
   * Resize only animates between 0px and the last measured size.
   * It does NOT attempt to retarget or interpolate during layout changes.
   */
  useEffect(() => {
    const el = finalRef.current
    if (!el) return

    el.style[property] = visible ? resolvedSizes.current[property] : '0px'
  }, [visible, property])

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('resize'), tagAttrs?.className || ''),
        style: {
          ...tagAttrs?.style,
          transitionProperty: 'block-size, inline-size',
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: easing ?? DEFAULT_RESIZE_EASING,
        },
      }}
      tagRef={finalRef}
      overflow="hidden"
    >
      {/*
        Internal content wrapper.
        Do not remove unless Resize is redesigned.
      */}
      <Box tagRef={contentRef}>{children}</Box>
    </Box>
  )
}

Resize.displayName = 'Resize'
