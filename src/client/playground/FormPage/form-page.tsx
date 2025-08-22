import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { Form, FormFields, FormField, Button, FlexGroup } from 'lib/components'

export const FormPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']}>
      <PlaygroundScenario title="Fields" props>
        <Form
          config={{
            defaultValues: {
              input: '',
              textarea: '',
              fileInput: '',
              pinInput: undefined,
              select: '',
              autoComplete: '',
              dateSelect: { year: '', month: '', day: '' },
              scale: [],
              numberPicker: 0,
              checkBox: false,
              checkBoxGroup: [],
            },
          }}
          handleSubmit={form => {
            console.log(form.getValues())
            return Promise.resolve()
          }}
        >
          {({ formContext: { reset }, size, disabled }) => {
            return (
              <>
                <FormFields size={size} disabled={disabled}>
                  <FormField
                    name="input"
                    componentName="Input"
                    label="Input"
                    validation={{ required: true }}
                  />
                  <FormField
                    name="textarea"
                    componentName="Textarea"
                    label="Textarea"
                    validation={{ required: true }}
                  />
                  <FormField
                    name="fileInput"
                    componentName="FileInput"
                    label="FileInput"
                    validation={{ required: true }}
                  />
                  <FormField
                    name="pinInput"
                    componentName="PinInput"
                    label="Pin input"
                    validation={{ required: true }}
                  />
                  <FormField
                    name="select"
                    componentName="Select"
                    componentProps={{
                      options: [
                        { value: 'option-1', text: 'Option 1' },
                        { value: 'option-2', text: 'Option 2' },
                        { value: 'option-3', text: 'Option 3' },
                      ],
                    }}
                    label="Select"
                    validation={{ required: true }}
                  />
                  <FormField
                    name="autoComplete"
                    componentName="Autocomplete"
                    componentProps={{
                      options: [
                        { value: 'option-1', text: 'Option 1' },
                        { value: 'option-2', text: 'Option 2' },
                        { value: 'option-3', text: 'Option 3' },
                      ],
                    }}
                    label="Autocomplete"
                    validation={{ required: true }}
                  />
                  <FormField
                    name="dateSelect"
                    componentName="DateSelect"
                    label="Dateselect"
                    validation={{ required: true }}
                  />
                  <FormField
                    name="toggleGroup"
                    componentName="ToggleGroup"
                    componentProps={{
                      options: [
                        { value: '1', buttonProps: { children: 'Button 1' } },
                        { value: '2', buttonProps: { children: 'Button 2' } },
                        { value: '3', buttonProps: { children: 'Button 3' } },
                        { value: '4', buttonProps: { children: 'Button 4' } },
                        { value: '5', buttonProps: { children: 'Button 5' } },
                      ],
                    }}
                    label="Button select"
                    validation={{ required: true }}
                  />
                  <FormField
                    name="scale"
                    componentName="Scale"
                    componentProps={{
                      options: [
                        { value: '1', text: '1' },
                        { value: '2', text: '2' },
                        { value: '3', text: '3' },
                        { value: '4', text: '4' },
                        { value: '5', text: '5' },
                      ],
                    }}
                    label="Scale"
                    validation={{ required: true }}
                  />
                  <FormField
                    name="numberPicker"
                    componentName="NumericStepper"
                    componentProps={{
                      defaultValue: 0,
                      min: -10,
                      max: 10,
                    }}
                    label="Numberpicker"
                  />
                  <FormField
                    name="checkBox"
                    componentName="Checkbox"
                    componentProps={{
                      label: 'Option',
                    }}
                    label="Checkbox"
                    validation={{ required: true }}
                  />
                  <FormField
                    name="checkBoxGroup"
                    componentName="CheckboxGroup"
                    componentProps={{
                      options: [
                        { value: 'option-1', text: 'Option 1' },
                        { value: 'option-2', text: 'Option 2' },
                      ],
                    }}
                    label="Checkbox group"
                    validation={{ required: true }}
                  />
                </FormFields>
                <FlexGroup flexContainerProps={{ stack: 'mobile' }} size={size} disabled={disabled}>
                  <Button surfaceProps={{ backgroundColor: 'blue-4' }} nativeButtonProps={{ type: 'submit' }}>
                    Submit
                  </Button>
                  <Button nativeButtonProps={{ onClick: () => reset() }}>Clear</Button>
                </FlexGroup>
              </>
            )
          }}
        </Form>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
