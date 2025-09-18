// import { WithSlots } from 'lib/components/internal'
// import { Inner } from 'lib/components'
// import { withPrefix } from 'lib/helpers'

// import { ComponentProps } from './definitions'

// import './component.scss'

// export const Component = ({ children }: ComponentProps) => {
//   return (
//     <WithSlots<'Slot1' | 'Slot2'>
//         componentName="Component"
//         slotsConfig={[
//           { name: 'Slot1', required: true },
//           { name: 'Slot2' },
//         ]}
//         childrenToVerify={children}
//       >
//         {slots => (
//           <Inner elemProps={{ className: withPrefix('inner') }}>
//             {slots.Slot1 || <div />}
//             {slots.Slot2 || <div />}
//           </Inner>
//         )}
//       </WithSlots>
//   )
// }

// Component.displayName = 'Component'
