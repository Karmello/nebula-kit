import { ComponentMeta } from 'client/definitions'
import { AppFrameOwnProps } from 'lib/components/layouts/AppFrame/definitions'

const APP_FRAME_PROPS_META: ComponentMeta<AppFrameOwnProps>['props'] = {
  stickyHeader: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description:
      'makes the AppFrame.Header remain fixed at the top of the viewport while scrolling the main content',
  },
}

export { APP_FRAME_PROPS_META }
