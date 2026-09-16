import { ReactNode } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { PassThrough } from 'node:stream'

// renderToString never waits for Suspense (including React.lazy) to resolve,
// so a lazy-loaded route would always render its fallback. renderToPipeableStream's
// onAllReady callback only fires once every Suspense boundary has fully resolved,
// so this collects the piped output into the same complete HTML string renderToString
// used to return, once it's actually ready.
export const renderAppToString = (node: ReactNode): Promise<string> => {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    const passThrough = new PassThrough()

    passThrough.on('data', chunk => chunks.push(chunk))
    passThrough.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    passThrough.on('error', reject)

    const { pipe } = renderToPipeableStream(node, {
      onAllReady() {
        pipe(passThrough)
      },
      onError(err) {
        reject(err)
      },
    })
  })
}
