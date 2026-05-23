import type { BoxProps } from 'lib/components'

export type MeasuredInfo = { blockSize: number; inlineSize: number }

type PropsFromBox = Pick<BoxProps, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps['children']
}

type MeasureOwnProps = {
  onMeasure: (measured: MeasuredInfo) => void
}

export type MeasureProps = PropsFromBox & MeasureOwnProps
