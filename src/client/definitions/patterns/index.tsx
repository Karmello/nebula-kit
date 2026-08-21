import { Pattern } from './definitions'
import { DrawableSurface } from './jsx/drawable-surface'
import drawableSurfaceCode from './jsx/drawable-surface.tsx?raw'
import { InteractiveCard } from './jsx/interactive-card'
import interactiveCardCode from './jsx/interactive-card.tsx?raw'
import { JoinedActionGroup } from './jsx/joined-action-group'
import joinedActionGroupCode from './jsx/joined-action-group.tsx?raw'
import { LoginForm } from './jsx/login-form'
import loginFormCode from './jsx/login-form.tsx?raw'
import { ResponsiveStack } from './jsx/responsive-stack'
import responsiveStackCode from './jsx/responsive-stack.tsx?raw'
import { StylingIsland } from './jsx/styling-island'
import stylingIslandCode from './jsx/styling-island.tsx?raw'

export const PATTERNS: Array<Pattern> = [
  {
    id: 'drawable-surface',
    category: 'Basic',
    title: 'Drawable surface',
    description:
      'Box turns into a drawable surface when **drawable**, **variant** and **intent** props are provided.',
    component: DrawableSurface,
    code: drawableSurfaceCode,
  },
  {
    id: 'styling-island',
    category: 'Basic',
    title: 'Styling island',
    description:
      'Components within a styling island resolve against the local **theme** and **brand**.',
    component: StylingIsland,
    code: stylingIslandCode,
  },
  {
    id: 'responsive-stack',
    category: 'Layout',
    title: 'Responsive stack',
    description:
      'Items stack **vertically** on mobile and align **horizontally** on larger screens.',
    component: ResponsiveStack,
    code: responsiveStackCode,
  },
  {
    id: 'interactive-card',
    category: 'Cards',
    title: 'Interactive card',
    description:
      'A clickable card can be composed from **Box** and layout primitives while keeping content structure fully authored by the user.',
    component: InteractiveCard,
    code: interactiveCardCode,
  },
  {
    id: 'login-form',
    category: 'Forms',
    title: 'Login form',
    description: 'Simple login form composition.',
    component: LoginForm,
    code: loginFormCode,
  },
  {
    id: 'joined-action-group',
    category: 'Actions',
    title: 'Joined action group',
    description:
      'Interactive items can be grouped into a joined surface with shared styling, tight spacing and authored per-item behavior.',
    component: JoinedActionGroup,
    code: joinedActionGroupCode,
  },
]

export * from './definitions'
