export const RELEASE_VERSIONS = ['0.1.2'] as const

export type ReleaseVersion = (typeof RELEASE_VERSIONS)[number]

export const RELEASE_INFO: Record<
  ReleaseVersion,
  {
    timestamp: number
  }
> = {
  '0.1.2': {
    timestamp: 1767624989071,
  },
}
