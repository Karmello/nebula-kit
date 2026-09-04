import type { DocOverview } from 'client/definitions'

export const APP_FRAME_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Application shell for structuring a full page view.',
  description:
    'AppFrame defines the outer structure of an application view by arranging header, main and footer regions into a predictable page shell.',
  features: [
    'provides semantic header, main and footer regions',
    'keeps application-level page structure consistent',
    'supports an optional sticky header',
    'allows the main region to own page content spacing',
    'supports footer sections that can stack or align horizontally across breakpoints',
  ],
  composedOf: ['Box'],
  exposedTags: ['div'],
  slots: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer', 'AppFrame.FooterSection'],
}
