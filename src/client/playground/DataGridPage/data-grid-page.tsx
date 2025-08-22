import { PlaygroundArea, PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { DataGrid, Paragraph } from 'lib/components'

type DataItem = {
  text: string
}

const getData = (length: number): DataItem[] => Array.from({ length }, (v, k) => ({ text: `Item ${k + 1}` }))

const Item = ({ text }: { text: string }) => {
  return (
    <PlaygroundArea style={{ width: '100%' }}>
      <Paragraph>{text}</Paragraph>
    </PlaygroundArea>
  )
}

export const DataGridPage = () => {
  return (
    <PlaygroundConfigurator>
      <PlaygroundScenario title="Grid" props>
        <DataGrid<DataItem> type="grid" data={getData(10)} Item={Item} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Grid with centered items" props>
        <DataGrid<DataItem> type="grid" data={getData(10)} centerItems Item={Item} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Grid with stretched items" props>
        <DataGrid<DataItem> type="grid" data={getData(5)} stretchItems Item={Item} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Grid with stretched items (3 in a row)" props>
        <DataGrid<DataItem> type="grid" data={getData(10)} stretchItems rowItemsNum="3" Item={Item} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Grid with stretched items (5 in a row)" props>
        <DataGrid<DataItem> type="grid" data={getData(8)} stretchItems rowItemsNum="5" Item={Item} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Grid with different gap size" props>
        <DataGrid<DataItem>
          type="grid"
          data={getData(25)}
          stretchItems
          rowItemsNum="5"
          Item={Item}
          gapSize="xl-micro"
        />
      </PlaygroundScenario>
      <PlaygroundScenario title="List" props>
        <DataGrid<DataItem> type="list" data={getData(5)} Item={Item} />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
