import { JSX } from 'react'

export type Pattern = {
  id: string
  category: 'Styling system' | 'Layout' | 'Forms'
  title: string
  description: string
  jsx: JSX.Element
}
