export type Plan = 'free' | 'premium' | 'business' | 'enterprise'

export type ApiUser = {
  _id: string
  email: string
  createdAt: number
  plan: Plan
  licenseKey: string
  discordUserId: string
  githubUsername: string
}

export type ApiSubscription = {
  plan: Plan
  status: string
  amount: string
  interval: string
  lastPayment: number
}
