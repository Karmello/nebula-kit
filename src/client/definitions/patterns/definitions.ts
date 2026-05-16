import { JSX } from 'react'

export type Pattern = {
  id: string
  category: 'Styling' | 'Layout'
  title: string
  description: string
  jsx: JSX.Element
}
