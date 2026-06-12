import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Table } from '../Table'

// -------------------------------------
// Table
// -------------------------------------

expectError(<Table />)

expectType(
  <Table>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

// -------------------------------------
// Table root tag restrictions
// -------------------------------------

expectError(
  <Table tag="div">
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

// -------------------------------------
// refs
// -------------------------------------

expectType(
  <Table tagRef={createRef<HTMLTableElement>()}>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

expectError(
  <Table tagRef={createRef<HTMLDivElement>()}>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

// -------------------------------------
// layout
// -------------------------------------

expectType(
  <Table layout="auto">
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

expectType(
  <Table layout="fixed">
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

expectError(
  <Table layout="wrong">
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

// -------------------------------------
// responsive props
// -------------------------------------

expectType(
  <Table inlineSize={{ md: '48px' }}>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

expectType(
  <Table textAlign={{ lg: 'center' }}>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

expectType(
  <Table paddingInline="48px" paddingBlock="10px">
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

// -------------------------------------
// color + intent
// -------------------------------------

expectType(
  <Table color="blue" intent="primary">
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

expectError(
  <Table color="wrong">
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

expectError(
  <Table intent="wrong">
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

// -------------------------------------
// props intentionally NOT exposed
// -------------------------------------

expectError(
  <Table variant="solid">
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

expectError(
  <Table borderRadius="10px">
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

expectError(
  <Table margin="10px">
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

// -------------------------------------
// Table.Header
// -------------------------------------

expectError(<Table.Header />)

expectType(
  <Table.Header>
    <Table.HeaderRow>
      <Table.HeaderCell>Header</Table.HeaderCell>
    </Table.HeaderRow>
  </Table.Header>
)

expectType(
  <Table.Header tagRef={createRef<HTMLTableSectionElement>()}>
    <Table.HeaderRow>
      <Table.HeaderCell>Header</Table.HeaderCell>
    </Table.HeaderRow>
  </Table.Header>
)

expectError(
  <Table.Header tagRef={createRef<HTMLDivElement>()}>
    <Table.HeaderRow>
      <Table.HeaderCell>Header</Table.HeaderCell>
    </Table.HeaderRow>
  </Table.Header>
)

// -------------------------------------
// Table.Body
// -------------------------------------

expectError(<Table.Body />)

expectType(
  <Table.Body>
    <Table.Row>
      <Table.Cell>Cell</Table.Cell>
    </Table.Row>
  </Table.Body>
)

expectType(
  <Table.Body intent="primary">
    <Table.Row>
      <Table.Cell>Cell</Table.Cell>
    </Table.Row>
  </Table.Body>
)

// -------------------------------------
// Table.Footer
// -------------------------------------

expectError(<Table.Footer />)

expectType(
  <Table.Footer>
    <Table.Row>
      <Table.Cell>Footer</Table.Cell>
    </Table.Row>
  </Table.Footer>
)

// -------------------------------------
// Table.Caption
// -------------------------------------

expectError(<Table.Caption />)

expectType(<Table.Caption>Caption</Table.Caption>)

expectType(<Table.Caption textAlign="center">Caption</Table.Caption>)

// -------------------------------------
// Table.Row
// -------------------------------------

expectError(<Table.Row />)

expectType(
  <Table.Row>
    <Table.Cell>Cell</Table.Cell>
  </Table.Row>
)

expectType(
  <Table.Row>
    <Table.HeaderCell>Header</Table.HeaderCell>
  </Table.Row>
)

// -------------------------------------
// Table.HeaderRow
// -------------------------------------

expectError(<Table.HeaderRow />)

expectType(
  <Table.HeaderRow>
    <Table.HeaderCell>Header</Table.HeaderCell>
  </Table.HeaderRow>
)

// -------------------------------------
// Table.Cell
// -------------------------------------

expectError(<Table.Cell />)

expectType(<Table.Cell>Cell</Table.Cell>)

expectType(
  <Table.Cell colSpan={2} rowSpan={3}>
    Cell
  </Table.Cell>
)

expectError(<Table.Cell colSpan="2">Cell</Table.Cell>)

expectError(<Table.Cell rowSpan="3">Cell</Table.Cell>)

expectType(
  <Table.Cell minInlineSize={{ md: '48px' }} maxInlineSize="300px" blockSize="100px">
    Cell
  </Table.Cell>
)

expectType(<Table.Cell textAlign="center">Cell</Table.Cell>)

expectError(<Table.Cell textAlign="wrong">Cell</Table.Cell>)

expectType(<Table.Cell tagRef={createRef<HTMLTableCellElement>()}>Cell</Table.Cell>)

// -------------------------------------
// Table.HeaderCell
// -------------------------------------

expectError(<Table.HeaderCell />)

expectType(<Table.HeaderCell>Header</Table.HeaderCell>)

expectType(
  <Table.HeaderCell colSpan={2} rowSpan={3}>
    Header
  </Table.HeaderCell>
)

expectError(<Table.HeaderCell colSpan="2">Header</Table.HeaderCell>)

expectError(<Table.HeaderCell rowSpan="3">Header</Table.HeaderCell>)

expectType(<Table.HeaderCell textAlign="center">Header</Table.HeaderCell>)

expectError(<Table.HeaderCell textAlign="wrong">Header</Table.HeaderCell>)

expectType(<Table.HeaderCell tagRef={createRef<HTMLTableCellElement>()}>Header</Table.HeaderCell>)
