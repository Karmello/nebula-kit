import { TShirtSize } from 'lib/types'

export const CONTROL_SCALE_MAP: Record<
  TShirtSize,
  {
    blockSize: string
    fontSize: string
    lineHeight: number | string
    gap: string
  }
> = {
  xs: {
    blockSize: '32px',
    fontSize: '13px',
    lineHeight: 1.1,
    gap: '4px',
  },
  sm: {
    blockSize: '38px',
    fontSize: '14px',
    lineHeight: 1.1,
    gap: '5px',
  },
  md: {
    blockSize: '44px',
    fontSize: '15px',
    lineHeight: 1.1,
    gap: '6px',
  },
  lg: {
    blockSize: '50px',
    fontSize: '17px',
    lineHeight: 1.1,
    gap: '7px',
  },
  xl: {
    blockSize: '56px',
    fontSize: '20px',
    lineHeight: 1.1,
    gap: '8px',
  },
}
