import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

import { WithSlots } from '../with-slots'

const Slot = () => <div>Component.Slot</div>
Slot.displayName = 'Component.Slot'

const NotASlot = () => <div>not a slot</div>

const Component = {
  Slot,
}

describe('<WithSlots />', () => {
  it('Single required slot', () => {
    render(
      <WithSlots<'Component.Slot'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Slot',
            required: true,
            allowMultiple: true,
          },
        ]}
        childrenToVerify={[<NotASlot />, <Component.Slot />, <NotASlot />]}
      >
        {({ slotsByName, allValidSlots }) => {
          expect(Object.keys(slotsByName)).toHaveLength(1)
          expect(slotsByName['Component.Slot']).toBeDefined()
          expect(allValidSlots).toHaveLength(1)
          return null
        }}
      </WithSlots>
    )
  })
})
