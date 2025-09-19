import { ReactElement, ReactNode } from 'react'

export type HydrationGateProps = {
  children: ReactElement
  minDelay?: number
  fallback?: ReactNode
}
