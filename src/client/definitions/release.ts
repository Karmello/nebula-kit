export const RELEASE_VERSIONS = ['0.3.0', '0.2.3'] as const

export type ReleaseVersion = (typeof RELEASE_VERSIONS)[number]

export const RELEASE_INFO: Record<
  ReleaseVersion,
  {
    timestamp: number
    description: string
  }
> = {
  '0.3.0': {
    timestamp: 1768567158078,
    description:
      'Following the initial public release, v0.3.0 expands NebulaKit with new Core and Pro components and refines existing APIs. The focus shifts from establishing foundations to growing a richer, more capable component ecosystem.',
  },
  '0.2.3': {
    timestamp: 1767722681237,
    description:
      'This is the first public release of NebulaKit Core and Pro. The foundation is in place and production-ready. From here on, the system will continue to evolve through versioned updates.',
  },
}
