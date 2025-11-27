export type ApiUser = {
  _id: string
  email: string
  createdAt: string
  plan: string
  licenseKey: string
}

export type ApiSubscription = {
  plan: string
  status: string
  amount: string
  interval: string
  lastPayment: number
}
