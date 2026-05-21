import type {
  PropsFromAvatarKey,
  PropsFromBoxKey,
  PropsFromButtonKey,
  PropsFromCalloutKey,
  PropsFromCheckboxKey,
  PropsFromIconKey,
  PropsFromInputKey,
  PropsFromLoaderKey,
  PropsFromRevealKey,
  PropsFromSectionKey,
  PropsFromSelectKey,
  PropsFromSwitchKey,
  PropsFromTableKey,
  PropsFromTabsKey,
  PropsFromTextKey,
  PropsFromWithIconKey,
} from './types'

export const PLAYGROUND_PRESETS: Record<string, Array<{ name: string; props: object }>> = {
  Avatar: [
    {
      name: 'Default',
      props: {
        src: '/src/client/assets/img-2.webp',
      } as Record<PropsFromAvatarKey, unknown>,
    },
  ],
  Box: [
    {
      name: 'Non-drawable',
      props: {
        children: 'Non-drawable Box used as a simple container.',
      } as Record<PropsFromBoxKey, unknown>,
    },
    {
      name: 'Drawable',
      props: {
        children: 'Drawable Box with solid variant, primary intent and green color applied.',
        drawable: true,
        variant: 'solid',
        color: 'green',
        intent: 'primary',
        padding: '20px',
      } as Record<PropsFromBoxKey, unknown>,
    },
    {
      name: 'Interactive',
      props: {
        children: 'Interactive Box with solid variant, primary intent and blue color applied.',
        drawable: true,
        interactive: true,
        variant: 'solid',
        color: 'blue',
        intent: 'primary',
        padding: '20px',
      } as Record<PropsFromBoxKey, unknown>,
    },
  ],
  Button: [
    {
      name: 'Simple',
      props: {
        children: 'Click me',
        color: 'green',
        intent: 'primary',
      } as Record<PropsFromButtonKey, unknown>,
    },
    {
      name: 'Full-width',
      props: {
        children: 'Click me',
        color: 'blue',
        intent: 'primary',
        fullWidth: true,
      } as Record<PropsFromButtonKey, unknown>,
    },
    {
      name: 'With icon',
      props: {
        children: 'Send',
        color: 'blue',
        intent: 'primary',
        iconName: 'send',
        iconPlacement: 'right',
      } as Record<PropsFromButtonKey, unknown>,
    },
    {
      name: 'Loading',
      props: {
        children: 'Loading ...',
        color: 'blue',
        intent: 'primary',
        loading: true,
      } as Record<PropsFromButtonKey, unknown>,
    },
    {
      name: 'Extra large',
      props: {
        children: 'Extra large button',
        description: 'Extra large button displays description.',
        bold: true,
        size: 'xl',
        iconName: 'tree-pine',
        color: 'blue',
        intent: 'secondary',
      } as Record<PropsFromButtonKey, unknown>,
    },
  ],
  Callout: [
    {
      name: 'Success',
      props: {
        content: 'Success callout with solid variant applied.',
        status: 'success',
      } as Record<PropsFromCalloutKey, unknown>,
    },
    {
      name: 'Info',
      props: {
        content: 'Info callout with outline variant applied.',
        status: 'info',
        variant: 'outline',
      } as Record<PropsFromCalloutKey, unknown>,
    },
  ],
  Checkbox: [
    {
      name: 'Standard',
      props: {
        color: 'gray',
      } as Record<PropsFromCheckboxKey, unknown>,
    },
    {
      name: 'Solid',
      props: {
        variant: 'solid',
        color: 'blue',
      } as Record<PropsFromCheckboxKey, unknown>,
    },
  ],
  Icon: [
    {
      name: 'Default size',
      props: {
        name: 'mail',
        color: 'green',
        intent: 'primary',
      } as Record<PropsFromIconKey, unknown>,
    },
    {
      name: 'Custom size',
      props: {
        name: 'globe',
        color: 'blue',
        intent: 'secondary',
        size: '50px',
      } as Record<PropsFromIconKey, unknown>,
    },
  ],
  Input: [
    {
      name: 'Default',
      props: {
        placeholder: 'Input with solid variant applied',
      } as Record<PropsFromInputKey, unknown>,
    },
    {
      name: 'Custom',
      props: {
        placeholder: 'Input with outline variant applied',
        variant: 'outline',
      } as Record<PropsFromInputKey, unknown>,
    },
  ],
  Loader: [
    {
      name: 'Default',
      props: {} as Record<PropsFromLoaderKey, unknown>,
    },
    {
      name: 'Custom',
      props: {
        color: 'blue',
        size: '2xl',
      } as Record<PropsFromLoaderKey, unknown>,
    },
  ],
  Reveal: [
    {
      name: 'Basic',
      props: {
        children: 'Hidden by default. Revealed with motion when the moment feels right.',
        label: 'Reveal me !',
      } as Record<PropsFromRevealKey, unknown>,
    },
  ],
  Section: [
    {
      name: 'Basic',
      props: {
        children: 'This is simple basic section.',
        heading: 'Basic section',
      } as Record<PropsFromSectionKey, unknown>,
    },
    {
      name: 'With border',
      props: {
        children: 'This section has icon and blue border around the content.',
        color: 'blue',
        heading: 'Section with border',
        iconName: 'settings',
        intent: 'secondary',
        size: 'lg',
        variant: 'outline',
      } as Record<PropsFromSectionKey, unknown>,
    },
    {
      name: 'Interactive',
      props: {
        children: 'This is interactive Section that responds visually to hover and active states.',
        color: 'blue',
        heading: 'Interactive section',
        iconName: 'settings',
        intent: 'secondary',
        size: 'lg',
        variant: 'outline',
        interactive: true,
      } as Record<PropsFromSectionKey, unknown>,
    },
  ],
  Select: [
    {
      name: 'Default',
      props: {
        //
      } as Record<PropsFromSelectKey, unknown>,
    },
    {
      name: 'Custom width',
      props: {
        inlineSize: '200px',
      } as Record<PropsFromSelectKey, unknown>,
    },
    {
      name: 'Blue primary',
      props: {
        inlineSize: '200px',
        intent: 'primary',
        color: 'blue',
      } as Record<PropsFromSelectKey, unknown>,
    },
  ],
  Switch: [
    {
      name: 'Default',
      props: {
        //
      } as Record<PropsFromSwitchKey, unknown>,
    },
    {
      name: 'Custom',
      props: {
        color: 'blue',
        intent: 'primary',
        size: 'lg',
      } as Record<PropsFromSwitchKey, unknown>,
    },
  ],
  Table: [
    {
      name: 'Default',
      props: {
        //
      } as Record<PropsFromTableKey, unknown>,
    },
    {
      name: 'Borderless',
      props: {
        intent: 'neutral',
      } as Record<PropsFromTableKey, unknown>,
    },
  ],
  Tabs: [
    {
      name: 'Default',
      props: {
        //
      } as Record<PropsFromTabsKey, unknown>,
    },
    {
      name: 'Custom',
      props: {
        inlineSize: '100%',
        variant: 'solid',
        intent: 'primary',
      } as Record<PropsFromTabsKey, unknown>,
    },
  ],
  Text: [
    {
      name: 'Default',
      props: {
        children: 'This is basic text with default body typography.',
      } as Record<PropsFromTextKey, unknown>,
    },
    {
      name: 'Custom',
      props: {
        children: 'This is colored heading text.',
        color: 'red',
        intent: 'primary',
        typography: 'h4',
      } as Record<PropsFromTextKey, unknown>,
    },
  ],
  WithIcon: [
    {
      name: 'Icon on the right',
      props: {
        children: 'Text aligned together with icon',
        iconName: 'puzzle',
        iconPlacement: 'right',
      } as Record<PropsFromWithIconKey, unknown>,
    },
  ],
}
