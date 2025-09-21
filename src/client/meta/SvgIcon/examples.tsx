import { ComponentMeta } from 'client/definitions'
import { SvgIcon, SvgIconProps } from 'lib/components'

const SVG_ICON_EXAMPLES_META: ComponentMeta<SvgIconProps>['examples'] = [
  {
    description: 'Renders the search icon at the default size 8 (16px) with neutral color.',
    jsx: <SvgIcon iconName="search" />,
  },
  {
    description: 'Renders the search icon at size 20 (40px) with the default neutral color.',
    jsx: <SvgIcon iconName="search" iconSize={20} />,
  },
  {
    description: 'Renders the search icon at size 20 (40px) with the primary color intent.',
    jsx: <SvgIcon iconName="search" iconSize={20} iconIntent="primary" />,
  },
]

export default SVG_ICON_EXAMPLES_META
