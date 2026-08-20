import { type Changelog } from 'client/definitions'

export const FORM_CHANGELOG: Changelog = {
  '0.10.0': [
    'removed `display` prop',
    'removed `scale` and `textAlign` props on Form.Label and Form.Hint slots',
    'made `onValidSubmission` prop optional',
  ],
  '0.2.3': ['released'],
}
