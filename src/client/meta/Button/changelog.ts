import { type Changelog } from 'client/definitions'

export const BUTTON_CHANGELOG: Changelog = {
  '0.10.0': ['removed `justifyContent` prop', 'removed `textAlign` prop', 'added `align` prop'],
  '0.9.0': ['changed `surface` prop to `elevated`'],
  '0.8.0': ['exposed `selected` prop', 'changed `elevated` prop to `surface`'],
  '0.7.0': ['exposed `interactive` prop'],
  '0.4.0': ['added `onClick` prop'],
  '0.2.3': ['released'],
}
