import { type DocChangelog } from 'client/definitions'

export const HORIZONTAL_RULE_CHANGELOG: DocChangelog = {
  '0.11.0': [
    'renamed `Divider` to `HorizontalRule`',
    'removed `surface` prop',
    'changed `surface` prop to `surfaceDepth`',
  ],
  '0.9.0': [
    'added support for predefined size scale values on margin-related props',
    'removed `opacity` prop',
    'exposed `surface` prop via Box',
  ],
  '0.8.0': ['changed `elevated` prop to `surface`'],
  '0.7.0': ['exposed `elevated` prop via Box'],
  '0.6.0': ['exposed `opacity` prop via Box'],
  '0.2.3': ['released'],
}
