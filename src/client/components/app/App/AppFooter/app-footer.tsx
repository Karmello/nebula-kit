import { Footer } from 'lib/components'

const SECTIONS = [
  { heading: 'About', content: <div /> },
  { heading: 'Contact', content: <div /> },
  { heading: 'Support', content: <div /> },
]

export const AppFooter = () => {
  return <Footer sections={SECTIONS} />
}
