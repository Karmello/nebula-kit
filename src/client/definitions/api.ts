export type ApiUser = {
  _id: string
  email: string
  createdAt: number
  plan: string
  licenseKey: string
  discordUserId: string
  githubUsername: string
}

export type ApiSubscription = {
  plan: string
  status: string
  amount: string
  interval: string
  lastPayment: number
}
