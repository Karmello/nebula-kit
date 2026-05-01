export const PRICING_DATA = {
  plans: {
    free: {
      id: 'free',
      title: 'Free',
      headline: 'For newcomers.',
      price: '$0',
      description:
        'Access the essential NebulaKit components to start building right away. Perfect for hobby projects, learning or exploring before committing.',
      whatYouGet: ['Discord access'],
    },
    premium: {
      id: 'premium',
      title: 'Premium',
      headline: 'For individual developers.',
      price: '$19 / month',
      description:
        "Unlock NebulaKit's full component library built on the core primitives. Perfect for individual developers and freelancers who want complete access to every building block",
      whatYouGet: ['Discord access with moderate chat support', 'GitHub roadmap access'],
    },
    business: {
      id: 'business',
      title: 'Business',
      headline: 'For small teams up to 10 members.',
      price: '$49 / month',
      description: 'Ideal for small teams building together under one license. Includes everything from the Premium plan.',
      whatYouGet: ['Discord access with chat support', 'GitHub roadmap access'],
    },
    enterprise: {
      id: 'enterprise',
      title: 'Enterprise',
      headline: 'For large organizations.',
      price: 'From $199 / month',
      description:
        'Tailored for large organizations and specialized use cases that need flexible agreements. Includes everything from the Business plan.',
      whatYouGet: ['Discord access with high priority chat support', 'GitHub roadmap access + elevated input consideration'],
    },
  },
  additionalInfo: [
    '* NebulaKit uses a single-license model, one paid subscription = one shared license key for unlocking the PRO bundle',
    '* Discord community access is open to everyone, chat support applies to the paying account holder only',
    '* as NebulaKit grows with more components and features, pricing may be adjusted slightly over time to reflect increased value, any updates will always be communicated in advance',
    '* all prices in USD',
  ],
}
