import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { VirtualizedList } from 'lib/components'

import { ListItem } from './ListItem'

const DATA = Array.from({ length: 200 }, (v, k) => ({ id: k + 1, label: `Item ${k + 1}` }))

export const VirtualizedListPage = () => {
  return (
    <PlaygroundConfigurator>
      <PlaygroundScenario props>
        <VirtualizedList
          data={DATA}
          renderItem={({ item, isHighlighted }) => (
            <ListItem label={item.label} className={isHighlighted && 'highlighted'} />
          )}
        />
      </PlaygroundScenario>
      <PlaygroundScenario title="Custom visibleItemsCount value" props>
        <VirtualizedList
          data={DATA}
          renderItem={({ item, isHighlighted }) => (
            <ListItem label={item.label} className={isHighlighted && 'highlighted'} />
          )}
          visibleItemsCount={5}
        />
      </PlaygroundScenario>
      <PlaygroundScenario title="Custom itemHeight value" props>
        <VirtualizedList
          data={DATA}
          renderItem={({ item, isHighlighted }) => (
            <ListItem label={item.label} className={isHighlighted && 'highlighted'} />
          )}
          visibleItemsCount={5}
          itemHeight={40.5}
        />
      </PlaygroundScenario>
      <PlaygroundScenario title="Custom selectedItemIndex" props>
        <VirtualizedList
          data={DATA}
          renderItem={({ item, isHighlighted }) => (
            <ListItem label={item.label} className={isHighlighted && 'highlighted'} />
          )}
          visibleItemsCount={5}
          itemHeight={40.5}
          selectedItemIndex={99}
        />
      </PlaygroundScenario>
      <PlaygroundScenario title="Data field value as React key" props>
        <VirtualizedList
          data={DATA}
          renderItem={({ item, isHighlighted }) => (
            <ListItem label={item.label} className={isHighlighted && 'highlighted'} />
          )}
          visibleItemsCount={5}
          itemHeight={40.5}
          itemKeyFieldName="id"
        />
      </PlaygroundScenario>
      <PlaygroundScenario title="No need for scrollbar" props>
        <VirtualizedList
          data={DATA.slice(0, 5)}
          renderItem={({ item, isHighlighted }) => (
            <ListItem label={item.label} className={isHighlighted && 'highlighted'} />
          )}
          visibleItemsCount={5}
          itemHeight={40.5}
          itemKeyFieldName="id"
        />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
