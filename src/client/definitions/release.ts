export const RELEASE_VERSIONS = ['0.4.0', '0.3.0', '0.2.3'] as const

export type ReleaseVersion = (typeof RELEASE_VERSIONS)[number]

export const RELEASE_INFO: Record<
  ReleaseVersion,
  {
    timestamp: number
  }
> = {
  '0.4.0': {
    timestamp: 1768953904795,
  },
  '0.3.0': {
    timestamp: 1768567158078,
  },
  '0.2.3': {
    timestamp: 1767722681237,
  },
}
