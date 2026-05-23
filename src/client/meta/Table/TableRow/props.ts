import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { TableRowProps } from 'lib/components'

import { TABLE_PROPS_META } from '../props'

const TABLE_ROW_PROPS_META: ComponentMeta<TableRowProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    options: ['Table.Cell', 'Table.HeaderCell'],
    isRequired: true,
    description: 'Cell slot.',
  },
  color: {
    ...BOX_PROPS_META.color,
    description: 'Color applied to every cell.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Color tone applied to every cell.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  textAlign: TABLE_PROPS_META.textAlign,
}

export { TABLE_ROW_PROPS_META }
