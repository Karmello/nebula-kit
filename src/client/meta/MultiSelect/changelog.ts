import { type Changelog } from 'client/definitions'

export const MULTI_SELECT_CHANGELOG: Changelog = {
  '0.7.0': ['replaced `triggerIntent` and `listIntent` with a single `intent` prop'],
  '0.6.0': ['replaced `intent` with separate `triggerIntent` and `listIntent` props'],
  '0.3.0': ['released'],
}
