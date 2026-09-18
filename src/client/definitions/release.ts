export const RELEASE_VERSIONS = ['0.11.0', '0.10.0', '0.4.0', '0.3.0', '0.2.3'] as const

export type ReleaseVersion = (typeof RELEASE_VERSIONS)[number]

export const RELEASE_INFO: Record<
  ReleaseVersion,
  {
    timestamp: number
    headline?: string
    changelog?: { main?: string[]; core?: string[]; pro?: string[] }
  }
> = {
  '0.11.0': {
    timestamp: 1789257600000,
  },
  '0.10.0': {
    timestamp: 1779319530393,
  },
  '0.4.0': {
    timestamp: 1769178791000,
  },
  '0.3.0': {
    timestamp: 1768567158078,
  },
  '0.2.3': {
    timestamp: 1767722681237,
  },
}
