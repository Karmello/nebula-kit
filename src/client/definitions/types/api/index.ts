export type ApiUser = {
  _id: string
  email: string
  createdAt: string
  plan: string
  licenseKey: string
  verified: boolean
}

export type ApiPaymentInfo = {
  plan: string
  status: string
  amount: string
  interval: string
  lastPayment: number
}
