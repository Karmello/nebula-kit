import React from 'react'
import '@testing-library/jest-dom'
import { enableFetchMocks } from 'jest-fetch-mock'
import 'jest-canvas-mock'
import { TextEncoder, TextDecoder } from 'util'

import '../lib/i18n'

global.React = React
global.scrollTo = jest.fn()
Element.prototype.scrollTo = jest.fn()
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

window.open = jest.fn()

enableFetchMocks()

try {
  if (!globalThis.MessageChannel) {
    // Node exposes a compatible MessageChannel via worker_threads
    const { MessageChannel } = require('node:worker_threads')
    globalThis.MessageChannel = MessageChannel
  }
} catch {
  // Extremely defensive fallback mock (rarely needed)
  globalThis.MessageChannel ||= class {
    port1 = { postMessage() {}, addEventListener() {}, start() {}, close() {} }
    port2 = { postMessage() {}, addEventListener() {}, start() {}, close() {} }
  }
}
