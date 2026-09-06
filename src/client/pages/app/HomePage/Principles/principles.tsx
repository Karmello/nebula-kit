import { Box, Button, HorizontalRule, Icon, Link, NEB_LENGTH, Spacer, Text } from 'lib/components'
import { BoxIntent } from 'lib/components/core/Box'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'

export const Principles = () => {
  const navigateTo = useNavigateTo()

  const tempIntent: BoxIntent = 'secondary'

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: '1fr' }}
        gap={NEB_LENGTH.px_032}
      >
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            alignItems="center"
            columnGap="11px"
          >
            <Icon name="code" color="green" intent="secondary" size="22px" />
            <Text typography="h5" bold color="green" intent={tempIntent}>
              JSX first
            </Text>
          </Box>
          <HorizontalRule
            color="green"
            marginTop={NEB_LENGTH.px_004}
            marginBottom={NEB_LENGTH.px_008}
          />
          <Text intent="neutral">
            JSX is the primary development flow. Styling happens through structured props instead of
            constant CSS authoring, while preserving familiar CSS concepts underneath.
          </Text>
        </Box>
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            alignItems="center"
            columnGap="11px"
          >
            <Icon name="rectangle-circle" color="green" intent="secondary" size="22px" />
            <Text typography="h5" bold color="green" intent={tempIntent}>
              Composition and inheritance
            </Text>
          </Box>
          <HorizontalRule
            color="green"
            marginTop={NEB_LENGTH.px_004}
            marginBottom={NEB_LENGTH.px_008}
          />
          <Text intent="neutral">
            Pure composition drives all component behavior. Functionality is never duplicated.
            Composed functionality flows through prop inheritance, not redefinition.
          </Text>
        </Box>
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            alignItems="center"
            columnGap="11px"
          >
            <Icon name="file-code" color="green" intent="secondary" size="22px" />
            <Text typography="h5" bold color="green" intent={tempIntent}>
              Enforcing HTML semantics
            </Text>
          </Box>
          <HorizontalRule
            color="green"
            marginTop={NEB_LENGTH.px_004}
            marginBottom={NEB_LENGTH.px_008}
          />
          <Text intent="neutral">
            Semantic HTML is part of the component contract. Components preserve structure and
            meaning by default.
          </Text>
        </Box>
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            alignItems="center"
            columnGap="11px"
          >
            <Icon name="atom" color="green" intent="secondary" size="22px" />
            <Text typography="h5" bold color="green" intent={tempIntent}>
              Orthogonal styling engine
            </Text>
          </Box>
          <HorizontalRule
            color="green"
            marginTop={NEB_LENGTH.px_004}
            marginBottom={NEB_LENGTH.px_008}
          />
          <Text intent="neutral">
            Styling concerns are separated and scoped to prevent interference. Each styling
            dimension stays isolated. Performance is a property of the architecture, not an added
            optimization.
          </Text>
        </Box>
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            alignItems="center"
            columnGap="11px"
          >
            <Icon name="paintbrush" color="green" intent="secondary" size="22px" />
            <Text typography="h5" bold color="green" intent={tempIntent}>
              Unified rendering models
            </Text>
          </Box>
          <HorizontalRule
            color="green"
            marginTop={NEB_LENGTH.px_004}
            marginBottom={NEB_LENGTH.px_008}
          />
          <Text intent="neutral">
            The mechanisms for drawing visual output and handling responsiveness are each driven by
            their own explicit model, ensuring consistent behavior across the system.
          </Text>
        </Box>
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            alignItems="center"
            columnGap="11px"
          >
            <Icon name="shield-check" color="green" intent="secondary" size="22px" />
            <Text typography="h5" bold color="green" intent={tempIntent}>
              Resistant to entropy
            </Text>
          </Box>
          <HorizontalRule
            color="green"
            marginTop={NEB_LENGTH.px_004}
            marginBottom={NEB_LENGTH.px_008}
          />
          <Text intent="neutral">
            System constraints minimize UI entropy and optimize for long-term consistency, keeping
            products stable as they grow.
          </Text>
        </Box>
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Box textAlign="center">
        <Link
          href={`${PageKey.foundations}/overview/philosophy/jsx-first`}
          onClick={() => {
            navigateTo(`${PageKey.foundations}/overview/philosophy/jsx-first`)
          }}
        >
          <Button scale="sm" color="green" intent="primary">
            Read more
          </Button>
        </Link>
      </Box>
    </>
  )
}
