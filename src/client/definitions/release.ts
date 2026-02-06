export const RELEASE_VERSIONS = [
  '0.6.0',
  '0.5.0',
  '0.4.3',
  '0.4.2',
  '0.4.1',
  '0.4.0',
  '0.3.0',
  '0.2.3',
] as const

export type ReleaseVersion = (typeof RELEASE_VERSIONS)[number]

export const RELEASE_INFO: Record<
  ReleaseVersion,
  {
    timestamp: number
    changelog?: { main?: string[]; core?: string[]; pro?: string[] }
  }
> = {
  '0.6.0': {
    timestamp: 1770354669798,
    changelog: {
      main: ['added Preferences dialog', 'refined Button sizing'],
    },
  },
  '0.5.0': {
    timestamp: 1770177660907,
    changelog: {
      main: [
        'improved ripple animation',
        'added global ripple toggle',
        'improved focus rings',
        'improved styling system doc pages',
        'fixed blank Pricing page issue',
      ],
    },
  },
  '0.4.3': {
    timestamp: 1769904739419,
    changelog: {
      main: ['enhanced editor IntelliSense with richer tooltips for slots and slot props'],
    },
  },
  '0.4.2': {
    timestamp: 1769515247187,
    changelog: {
      main: ['enhanced editor IntelliSense with richer tooltips for components'],
    },
  },
  '0.4.1': {
    timestamp: 1769434481859,
    changelog: {
      main: ['enhanced editor IntelliSense with richer tooltips for component props'],
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
