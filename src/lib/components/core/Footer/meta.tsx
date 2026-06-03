import { DEFAULT_SWITCH_AT, FOOTER_TAGS, SWITCH_AT } from 'lib/constants'
import { Footer, FooterProps, FooterSectionProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { FLEX_META } from '../Flex/meta'
import { DEFAULT_FOOTER_BORDER_INTENT } from './definitions'

export const FOOTER_META = {
  Footer: {
    overview: {
      bundle: 'core',
      title: 'Layout component for organizing footer content into responsive sections.',
      features: [
        'commonly used inside AppFrame.Footer at the bottom of the page',
        'manages spacing and layout for all its sections',
        'renders as a <div> by default since AppFrame.Footer already renders as <footer>',
        'can be switched to a <footer> element when used standalone',
      ],
      composedOf: ['Flex'],
      topLevelTags: ['div', 'footer'],
      slots: ['Footer.Section'],
    },
    props: {
      borderIntent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_FOOTER_BORDER_INTENT),
        description: 'Sets the visual intent of the dividers between sections.',
      },
      children: {
        ...BOX_META.Box.props.children,
        options: ['Footer.Section'],
        isRequired: true,
        description: 'Slots rendered.',
      },
      padding: BOX_META.Box.props.padding,
      paddingBlock: BOX_META.Box.props.paddingBlock,
      paddingInline: BOX_META.Box.props.paddingInline,
      paddingTop: BOX_META.Box.props.paddingTop,
      paddingRight: BOX_META.Box.props.paddingRight,
      paddingBottom: BOX_META.Box.props.paddingBottom,
      paddingLeft: BOX_META.Box.props.paddingLeft,
      switchAt: {
        options: SWITCH_AT as unknown as string[],
        defaultValue: DEFAULT_SWITCH_AT,
        description:
          'Defines the breakpoint at which footer sections switch from stacking vertically to arranging horizontally within the layout.',
      },
      tag: {
        ...BOX_META.Box.props.tag,
        options: FOOTER_TAGS,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: [
      {
        jsx: (
          <Footer>
            <Footer.Section>Section 1</Footer.Section>
            <Footer.Section>Section 2</Footer.Section>
            <Footer.Section>Section 3</Footer.Section>
          </Footer>
        ),
        skip: true,
      },
      {
        description: 'Displays three sections that stack on small screens and align horizontally from the medium breakpoint.',
        jsx: (
          <Footer switchAt="md" padding="15px">
            <Footer.Section>Section 1</Footer.Section>
            <Footer.Section>Section 2</Footer.Section>
            <Footer.Section>Section 3</Footer.Section>
          </Footer>
        ),
        sandBoxWithNoPadding: true,
      },
      {
        description: 'Displays three sections where the first one takes less space than the other two.',
        jsx: (
          <Footer switchAt="md" padding="15px">
            <Footer.Section flex="1">Section 1</Footer.Section>
            <Footer.Section flex="3">Section 2</Footer.Section>
            <Footer.Section flex="3">Section 3</Footer.Section>
          </Footer>
        ),
        sandBoxWithNoPadding: true,
      },
    ],
    changelog: {
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<FooterProps>,
  FooterSection: {
    overview: {
      bundle: 'core',
      name: 'Footer.Section',
      title: 'Flexible subcomponent that represents an individual area within the footer.',
      features: ['controls how a section stretches along the horizontal axis and aligns its content along the vertical axis'],
      composedOf: ['Flex.Item', 'Box'],
      topLevelTags: ['section'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      tagRef: FLEX_META.FlexItem.props.tagRef,
      tagAttrs: FLEX_META.FlexItem.props.tagAttrs,
      flex: FLEX_META.FlexItem.props.flex,
      alignSelf: FLEX_META.FlexItem.props.alignSelf,
    },
  } satisfies ComponentMeta<FooterSectionProps>,
}
