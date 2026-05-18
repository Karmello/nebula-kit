import { JSX } from 'react'

export type Pattern = {
  id: string
  category: 'Styling' | 'Layout' | 'Composition'
  title: string
  description: string
  jsx: JSX.Element
}
