import { updateDomRespDataset } from '../updateDomRespDataset'

const makeRef = () => ({
  current: {
    style: {} as Record<string, unknown>,
    dataset: {} as Record<string, unknown>,
  },
})

describe('updateDomRespDataset', () => {
  it('applies dataset values with prefixed names', () => {
    const ref = makeRef()

    updateDomRespDataset('Box', ref, 'base', {
      intent: 'primary',
    })

    expect(ref.current.dataset.nebBoxIntent).toBe('primary')
  })

  it('resets dataset values when removed', () => {
    const ref = makeRef()

    updateDomRespDataset('Box', ref, 'base', { intent: 'primary' })
    expect(ref.current.dataset.nebBoxIntent).toBe('primary')

    updateDomRespDataset('Box', ref, 'base', {})
    expect(ref.current.dataset.nebBoxIntent).toBeUndefined()
  })
})
