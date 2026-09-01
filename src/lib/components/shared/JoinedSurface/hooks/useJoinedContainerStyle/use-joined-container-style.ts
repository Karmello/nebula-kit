import { NEB_LENGTH } from 'lib/constants'

import type { JoinedSurfaceAttached } from '../../types'
import type { JoinedContainerProps } from './types'

const CORNERS_AT_ATTACHED: Record<JoinedSurfaceAttached, (keyof JoinedContainerProps)[]> = {
  top: ['borderTopLeftRadius', 'borderTopRightRadius'],
  right: ['borderTopRightRadius', 'borderBottomRightRadius'],
  bottom: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  left: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
}

export type UseJoinedContainerStyleParams = {
  attached?: JoinedSurfaceAttached
}

export const useJoinedContainerStyle = ({
  attached,
}: UseJoinedContainerStyleParams): JoinedContainerProps => {
  const props: JoinedContainerProps = {}

  if (attached) {
    for (const corner of CORNERS_AT_ATTACHED[attached]) {
      props[corner] = NEB_LENGTH.px_000
    }
  }

  return props
}
