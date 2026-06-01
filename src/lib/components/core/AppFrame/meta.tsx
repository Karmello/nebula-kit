import { ComponentMeta } from 'client/definitions'

import { type AppFrameProps } from './../AppFrame/definitions'
import { BOX_PROPS_META } from './../Box/meta/props'
import { GRID_PROPS_META } from '../Grid/meta/props'
import { AppFrame } from '.'

import {
  type AppFrameFooterProps,
  type AppFrameHeaderProps,
  type AppFrameMainProps,
  DEFAULT_APP_FRAME_FOOTER_INTENT,
  DEFAULT_APP_FRAME_HEADER_INTENT,
} from './slots'

export default {
  AppFrame: {
    overview: {
      bundle: 'core',
      title: 'Structural component that defines the global layout of an application view.',
      features: [
        'provides header, main area and footer regions for the application',
        'establishes a consistent page structure for application-level layouts',
      ],
      composedOf: ['Grid'],
      topLevelTags: ['div'],
      slots: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer'],
    },
    props: {
      children: {
        ...GRID_PROPS_META.children,
        isRequired: true,
        options: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer'],
        description: 'AppFrame.Footer is optional, the rest is required.',
      },
      tagAttrs: GRID_PROPS_META.tagAttrs,
      tagRef: GRID_PROPS_META.tagRef,
      stickyHeader: {
        options: ['boolean'],
        defaultValue: 'false',
        isRequired: false,
        isResponsive: false,
        description: 'Keeps the header fixed at the top of the viewport.',
      },
    },
    examples: [
      {
        description: 'Application view composed of header, main area and footer.',
        jsx: (
          <AppFrame>
            <AppFrame.Header>Header</AppFrame.Header>
            <AppFrame.Main>Main</AppFrame.Main>
            <AppFrame.Footer>Footer</AppFrame.Footer>
          </AppFrame>
        ),
        sandBoxWithNoPadding: true,
      },
    ],
    changelog: {
      '0.8.0': ['removed `borderIntent` prop'],
      '0.2.3': ['released'],
    },
  } as ComponentMeta<AppFrameProps>,
  AppFrameHeader: {
    overview: {
      bundle: 'core',
      name: 'AppFrame.Header',
      title: 'Defines the top region of AppFrame.',
      guidelines: ['typically used for navigation, branding or other global actions'],
      composedOf: ['Box'],
      topLevelTags: ['header'],
    },
    props: {
      children: {
        ...BOX_PROPS_META.children,
        isRequired: true,
      },
      color: BOX_PROPS_META.color,
      intent: {
        ...BOX_PROPS_META.intent,
        defaultValue: String(DEFAULT_APP_FRAME_HEADER_INTENT),
      },
      tagAttrs: BOX_PROPS_META.tagAttrs,
      tagRef: BOX_PROPS_META.tagRef,
    },
  } as ComponentMeta<AppFrameHeaderProps>,
  AppFrameMain: {
    overview: {
      bundle: 'core',
      name: 'AppFrame.Main',
      title: 'Defines the central content region of AppFrame.',
      features: ['holds the primary application content or view'],
      composedOf: ['Box'],
      topLevelTags: ['main'],
    },
    props: {
      children: {
        ...BOX_PROPS_META.children,
        isRequired: true,
      },
      tagAttrs: BOX_PROPS_META.tagAttrs,
      tagRef: BOX_PROPS_META.tagRef,
      padding: BOX_PROPS_META.padding,
      paddingInline: BOX_PROPS_META.paddingInline,
      paddingBlock: BOX_PROPS_META.paddingBlock,
      paddingTop: BOX_PROPS_META.paddingTop,
      paddingRight: BOX_PROPS_META.paddingRight,
      paddingBottom: BOX_PROPS_META.paddingBottom,
      paddingLeft: BOX_PROPS_META.paddingLeft,
    },
  } as ComponentMeta<AppFrameMainProps>,
  AppFrameFooter: {
    overview: {
      bundle: 'core',
      name: 'AppFrame.Footer?',
      title: 'Defines the bottom region of AppFrame.',
      guidelines: ['commonly used for legal notices, links or supplementary information'],
      composedOf: ['Box'],
      topLevelTags: ['footer'],
    },
    props: {
      children: {
        ...BOX_PROPS_META.children,
        isRequired: true,
      },
      color: BOX_PROPS_META.color,
      intent: {
        ...BOX_PROPS_META.intent,
        defaultValue: String(DEFAULT_APP_FRAME_FOOTER_INTENT),
      },
      padding: BOX_PROPS_META.padding,
      paddingBlock: BOX_PROPS_META.paddingBlock,
      paddingBottom: BOX_PROPS_META.paddingBottom,
      paddingInline: BOX_PROPS_META.paddingInline,
      paddingLeft: BOX_PROPS_META.paddingLeft,
      paddingRight: BOX_PROPS_META.paddingRight,
      paddingTop: BOX_PROPS_META.paddingTop,
      tagAttrs: BOX_PROPS_META.tagAttrs,
      tagRef: BOX_PROPS_META.tagRef,
    },
  } as ComponentMeta<AppFrameFooterProps>,
}
