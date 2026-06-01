import { ComponentMeta } from 'client/definitions'

import { type AppFrameProps } from './../AppFrame/definitions'
import BOX_META from './../Box/meta'
import GRID_META from '../Grid/meta'
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
        ...GRID_META.Grid.props.children,
        isRequired: true,
        options: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer'],
        description: 'AppFrame.Footer is optional, the rest is required.',
      },
      tagAttrs: GRID_META.Grid.props.tagAttrs,
      tagRef: GRID_META.Grid.props.tagRef,
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
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      color: BOX_META.Box.props.color,
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_APP_FRAME_HEADER_INTENT),
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
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
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      padding: BOX_META.Box.props.padding,
      paddingInline: BOX_META.Box.props.paddingInline,
      paddingBlock: BOX_META.Box.props.paddingBlock,
      paddingTop: BOX_META.Box.props.paddingTop,
      paddingRight: BOX_META.Box.props.paddingRight,
      paddingBottom: BOX_META.Box.props.paddingBottom,
      paddingLeft: BOX_META.Box.props.paddingLeft,
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
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      color: BOX_META.Box.props.color,
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_APP_FRAME_FOOTER_INTENT),
      },
      padding: BOX_META.Box.props.padding,
      paddingBlock: BOX_META.Box.props.paddingBlock,
      paddingBottom: BOX_META.Box.props.paddingBottom,
      paddingInline: BOX_META.Box.props.paddingInline,
      paddingLeft: BOX_META.Box.props.paddingLeft,
      paddingRight: BOX_META.Box.props.paddingRight,
      paddingTop: BOX_META.Box.props.paddingTop,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
  } as ComponentMeta<AppFrameFooterProps>,
}
