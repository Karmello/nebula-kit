export const RELEASE_VERSIONS = ['0.4.2', '0.4.1', '0.4.0', '0.3.0', '0.2.3'] as const

export type ReleaseVersion = (typeof RELEASE_VERSIONS)[number]

export const RELEASE_INFO: Record<
  ReleaseVersion,
  {
    timestamp: number
    changelog?: { core?: string[]; pro?: string[] }
  }
> = {
  '0.4.2': {
    timestamp: 1769488264433,
    changelog: {
      core: ['enhanced editor IntelliSense with richer component tooltips'],
      pro: ['enhanced editor IntelliSense with richer component tooltips'],
    },
  },
  '0.4.1': {
    timestamp: 1769434481859,
    changelog: {
      core: ['enhanced editor IntelliSense with richer prop tooltips'],
      pro: ['enhanced editor IntelliSense with richer prop tooltips'],
    },
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
