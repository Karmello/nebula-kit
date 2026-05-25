import { MeasuredSizeProperty, MeasuredSizes } from 'lib/internals/measurement'

export type SyncResizeVisibilityProps = {
  container: HTMLElement
  property: MeasuredSizeProperty
  visible: boolean
  sizes: MeasuredSizes
}

export const syncResizeVisibility = ({ container, property, visible, sizes }: SyncResizeVisibilityProps) => {
  container.style[property] = visible ? sizes[property] : '0px'
}
