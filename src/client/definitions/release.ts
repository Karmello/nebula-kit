export const RELEASE_VERSIONS = ['0.2.1'] as const

export type ReleaseVersion = (typeof RELEASE_VERSIONS)[number]

export const RELEASE_INFO: Record<
  ReleaseVersion,
  {
    timestamp: number
  }
> = {
  '0.2.1': {
    timestamp: 1767624989071,
  },
}
