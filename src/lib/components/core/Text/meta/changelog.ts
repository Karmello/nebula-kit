import { type Changelog } from 'client/definitions'

export const TEXT_CHANGELOG: Changelog = {
  '0.10.0': ['removed `scale` prop', 'added `wordBreak` prop', 'removed `WithIcon` dependency'],
  '0.9.0': ['added `fontSize` and `lineHeight` props for overriding typography-derived values directly'],
  '0.7.0': ['fixed text link display behavior inside table cells'],
  '0.2.3': ['released'],
}
