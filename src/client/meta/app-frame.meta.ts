import { PropCategory } from 'client/definitions'
import { AppFrameOwnProps } from 'lib/components'
import { ComponentMeta } from 'lib/definitions'

const APP_FRAME_META: ComponentMeta<AppFrameOwnProps> = {
  name: 'AppFrame',
  description:
    "AppFrame is a structural component meant to wrap an entire application view. It defines a consistent layout with clear regions for a header, main content area, and optional footer. By handling these slots centrally, it gives you a predictable frame for building pages while keeping layout concerns separated from the content itself. It's essentially the scaffolding for your app's UI, ensuring that the overall page structure stays uniform no matter what gets rendered inside.",
  props: [
    {
      category: PropCategory.behavior,
      name: 'stickyHeader',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: '',
    },
    {
      category: PropCategory.other,
      name: 'children',
      options: ['ReactNode'],
      defaultValue: '',
      isRequired: true,
      isResponsive: false,
      description: '',
    },
  ],
}

export default APP_FRAME_META
