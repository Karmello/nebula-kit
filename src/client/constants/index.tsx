export * from './countries'

export const GENDERS = [
  { value: 'female', text: 'Female' },
  { value: 'male', text: 'Male' },
]

export const EXAMPLE_SHORT_TEXT = 'This is an example short text.'

export const EXAMPLE_LONG_TEXT =
  'Soon we were hemmed in with trees, which in places arched right over the roadway till we passed as through a tunnel and again great frowning rocks guarded us boldly on either side. Though we were in shelter, we could hear the rising wind, for it moaned and whistled through the rocks, and the branches of the trees crashed together as we swept along. It grew colder and colder still, and fine, powdery snow began to fall, so that soon we and all around us were covered with a white blanket. The keen wind still carried the howling of the dogs, though this grew fainter as we went on our way. The baying of the wolves sounded nearer and nearer, as though they were closing round on us from every side. I grew dreadfully afraid, and the horses shared my fear. The driver, however, was not in the least disturbed. He kept turning his head to left and right, but I could not see anything through the darkness.'

export const HEADING_EXAMPLE_TEXT = 'This is an example heading text.'

export const PARAGRAPH_EXAMPLE_TEXT =
  'This is an example paragraph text. Paragraph is an example text this. Example this is paragraph text an. Text an example is this paragraph. An text paragraph example this is. Is example paragraph this an text. Paragraph this text is example an. Example is this an text paragraph. Text paragraph is an this example. Is this paragraph text example an. An example this is paragraph text. This paragraph example an is text. This text an paragraph example is. Paragraph an this example is text. Example paragraph is text an this. Text this is example an paragraph.'

export const LABEL_EXAMPLE_TEXT = 'This is an example label text.'

export const TABLE_HEADER = ['First name', 'Last name', 'Country', 'Club', 'Position']

export const TABLE_ROWS = [
  ['Robert', 'Lewandowski', 'Poland', 'FC Barcelona', 'ST'],
  ['Kylian', 'Mbappe', 'France', 'Real Madrid', 'LW'],
  ['Lautaro', 'Martinez', 'Argentina', 'Inter Milan', 'ST'],
  ['Erling', 'Haaland', 'Norway', 'Manchester City', 'ST'],
  ['Declan', 'Rice', 'England', 'Arsenal London', 'CDM'],
]

export const EXAMPLE_OBJECT_DATA = {
  string: 'string',
  strings: ['string 1', 'string 2', 'string 3'],
  number: 100,
  numbers: [100, 200, 300],
  flag: true,
  flags: [true, false, true],
  mixedArray: ['string', 100, true],
  emptyObject: {},
  emptyArray: [] as never,
  function: () => {
    return
  },
  element: <div>This is React element</div>,
  nestedObject: {
    string: 'string',
    emptyObject: {},
    emptyArray: [] as never,
  },
}
