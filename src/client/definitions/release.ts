export const RELEASE_VERSIONS = ['0.2.3'] as const

export type ReleaseVersion = (typeof RELEASE_VERSIONS)[number]

export const RELEASE_INFO: Record<
  ReleaseVersion,
  {
    timestamp: number
  }
> = {
  '0.2.3': {
    timestamp: 1767624989071,
  },
}
