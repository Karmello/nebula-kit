import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { Table } from 'lib/components'

import { TABLE_HEADER, TABLE_ROWS } from 'client/constants'

export const TablePage = () => {
  return (
    <PlaygroundConfigurator>
      <PlaygroundScenario title="Default" props>
        <Table
          head={{ data: [{ text: 'header cell' }] }}
          body={{ data: [{ data: [{ text: 'body cell' }] }] }}
        />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
