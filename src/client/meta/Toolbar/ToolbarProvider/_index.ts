import { ComponentMeta } from 'client/definitions'

const TOOLBAR_PROVIDER_META: ComponentMeta<any> = {
  overview: {
    name: 'useToolbarContext',
    title: "Gives access to a Toolbar component's context through its Provider.",
    description: [
      'must be used inside <Toolbar>',
      'enables manual control of the main slot’s open/close state in collapsed mode',
    ],
  },
}

export { TOOLBAR_PROVIDER_META }
