import { TSHIRT_SIZES } from './tshirt-size'

export const CONTROL_SCALE_MAP: Record<
  (typeof TSHIRT_SIZES)[number],
  {
    blockSize: string
    paddingInline: string
    fontSize: string
    lineHeight: number | string
    gap: string
  }
> = {
  xs: {
    blockSize: '32px',
    paddingInline: '10px',
    fontSize: '13px',
    lineHeight: 1.1,
    gap: '5px',
  },
  sm: {
    blockSize: '38px',
    paddingInline: '13px',
    fontSize: '14px',
    lineHeight: 1.1,
    gap: '6px',
  },
  md: {
    blockSize: '44px',
    paddingInline: '16px',
    fontSize: '15px',
    lineHeight: 1.2,
    gap: '7px',
  },
  lg: {
    blockSize: '50px',
    paddingInline: '19px',
    fontSize: '16px',
    lineHeight: 1.2,
    gap: '8px',
  },
  xl: {
    blockSize: '56px',
    paddingInline: '22px',
    fontSize: '17px',
    lineHeight: 1.3,
    gap: '9px',
  },
}
