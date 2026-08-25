import { type Changelog } from 'client/definitions'

export const SELECT_CHANGELOG: Changelog = {
  '0.7.0': ['replaced `triggerIntent` and `listIntent` with a single `intent` prop'],
  '0.6.0': ['replaced `intent` with separate `triggerIntent` and `listIntent` props'],
  '0.5.0': ['removed `onClosed` prop'],
  '0.3.0': ['updated public API'],
  '0.2.3': ['released'],
}
