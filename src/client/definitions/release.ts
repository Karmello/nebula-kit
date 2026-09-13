export const RELEASE_VERSIONS = ['0.12.0'] as const

export type ReleaseVersion = (typeof RELEASE_VERSIONS)[number]

export const RELEASE_INFO: Record<
  ReleaseVersion,
  {
    timestamp: number
    headline?: string
    changelog?: { main?: string[]; core?: string[]; pro?: string[] }
  }
> = {
  '0.12.0': {
    timestamp: 1789257600000,
  },
}
