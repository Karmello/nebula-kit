import { Box, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text typography="h6">Who it's for ...</Text>
      <Spacer blockSize={15} />
      <Text>NebulaKit is built for the 95% of apps that share a common structure.</Text>
      <Spacer blockSize={15} />
      <Text>
        Most software isn't a wild experiment. It's dashboards, forms, onboarding flows, settings, lists,
        tables, filters, auth screens, navigation and content. Different products, same underlying patterns.
        Those apps don't need a new UI invention every day, they need a system that keeps everything
        consistent and helps them move fast.
      </Text>
      <Spacer blockSize={15} />
      <Text>
        NebulaKit is for the teams building those apps. Teams who benefit from having a reliable foundation
        that handles spacing, layout, color, motion and interaction the same way everywhere. Teams who want to
        focus on features, not styling. Teams who know that clarity and coherence matter more than novelty.
      </Text>
      <Spacer blockSize={15} />
      <Text>
        If your project fits into the vast landscape of normal, structured, product-driven apps - NebulaKit
        was made for you.
      </Text>
      <Spacer blockSize={30} />
      <Text typography="h6">Who it's not for ...</Text>
      <Spacer blockSize={15} />
      <Text>Not every app fits into that 95%.</Text>
      <Spacer blockSize={15} />
      <Text>
        Some products live in the other 5% - the unusual ones, the experimental ones, the ones where the UI is
        the product: drawing tools, creative canvases, note-taking apps with infinite planes, animation
        editors, timeline-based interfaces, custom physics interactions, bespoke experiments.
      </Text>
      <Spacer blockSize={15} />
      <Text>
        Those apps don't need a UI system, they need a custom internal design language built specifically for
        their unique mechanics. A kit like NebulaKit would only slow them down.
      </Text>
      <Spacer blockSize={15} />
      <Text>
        NebulaKit is not for teams who want to reinvent every pattern, restyle every atom or break every
        convention. It's not for products, where novelty outweighs consistency or where the UI demands break
        completely from common structures.
      </Text>
    </Box>
  )
}
