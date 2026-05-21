import { expectType, expectError } from 'tsd'

import { Tabs } from '../Tabs'

//
// basic rendering
//

expectType(
  <Tabs>
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

//
// controlled / uncontrolled
//

expectType(
  <Tabs defaultValue="a">
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

expectType(
  <Tabs value={1}>
    <Tabs.Tab value={1}>Tab A</Tabs.Tab>
    <Tabs.Panel value={1}>Panel A</Tabs.Panel>
  </Tabs>
)

expectType(
  <Tabs
    onChange={value => {
      expectType<string | number>(value)
    }}
  >
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

//
// responsive inherited props
//

expectType(
  <Tabs color={{ base: 'blue', lg: 'red' }}>
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

expectType(
  <Tabs intent={{ base: 'primary', lg: 'secondary' }}>
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

expectType(
  <Tabs variant={{ base: 'outline', lg: 'solid' }}>
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

expectType(
  <Tabs inlineSize={{ base: '100%', lg: '600px' }}>
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

//
// intentionally NON-responsive props
//

expectError(
  <Tabs orientation={{ base: 'horizontal' }}>
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

expectError(
  <Tabs size={{ base: 'sm' }}>
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

//
// enum validation
//

expectError(
  <Tabs orientation="diagonal">
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

expectError(
  <Tabs variant="ghost">
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

expectError(
  <Tabs size="2xl">
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

//
// invalid responsive breakpoint keys
//

expectError(
  <Tabs color={{ mobile: 'blue' }}>
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

//
// hidden primitive leakage
//

expectError(
  <Tabs margin="md">
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

expectError(
  <Tabs gap="md">
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

expectError(
  <Tabs flexDirection="row">
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

expectError(
  <Tabs drawable>
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

expectError(
  <Tabs tag="section">
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Panel value="a">Panel A</Tabs.Panel>
  </Tabs>
)

//
// Tabs.Tab
//

expectType(
  <Tabs.Tab value="a" align={{ base: 'center', lg: 'split' }} inlineSize={{ base: '100px', lg: '200px' }}>
    Tab
  </Tabs.Tab>
)

expectType(<Tabs.Tab value={1}>Tab</Tabs.Tab>)

//
// Tabs.Tab enum validation
//

expectError(
  <Tabs.Tab value="a" align="between">
    Tab
  </Tabs.Tab>
)

expectError(<Tabs.Tab value={false}>Tab</Tabs.Tab>)

//
// Tabs.Tab hidden Button leakage
//

expectError(
  <Tabs.Tab value="a" color="blue">
    Tab
  </Tabs.Tab>
)

expectError(
  <Tabs.Tab value="a" variant="solid">
    Tab
  </Tabs.Tab>
)

expectError(
  <Tabs.Tab value="a" intent="primary">
    Tab
  </Tabs.Tab>
)

expectError(
  <Tabs.Tab value="a" loading>
    Tab
  </Tabs.Tab>
)

expectError(
  <Tabs.Tab value="a" ripple={false}>
    Tab
  </Tabs.Tab>
)

//
// Tabs.Panel
//

expectType(<Tabs.Panel value="a">Panel</Tabs.Panel>)

expectType(<Tabs.Panel value={1}>Panel</Tabs.Panel>)

//
// Tabs.Panel hidden Box leakage
//

expectError(
  <Tabs.Panel value="a" padding="md">
    Panel
  </Tabs.Panel>
)

expectError(
  <Tabs.Panel value="a" drawable>
    Panel
  </Tabs.Panel>
)

expectError(
  <Tabs.Panel value="a" variant="solid">
    Panel
  </Tabs.Panel>
)
