export type MeasuredSizeProperty = 'blockSize' | 'inlineSize'

export type MeasuredSizes = Record<MeasuredSizeProperty, string>

export type SyncMeasuredSizeProps = {
  container: HTMLElement
  content: HTMLElement
  property: MeasuredSizeProperty
  visible: boolean
  sizes: MeasuredSizes
}

export const syncMeasuredSize = ({ container, content, property, visible, sizes }: SyncMeasuredSizeProps) => {
  sizes.inlineSize = `${content.scrollWidth}px`
  sizes.blockSize = `${content.scrollHeight}px`

  if (visible) {
    container.style[property] = sizes[property]
  }
}
