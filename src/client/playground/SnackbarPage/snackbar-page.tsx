import { sentenceCase } from 'change-case'

import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { Button, FlexContainer, useSnackbar } from 'lib/components'
import { SnackbarVariants } from 'lib/enums'

export const SnackbarPage = () => {
  const { displaySnackbar } = useSnackbar()

  return (
    <PlaygroundConfigurator>
      {Object.values(SnackbarVariants).map(variant => (
        <PlaygroundScenario key={variant} title={sentenceCase(variant)}>
          <FlexContainer justifyContent="center">
            <Button
              surfaceProps={{ size: 's' }}
              nativeButtonProps={{
                onClick: () => displaySnackbar(`This is ${variant} message.`, variant),
                style: { width: 'auto' },
              }}
            >
              Open snackbar
            </Button>
          </FlexContainer>
        </PlaygroundScenario>
      ))}
    </PlaygroundConfigurator>
  )
}
