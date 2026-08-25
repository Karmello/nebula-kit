import { BOX_META } from '../Box'

export const DIALOG_CONTENT_META = {
  overview: {
    bundle: 'pro',
    name: 'Dialog.Content',
    title: 'Primary content area of the dialog.',
    composedOf: ['Box'],
    exposedTags: ['div'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      isRequired: true,
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
  },
}
