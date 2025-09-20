import { ComponentMeta } from 'client/definitions'
import { Toolbar } from 'lib/components'
import { TOOLBAR_INHERITED_PROPS, ToolbarOwnProps } from 'lib/components/layouts/Toolbar/definitions'
import { TOOLBAR_END_INHERITED_PROPS } from 'lib/components/layouts/Toolbar/slots/ToolbarEnd/definitions'
import { TOOLBAR_MAIN_INHERITED_PROPS } from 'lib/components/layouts/Toolbar/slots/ToolbarMain/definitions'
import { TOOLBAR_START_INHERITED_PROPS } from 'lib/components/layouts/Toolbar/slots/ToolbarStart/definitions'

const TOOLBAR_META: ComponentMeta<ToolbarOwnProps> = {
  overview: {
    description: '...',
    role: ['...'],
    behavior: ['...'],
    examplesOfUse: ['...'],
    composedOf: TOOLBAR_INHERITED_PROPS,
    rendersAs: ['nav'],
  },
  ownProps: [
    {
      name: 'switchAt',
      options: [''],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: '',
    },
  ],
  examples: [
    {
      jsx: (
        <Toolbar>
          <Toolbar.Start>Start</Toolbar.Start>
          <Toolbar.Main>Main</Toolbar.Main>
          <Toolbar.End>End</Toolbar.End>
        </Toolbar>
      ),
      sandBoxWithNoPadding: true,
    },
  ],
}

const TOOLBAR_MAIN_META: ComponentMeta<unknown> = {
  overview: {
    title: 'Toolbar.Main',
    description: '...',
    behavior: ['...'],
    byDefault: ['...'],
    examplesOfUse: ['...'],
    composedOf: TOOLBAR_MAIN_INHERITED_PROPS,
  },
}

const TOOLBAR_START_META: ComponentMeta<unknown> = {
  overview: {
    title: 'Toolbar.Start (optional)',
    description: '...',
    behavior: ['...'],
    byDefault: ['...'],
    examplesOfUse: ['...'],
    composedOf: TOOLBAR_START_INHERITED_PROPS,
  },
}

const TOOLBAR_END_META: ComponentMeta<unknown> = {
  overview: {
    title: 'Toolbar.End (optional)',
    description: '...',
    behavior: ['...'],
    byDefault: ['...'],
    examplesOfUse: ['...'],
    composedOf: TOOLBAR_END_INHERITED_PROPS,
  },
}

export default {
  Toolbar: TOOLBAR_META,
  'Toolbar.Main': TOOLBAR_MAIN_META,
  'Toolbar.Start': TOOLBAR_START_META,
  'Toolbar.End': TOOLBAR_END_META,
}
