import { ComponentMeta } from 'client/definitions'
import { AppFrameOwnProps } from 'lib/components/layouts/AppFrame/definitions'

export default {
  stickyHeader: {
    name: 'stickyHeader',
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description:
      'makes the AppFrame.Header remain fixed at the top of the viewport while scrolling the main content',
  },
} as ComponentMeta<AppFrameOwnProps>['ownProps']
