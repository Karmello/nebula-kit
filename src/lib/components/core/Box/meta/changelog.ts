import { type Changelog } from 'client/definitions'

export const BOX_CHANGELOG: Changelog = {
  '0.11.0': ['replaced `flipped` theme value with `global` and `global-flipped`'],
  '0.9.0': [
    'added `hidden` prop',
    'added support for the flipped `theme` value, allowing components to invert the nearest inherited theme within a subtree',
    'changed `surface` prop to `elevated`',
    'changed `selected` prop to `surface`',
  ],
  '0.8.0': [
    'updated Box to always render internal `ThemeProvider` and `BrandProvider`, ensuring styling context is consistently resolved and propagates correctly through portals',
    'removed `defaultState` prop',
    'added `selected` prop',
    'changed `elevated` prop to `surface`',
  ],
  '0.7.0': [
    'added visual active state styling alongside hover for interactive Box',
    'added `defaultState` prop',
    'added `activeOnFocus` prop',
  ],
  '0.4.0': ['added `visibility` prop', 'added `aspectRatio` prop', 'added `transform` prop'],
  '0.2.3': ['released'],
}
