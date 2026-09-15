import { LENGTHS } from 'lib/constants/scales/length'
import { TSHIRT_SIZES } from 'lib/constants/scales/tshirt-size'

export type Length = (typeof LENGTHS)[number]
export type TShirtSize = (typeof TSHIRT_SIZES)[number]
