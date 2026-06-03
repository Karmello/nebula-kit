import { Pattern } from './definitions'
import { DrawableSurface } from './jsx/drawable-surface'
import drawableSurfaceCode from './jsx/drawable-surface.tsx?raw'
import { InteractiveCard } from './jsx/interactive-card'
import interactiveCardCode from './jsx/interactive-card.tsx?raw'
import { LoginForm } from './jsx/login-form'
import loginFormCode from './jsx/login-form.tsx?raw'
import { ResponsiveStack } from './jsx/responsive-stack'
import responsiveStackCode from './jsx/responsive-stack.tsx?raw'
import { StylingIsland } from './jsx/styling-island'
import stylingIslandCode from './jsx/styling-island.tsx?raw'
// jsx
import { Test } from './jsx/test'
// code
import testCode from './jsx/test.tsx?raw'

export const PATTERNS: Array<Pattern> = [
  {
    id: 'test',
    category: 'Basic',
    title: 'Test',
    description: 'Just for testing.',
    component: Test,
    code: testCode,
  },
  {
    id: 'drawable-surface',
    category: 'Basic',
    title: 'Drawable surface',
    description: 'Box turns into a drawable surface when **drawable**, **variant** and **intent** props are provided.',
    component: DrawableSurface,
    code: drawableSurfaceCode,
  },
  {
    id: 'styling-island',
    category: 'Basic',
    title: 'Styling island',
    description: 'Components within a styling island resolve against the local **theme** and **brand**.',
    component: StylingIsland,
    code: stylingIslandCode,
  },
  {
    id: 'responsive-stack',
    category: 'Layout',
    title: 'Responsive stack',
    description: 'Items stack **vertically** on mobile and align **horizontally** on larger screens.',
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
]

export * from './definitions'
