import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_TABLE_INTENT,
  DEFAULT_TABLE_LAYOUT,
  DEFAULT_TABLE_PADDING_BLOCK,
  DEFAULT_TABLE_PADDING_INLINE,
  TABLE_LAYOUTS,
  type TableProps,
} from './../Table/definitions'

import BOX_META from '../Box/meta'

import {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFooterProps,
  TableHeaderCellProps,
  TableHeaderProps,
  TableHeaderRowProps,
  TableRowProps,
} from './slots'

import { Table } from '.'
import { DEFAULT_TABLE_BODY_INTENT } from './slots/TableBody/definitions'
import { DEFAULT_TABLE_FOOTER_INTENT } from './slots/TableFooter/definitions'
import { DEFAULT_TABLE_CAPTION_INTENT } from './slots/TableCaption/definitions'

const TABLE_META = {
  overview: {
    bundle: 'core',
    title:
      'Layout component built on the HTML table element, providing a semantic structure for displaying data in rows and columns.',
    features: [
      'provides a semantic table-based layout wrapper',
      'organizes content into rows and columns with header, body and footer sections',
      'supports alignment and sizing of cells for structured data presentation',
      'always renders with square corners and does not inherit the global border radius',
    ],
    composedOf: ['Box'],
    topLevelTags: ['table'],
    slots: ['Table.Body', 'Table.Header', 'Table.Footer', 'Table.Caption'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      options: ['Table.Body', 'Table.Header', 'Table.Footer', 'Table.Caption'],
      isRequired: true,
      description: 'Table.Body is required, the rest optional.',
    },
    color: {
      ...BOX_META.Box.props.color,
      description: "Color applied to the table's background surface.",
    },
    inlineSize: BOX_META.Box.props.inlineSize,
    intent: {
      ...BOX_META.Box.props.intent,
      defaultValue: String(DEFAULT_TABLE_INTENT),
      description: "Color tone applied to the table's background surface.",
    },
    layout: {
      options: TABLE_LAYOUTS,
      defaultValue: DEFAULT_TABLE_LAYOUT,
      description: 'Defines the layout algorithm: "auto" sizes columns by content, "fixed" by table width and column widths.',
    },
    maxInlineSize: BOX_META.Box.props.maxInlineSize,
    minInlineSize: BOX_META.Box.props.minInlineSize,
    paddingBlock: {
      ...BOX_META.Box.props.paddingBlock,
      defaultValue: DEFAULT_TABLE_PADDING_BLOCK as never,
      description: 'Padding for the top and bottom sides applied to every cell.',
    },
    paddingInline: {
      ...BOX_META.Box.props.paddingInline,
      defaultValue: DEFAULT_TABLE_PADDING_INLINE as never,
      description: 'Padding for the left and right sides applied to every cell.',
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
    textAlign: {
      ...BOX_META.Box.props.textAlign,
      description: 'Text alignment applied to every cell.',
    },
  },
  examples: [
    {
      jsx: (
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Data</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ),
      skip: true,
    },
    {
      description: 'Default Table displaying only data rows.',
      jsx: (
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Robert</Table.Cell>
              <Table.Cell>Lewandowski</Table.Cell>
              <Table.Cell>FC Barcelona</Table.Cell>
              <Table.Cell>ST</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Piotr</Table.Cell>
              <Table.Cell>Zieliński</Table.Cell>
              <Table.Cell>Inter Milan</Table.Cell>
              <Table.Cell>CDM</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sebastian</Table.Cell>
              <Table.Cell>Szymański</Table.Cell>
              <Table.Cell>Fenerbahçe SK</Table.Cell>
              <Table.Cell>CAM</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ),
    },
    {
      description: 'Table displaying header and data rows.',
      jsx: (
        <Table>
          <Table.Header>
            <Table.HeaderRow>
              <Table.HeaderCell>First name</Table.HeaderCell>
              <Table.HeaderCell>Last name</Table.HeaderCell>
              <Table.HeaderCell>Club</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
            </Table.HeaderRow>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Robert</Table.Cell>
              <Table.Cell>Lewandowski</Table.Cell>
              <Table.Cell>FC Barcelona</Table.Cell>
              <Table.Cell>ST</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Piotr</Table.Cell>
              <Table.Cell>Zieliński</Table.Cell>
              <Table.Cell>Inter Milan</Table.Cell>
              <Table.Cell>CDM</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sebastian</Table.Cell>
              <Table.Cell>Szymański</Table.Cell>
              <Table.Cell>Fenerbahçe SK</Table.Cell>
              <Table.Cell>CAM</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ),
    },
    {
      description: 'Table with caption and footer.',
      jsx: (
        <Table>
          <Table.Header>
            <Table.HeaderRow>
              <Table.HeaderCell>First name</Table.HeaderCell>
              <Table.HeaderCell>Last name</Table.HeaderCell>
              <Table.HeaderCell>Club</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
            </Table.HeaderRow>
          </Table.Header>
          <Table.Caption>Polish football players and their club positions.</Table.Caption>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Robert</Table.Cell>
              <Table.Cell>Lewandowski</Table.Cell>
              <Table.Cell>FC Barcelona</Table.Cell>
              <Table.Cell>ST</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Piotr</Table.Cell>
              <Table.Cell>Zieliński</Table.Cell>
              <Table.Cell>Inter Milan</Table.Cell>
              <Table.Cell>CDM</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sebastian</Table.Cell>
              <Table.Cell>Szymański</Table.Cell>
              <Table.Cell>Fenerbahçe SK</Table.Cell>
              <Table.Cell>CAM</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.Cell colSpan={4}>Data as of 2025 season.</Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table>
      ),
    },
    {
      description: 'Custom intent applied to the table.',
      jsx: (
        <Table intent="primary">
          <Table.Header>
            <Table.HeaderRow>
              <Table.HeaderCell>First name</Table.HeaderCell>
              <Table.HeaderCell>Last name</Table.HeaderCell>
              <Table.HeaderCell>Club</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
            </Table.HeaderRow>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Robert</Table.Cell>
              <Table.Cell>Lewandowski</Table.Cell>
              <Table.Cell>FC Barcelona</Table.Cell>
              <Table.Cell>ST</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Piotr</Table.Cell>
              <Table.Cell>Zieliński</Table.Cell>
              <Table.Cell>Inter Milan</Table.Cell>
              <Table.Cell>CDM</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sebastian</Table.Cell>
              <Table.Cell>Szymański</Table.Cell>
              <Table.Cell>Fenerbahçe SK</Table.Cell>
              <Table.Cell>CAM</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ),
    },
    {
      description: 'Table with emphasized intent applied to data instead of header cells.',
      jsx: (
        <Table intent="neutral">
          <Table.Header>
            <Table.HeaderRow>
              <Table.HeaderCell>First name</Table.HeaderCell>
              <Table.HeaderCell>Last name</Table.HeaderCell>
              <Table.HeaderCell>Club</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
            </Table.HeaderRow>
          </Table.Header>
          <Table.Body intent="tertiary">
            <Table.Row>
              <Table.Cell>Robert</Table.Cell>
              <Table.Cell>Lewandowski</Table.Cell>
              <Table.Cell>FC Barcelona</Table.Cell>
              <Table.Cell>ST</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Piotr</Table.Cell>
              <Table.Cell>Zieliński</Table.Cell>
              <Table.Cell>Inter Milan</Table.Cell>
              <Table.Cell>CDM</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sebastian</Table.Cell>
              <Table.Cell>Szymański</Table.Cell>
              <Table.Cell>Fenerbahçe SK</Table.Cell>
              <Table.Cell>CAM</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ),
    },
    {
      description: 'Borderless table.',
      jsx: (
        <Table intent="neutral">
          <Table.Header>
            <Table.HeaderRow>
              <Table.HeaderCell>First name</Table.HeaderCell>
              <Table.HeaderCell>Last name</Table.HeaderCell>
              <Table.HeaderCell>Club</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
            </Table.HeaderRow>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Robert</Table.Cell>
              <Table.Cell>Lewandowski</Table.Cell>
              <Table.Cell>FC Barcelona</Table.Cell>
              <Table.Cell>ST</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Piotr</Table.Cell>
              <Table.Cell>Zieliński</Table.Cell>
              <Table.Cell>Inter Milan</Table.Cell>
              <Table.Cell>CDM</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sebastian</Table.Cell>
              <Table.Cell>Szymański</Table.Cell>
              <Table.Cell>Fenerbahçe SK</Table.Cell>
              <Table.Cell>CAM</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ),
    },
  ],
  changelog: {
    '0.2.3': ['released'],
  },
} as ComponentMeta<TableProps>

export default {
  Table: TABLE_META,
  TableBody: {
    overview: {
      bundle: 'core',
      name: 'Table.Body',
      title: 'Main data rows of the table.',
      guidelines: ['expects Table.Row as children', 'this slot can be used multiple times'],
      composedOf: ['Box'],
      topLevelTags: ['tbody'],
      slots: ['Table.Row'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        options: ['Table.Row'],
        isRequired: true,
        description: 'Row slot.',
      },
      color: {
        ...BOX_META.Box.props.color,
        description: 'Color applied to every cell.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: DEFAULT_TABLE_BODY_INTENT as never,
        description: 'Color tone applied to every cell.',
      },
      paddingBlock: {
        ...BOX_META.Box.props.paddingBlock,
        description: 'Padding for the top and bottom sides applied to every cell.',
      },
      paddingInline: {
        ...BOX_META.Box.props.paddingInline,
        description: 'Padding for the left and right sides applied to every cell.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      textAlign: TABLE_META.props.textAlign,
    },
  } as ComponentMeta<TableBodyProps>,
  TableHeader: {
    overview: {
      bundle: 'core',
      name: 'Table.Header?',
      title: 'Column headers of the table.',
      guidelines: ['expects Table.HeaderRow as children'],
      composedOf: ['Box'],
      topLevelTags: ['thead'],
      slots: ['Table.HeaderRow'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        options: ['Table.HeaderRow'],
        isRequired: true,
        description: 'Row slot.',
      },
      color: {
        ...BOX_META.Box.props.color,
        description: 'Color applied to every cell.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        description: 'Color tone applied to every cell.',
      },
      paddingBlock: {
        ...BOX_META.Box.props.paddingBlock,
        description: 'Padding for the top and bottom sides applied to every cell.',
      },
      paddingInline: {
        ...BOX_META.Box.props.paddingInline,
        description: 'Padding for the left and right sides applied to every cell.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      textAlign: TABLE_META.props.textAlign,
    },
  } as ComponentMeta<TableHeaderProps>,
  TableFooter: {
    overview: {
      bundle: 'core',
      name: 'Table.Footer?',
      title: 'Summary or footer rows of the table.',
      guidelines: ['expects Table.Row as children'],
      composedOf: ['Box'],
      topLevelTags: ['tfoot'],
      slots: ['Table.Row'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        options: ['Table.Row'],
        isRequired: true,
        description: 'Row slot.',
      },
      color: {
        ...BOX_META.Box.props.color,
        description: 'Color applied to every cell.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_TABLE_FOOTER_INTENT),
        description: 'Color tone applied to every cell.',
      },
      paddingBlock: {
        ...BOX_META.Box.props.paddingBlock,
        description: 'Padding for the top and bottom sides applied to every cell.',
      },
      paddingInline: {
        ...BOX_META.Box.props.paddingInline,
        description: 'Padding for the left and right sides applied to every cell.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      textAlign: TABLE_META.props.textAlign,
    },
  } as ComponentMeta<TableFooterProps>,
  TableCaption: {
    overview: {
      bundle: 'core',
      name: 'Table.Caption?',
      title: 'Provides a descriptive title for the table.',
      features: ['gets rendered at the top of the table as a descriptive title'],
      composedOf: ['Box'],
      topLevelTags: ['caption'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      color: BOX_META.Box.props.color,
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_TABLE_CAPTION_INTENT),
      },
      paddingBlock: BOX_META.Box.props.paddingBlock,
      paddingInline: BOX_META.Box.props.paddingInline,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      textAlign: BOX_META.Box.props.textAlign,
    },
  } as ComponentMeta<TableCaptionProps>,
  TableRow: {
    overview: {
      bundle: 'core',
      name: 'Table.Row',
      title: 'Represents a single row within the table structure.',
      guidelines: ['should be placed inside Table.Body or Table.Footer to define individual data rows'],
      composedOf: ['Box'],
      topLevelTags: ['tr'],
      slots: ['Table.Cell', 'Table.HeaderCell'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        options: ['Table.Cell', 'Table.HeaderCell'],
        isRequired: true,
        description: 'Cell slot.',
      },
      color: {
        ...BOX_META.Box.props.color,
        description: 'Color applied to every cell.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        description: 'Color tone applied to every cell.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      textAlign: TABLE_META.props.textAlign,
    },
  } as ComponentMeta<TableRowProps>,
  TableHeaderRow: {
    overview: {
      bundle: 'core',
      name: 'Table.HeaderRow?',
      title: 'Represents a row within Table.Head for organizing header cells.',
      guidelines: ["should be use within Table.Head to group header cells and define the table's column labels."],
      composedOf: ['Box'],
      topLevelTags: ['tr'],
      slots: ['Table.HeaderCell'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        options: ['Table.HeaderCell'],
        isRequired: true,
        description: 'Cell slot.',
      },
      color: {
        ...BOX_META.Box.props.color,
        description: 'Color applied to every cell.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        description: 'Color tone applied to every cell.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      textAlign: TABLE_META.props.textAlign,
    },
  } as ComponentMeta<TableHeaderRowProps>,
  TableCell: {
    overview: {
      bundle: 'core',
      name: 'Table.Cell',
      title: 'Represents a single cell within a table row.',
      guidelines: ['should be used inside Table.Row'],
      composedOf: ['Box'],
      topLevelTags: ['td'],
    },
    props: {
      blockSize: BOX_META.Box.props.blockSize,
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      color: BOX_META.Box.props.color,
      colSpan: {
        options: ['number'],
        description: 'Specifies how many columns the cell should span across within a table row.',
      },
      intent: BOX_META.Box.props.intent,
      maxInlineSize: BOX_META.Box.props.maxInlineSize,
      minInlineSize: BOX_META.Box.props.minInlineSize,
      rowSpan: {
        options: ['number'],
        description: 'Specifies how many rows the cell should span vertically within the table.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      textAlign: BOX_META.Box.props.textAlign,
    },
  } as ComponentMeta<TableCellProps>,
  TableHeaderCell: {
    overview: {
      bundle: 'core',
      name: 'Table.HeaderCell?',
      title: 'Represents a single header cell.',
      guidelines: ['can be used inside Table.Row or Table.HeaderRow'],
      composedOf: ['Box'],
      topLevelTags: ['th'],
    },
    props: {
      blockSize: BOX_META.Box.props.blockSize,
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      color: BOX_META.Box.props.color,
      colSpan: {
        options: ['number'],
        description: 'Specifies how many columns the cell should span across within a table row.',
      },
      intent: BOX_META.Box.props.intent,
      maxInlineSize: BOX_META.Box.props.maxInlineSize,
      minInlineSize: BOX_META.Box.props.minInlineSize,
      rowSpan: {
        options: ['number'],
        description: 'Specifies how many rows the cell should span vertically within the table.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      textAlign: BOX_META.Box.props.textAlign,
    },
  } as ComponentMeta<TableHeaderCellProps>,
}
