export const RELEASE_VERSIONS = ['0.3.0', '0.2.3'] as const

export type ReleaseVersion = (typeof RELEASE_VERSIONS)[number]

export const RELEASE_INFO: Record<
  ReleaseVersion,
  {
    timestamp: number
  }
> = {
  '0.3.0': {
    timestamp: 1768414504758,
  },
  '0.2.3': {
    timestamp: 1767722681237,
  },
}
