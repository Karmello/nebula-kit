export const IMAGE_LOADING = ['eager', 'lazy'] as const
export const IMAGE_DECODING = ['sync', 'async', 'auto'] as const
export const IMAGE_CROSS_ORIGIN = ['anonymous', 'use-credentials'] as const
export const IMAGE_OBJECT_FIT = ['cover', 'contain', 'fill', 'none', 'scale-down'] as const
export const IMAGE_FETCH_PRIORITY = ['high', 'low', 'auto'] as const

export const IMAGE_REFERRER_POLICY = [
  'no-referrer',
  'no-referrer-when-downgrade',
  'origin',
  'origin-when-cross-origin',
  'same-origin',
  'strict-origin',
  'strict-origin-when-cross-origin',
  'unsafe-url',
] as const
