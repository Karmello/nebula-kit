import { BOX_META } from 'lib/components/core/Box/meta'
import { DEFAULT_BUTTON_INTENT } from 'lib/components/core/Button/constants'
import { BUTTON_META } from 'lib/components/core/Button/meta'
import { FLEX_META } from 'lib/components/core/Flex/meta'
import { TEXT_META } from 'lib/components/core/Text/meta'
import { TITLE_META } from 'lib/components/core/Title/meta'
import { Checkbox, Input, Select } from 'lib/index.core'
import {
  Autocomplete,
  Form,
  FormActionButtonProps,
  FormActionsProps,
  FormFieldProps,
  FormFieldsProps,
  FormHintProps,
  FormLabelProps,
  FormProps,
  MultiSelect,
  Switch,
} from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_FORM_ALIGN_ITEMS,
  DEFAULT_FORM_COLUMN_GAP,
  DEFAULT_FORM_FLEX_DIRECTION,
  DEFAULT_FORM_ROW_GAP,
} from './definitions'
import {
  DEFAULT_FORM_ACTION_SUBMIT_BUTTON_INTENT,
  DEFAULT_FORM_ACTIONS_GAP,
  DEFAULT_FORM_FIELD_FLEX,
  DEFAULT_FORM_FIELDS_ALIGN_ITEMS,
  DEFAULT_FORM_FIELDS_COLUMN_GAP,
  DEFAULT_FORM_FIELDS_FLEX_DIRECTION,
  DEFAULT_FORM_FIELDS_ROW_GAP,
  DEFAULT_FORM_HINT_INTENT,
  DEFAULT_FORM_LABEL_INTENT,
} from './slots'

export const FORM_META = {
  Form: {
    overview: {
      bundle: 'pro',
      title: 'Composable form container with layout and submission orchestration, built on React Hook Form.',
      features: [
        'coordinates layout between form sections and actions',
        'manages form state and validation using React Hook Form internally',
        'orchestrates the submission lifecycle via valid and invalid submission handlers',
      ],
      composedOf: ['Flex', 'Flex.Item'],
      exposedTags: ['form'],
      slots: ['Form.Fields', 'Form.Actions'],
    },
    props: {
      alignItems: {
        ...FLEX_META.Flex.props.alignItems,
        defaultValue: String(DEFAULT_FORM_ALIGN_ITEMS),
      },
      children: {
        ...FLEX_META.FlexItem.props.children,
        options: ['Form.Fields', 'Form.Actions'],
        isRequired: true,
        description: 'Available slots.',
      },
      columnGap: {
        ...FLEX_META.Flex.props.columnGap,
        defaultValue: String(DEFAULT_FORM_COLUMN_GAP),
      },
      flexDirection: {
        ...FLEX_META.Flex.props.flexDirection,
        defaultValue: String(DEFAULT_FORM_FLEX_DIRECTION),
      },
      flexWrap: FLEX_META.Flex.props.flexWrap,
      gap: FLEX_META.Flex.props.gap,
      justifyContent: FLEX_META.Flex.props.justifyContent,
      minLoadingTime: {
        options: ['number'],
        description:
          'Sets the minimum time (in milliseconds) that the form stays in a loading state. Useful to avoid flickering when requests resolve instantly. Around 500ms tends to provide the smoothest UX.',
      },
      onInvalidSubmission: {
        options: ['(errors, event) => void'],
        description: 'Callback fired when validation fails, receiving the field errors.',
      },
      onResponse: {
        options: ['(response, formContext) => void'],
        description:
          'Called once the submission cycle finishes. The "response" argument contains whatever "onValidSubmission" returned or threw and is typed as unknown so consumers may cast it as needed.',
      },
      onValidSubmission: {
        options: ['(values, event) => void'],
        description:
          'Callback fired when form data passes validation, receiving the validated values. Return a Promise to run asynchronous actions like API calls. The form will wait for the Promise to resolve or reject before continuing and then call the "onResponse" callback.',
      },
      resetOnSuccess: {
        options: ['boolean'],
        defaultValue: 'false',
        description: 'Resets the form back to its initial default values after a successful submission.',
      },
      rowGap: {
        ...FLEX_META.Flex.props.rowGap,
        defaultValue: String(DEFAULT_FORM_ROW_GAP),
      },
      tagAttrs: FLEX_META.Flex.props.tagAttrs,
      tagRef: FLEX_META.Flex.props.tagRef,
      useFormProps: {
        options: ['UseFormProps (RHF)'],
        description: 'Passes configuration options directly to RHF useForm.',
      },
    },
    examples: [
      {
        code: `<Form
  onValidSubmission={data => {
    console.log(data)
  }}
>
  <Form.Fields>
    <Form.Field name="firstName">
      <Input />
    </Form.Field>
    <Form.Field name="gender">
      <Select>
        <Select.Option value="male">Male</Select.Option>
        <Select.Option value="female">Female</Select.Option>
      </Select>
    </Form.Field>
  </Form.Fields>
  <Form.Actions>
    <Form.ActionButton type="submit">Submit</Form.ActionButton>
    <Form.ActionButton type="reset">Reset</Form.ActionButton>
  </Form.Actions>
</Form>`,
        skip: true,
      },
      {
        jsx: (
          <Form onValidSubmission={null}>
            <Form.Fields>
              <Form.Field name="firstName" label="First name" hint="This will appear on your public profile.">
                <Input />
              </Form.Field>
              <Form.Field name="gender" label="Gender" hint="Used for profile personalization.">
                <Select>
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                </Select>
              </Form.Field>
              <Form.Field name="country" label="Country">
                <Autocomplete>
                  <Autocomplete.Option value="PL" label="Poland">
                    Poland
                  </Autocomplete.Option>
                  <Autocomplete.Option value="UK" label="United Kingdom">
                    United Kingdom
                  </Autocomplete.Option>
                  <Autocomplete.Option value="DE" label="Germany">
                    Germany
                  </Autocomplete.Option>
                  <Autocomplete.Option value="US" label="United States">
                    United States
                  </Autocomplete.Option>
                  <Autocomplete.Option value="FR" label="France">
                    France
                  </Autocomplete.Option>
                </Autocomplete>
              </Form.Field>
              <Form.Field name="interests" label="Interests">
                <MultiSelect>
                  <MultiSelect.Option value="music">Music</MultiSelect.Option>
                  <MultiSelect.Option value="film">Film</MultiSelect.Option>
                  <MultiSelect.Option value="politics">Politics</MultiSelect.Option>
                  <MultiSelect.Option value="sport">Sport</MultiSelect.Option>
                  <MultiSelect.Option value="technology">Technology</MultiSelect.Option>
                </MultiSelect>
              </Form.Field>
              <Form.Field name="newsletter" label="Subscribe to a newsletter">
                <Switch />
              </Form.Field>
              <Form.Field name="verified" label="I am not a robot">
                <Checkbox />
              </Form.Field>
            </Form.Fields>
            <Form.Actions flexDirection={{ base: 'column', md: 'row' }} alignItems="stretch">
              <Form.ActionButton type="submit">Submit</Form.ActionButton>
              <Form.ActionButton type="reset">Reset</Form.ActionButton>
              <Form.ActionButton type="clear">Clear</Form.ActionButton>
            </Form.Actions>
          </Form>
        ),
        description:
          'Mobile-first form with vertically stacked fields and responsive action buttons that align horizontally on wider screens.',
      },
      {
        jsx: (
          <Form
            onValidSubmission={null}
            useFormProps={{ defaultValues: { engine: 'google' } }}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Form.Fields flexDirection={{ base: 'column', md: 'row' }}>
              <Form.Field name="engine">
                <Select>
                  <Select.Option value="google">Google</Select.Option>
                  <Select.Option value="bing">Bing</Select.Option>
                  <Select.Option value="yahoo">Yahoo</Select.Option>
                </Select>
              </Form.Field>
              <Form.Field name="search" flex="4">
                <Input variant="outline" />
              </Form.Field>
            </Form.Fields>
            <Form.Actions flexDirection={{ base: 'column', md: 'row' }} alignItems="stretch">
              <Form.ActionButton type="submit">Submit</Form.ActionButton>
              <Form.ActionButton type="reset">Reset</Form.ActionButton>
              <Form.ActionButton type="clear">Clear</Form.ActionButton>
            </Form.Actions>
          </Form>
        ),
        description: 'Mobile-first form with vertically stacked fields that transition to a horizontal layout on wider screens.',
      },
    ],
    changelog: {
      '0.10.0': [
        'removed `display` prop',
        'removed `scale` and `textAlign` props on Form.Label and Form.Hint slots',
        'made `onValidSubmission` prop optional',
      ],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<FormProps>,
  FormFields: {
    overview: {
      bundle: 'pro',
      name: 'Form.Fields',
      title: 'Container for grouping and laying out form fields within a Form.',
      features: ['controls layout and spacing between form fields'],
      guidelines: ['expects Form.Field slots as children'],
      composedOf: ['Flex'],
      exposedTags: ['div'],
      slots: ['Form.Field'],
    },
    props: {
      ...BOX_META.Box.props,
      alignContent: FLEX_META.Flex.props.alignContent,
      alignItems: {
        ...FLEX_META.Flex.props.alignItems,
        defaultValue: String(DEFAULT_FORM_FIELDS_ALIGN_ITEMS),
      },
      children: {
        ...FLEX_META.Flex.props.children,
        options: ['Form.Field'],
        description: 'Any number of Form.Field slots.',
      },
      columnGap: {
        ...FLEX_META.Flex.props.columnGap,
        defaultValue: String(DEFAULT_FORM_FIELDS_COLUMN_GAP),
      },
      flexDirection: {
        ...FLEX_META.Flex.props.flexDirection,
        defaultValue: String(DEFAULT_FORM_FIELDS_FLEX_DIRECTION),
      },
      flexWrap: FLEX_META.Flex.props.flexWrap,
      gap: FLEX_META.Flex.props.gap,
      justifyContent: FLEX_META.Flex.props.justifyContent,
      rowGap: {
        ...FLEX_META.Flex.props.rowGap,
        defaultValue: String(DEFAULT_FORM_FIELDS_ROW_GAP),
      },
      tagAttrs: FLEX_META.Flex.props.tagAttrs,
      tagRef: FLEX_META.Flex.props.tagRef,
    },
  } satisfies ComponentMeta<FormFieldsProps>,
  FormActions: {
    overview: {
      bundle: 'pro',
      name: 'Form.Actions',
      title: 'Container for form action elements such as submit and secondary buttons.',
      features: ['controls layout and alignment of form action elements independently from form fields'],
      composedOf: ['Flex'],
      exposedTags: ['div'],
      slots: ['Form.ActionButton'],
    },
    props: {
      ...BOX_META.Box.props,
      alignContent: FLEX_META.Flex.props.alignContent,
      alignItems: FLEX_META.Flex.props.alignItems,
      children: {
        ...FLEX_META.Flex.props.children,
        options: ['Form.ActionButton'],
        description: 'Action button slots.',
      },
      columnGap: FLEX_META.Flex.props.columnGap,
      flexDirection: FLEX_META.Flex.props.flexDirection,
      flexWrap: FLEX_META.Flex.props.flexWrap,
      gap: {
        ...FLEX_META.Flex.props.gap,
        defaultValue: String(DEFAULT_FORM_ACTIONS_GAP),
      },
      justifyContent: FLEX_META.Flex.props.justifyContent,
      rowGap: FLEX_META.Flex.props.rowGap,
      tagAttrs: FLEX_META.Flex.props.tagAttrs,
      tagRef: FLEX_META.Flex.props.tagRef,
    },
  } satisfies ComponentMeta<FormActionsProps>,
  FormField: {
    overview: {
      bundle: 'pro',
      name: 'Form.Field',
      title: 'Container for a single form field and its associated metadata.',
      features: [
        'manages field registration and value control using React Hook Form',
        'provides shorthand props for common validation rules',
        'automatically associates labels and controls for accessibility based on the "name" prop',
        'exposes Flex.Item props for per-field layout control',
      ],
      composedOf: ['Flex.Item'],
      exposedTags: ['div'],
      slots: ['Form.Label', 'Form.Hint'],
    },
    props: {
      ...BOX_META.Box.props,
      alignSelf: FLEX_META.FlexItem.props.alignSelf,
      children: {
        ...FLEX_META.FlexItem.props.children,
        description: 'Form field component like Input or Select.',
      },
      email: {
        options: ['boolean', 'string'],
        description:
          'Enables email format validation. Pass true to use the built-in validation message or a string to provide a custom one.',
      },
      flex: {
        ...FLEX_META.FlexItem.props.flex,
        defaultValue: String(DEFAULT_FORM_FIELD_FLEX),
        description:
          'Shorthand for flex-grow, flex-shrink and flex-basis. Defaults to 1 to allow fields to expand and fill available space.',
      },
      flexBasis: FLEX_META.FlexItem.props.flexBasis,
      flexGrow: FLEX_META.FlexItem.props.flexGrow,
      flexShrink: FLEX_META.FlexItem.props.flexShrink,
      hint: {
        options: ['string'],
        description: 'Text used to render hint when no custom Form.Hint slot is defined. Acts as a shorthand for simple hints.',
      },
      label: {
        options: ['string'],
        description:
          'Text used to render label when no custom Form.Label slot is defined. Acts as a shorthand for simple labels.',
      },
      maxLength: {
        options: ['number', '{ value: number; message: string }'],
        description:
          'Sets the maximum allowed length for the field value. Pass a number to use the built-in validation message or an object with value and message for a custom one.',
      },
      minLength: {
        options: ['number', '{ value: number; message: string }'],
        description:
          'Sets the minimum allowed length for the field value. Pass a number to use the built-in validation message or an object with value and message for a custom one.',
      },
      name: {
        options: ['string'],
        isRequired: true,
        description: 'Field identifier mapped directly to RHF name property.',
      },
      options: {
        options: ['RegisterOptions (RHF)'],
        description: 'Validation and configuration rules mapped to RHF Controller.',
      },
      order: FLEX_META.FlexItem.props.order,
      required: {
        options: ['boolean', 'string'],
        description:
          'Marks the field as required. Pass true to use the built-in validation message or a string to provide a custom one.',
      },
      tagAttrs: FLEX_META.FlexItem.props.tagAttrs,
      tagRef: FLEX_META.FlexItem.props.tagRef,
    },
  } satisfies ComponentMeta<FormFieldProps>,
  FormActionButton: {
    overview: {
      bundle: 'pro',
      name: 'Form.ActionButton',
      title: 'Action button for form submission and related actions.',
      features: ['exposes Flex.Item props for per-button layout control'],
      guidelines: ['use the "type" prop to enable built-in behaviors such as submit, reset or clear'],
      composedOf: ['Flex.Item', 'Button'],
      exposedTags: ['button'],
    },
    props: {
      ...BOX_META.Box.props,
      alignSelf: FLEX_META.FlexItem.props.alignSelf,
      children: BUTTON_META.Button.props.children,
      color: BUTTON_META.Button.props.color,
      disabled: BUTTON_META.Button.props.disabled,
      flex: FLEX_META.FlexItem.props.flex,
      flexBasis: FLEX_META.FlexItem.props.flexBasis,
      flexGrow: FLEX_META.FlexItem.props.flexGrow,
      flexShrink: FLEX_META.FlexItem.props.flexShrink,
      iconName: BUTTON_META.Button.props.iconName,
      iconPlacement: BUTTON_META.Button.props.iconPlacement,
      intent: {
        ...BUTTON_META.Button.props.intent,
        defaultValue: `${DEFAULT_BUTTON_INTENT}, ${DEFAULT_FORM_ACTION_SUBMIT_BUTTON_INTENT} for submit`,
      },
      onClick: {
        options: ['e => void'],
        description: 'Callback fired when the button is clicked.',
      },
      order: FLEX_META.FlexItem.props.order,
      scale: BUTTON_META.Button.props.scale,
      tagAttrs: FLEX_META.FlexItem.props.tagAttrs,
      tagRef: FLEX_META.FlexItem.props.tagRef,
      type: {
        options: ['submit', 'reset', 'clear'],
        description: "Defines the button's action behavior. Do omit for custom buttons.",
      },
      variant: BUTTON_META.Button.props.variant,
    },
  } satisfies ComponentMeta<FormActionButtonProps>,
  FormLabel: {
    overview: {
      bundle: 'pro',
      name: 'Form.Label',
      title: "Custom label slot for a form field's control.",
      features: ['replaces the "label" prop on Form.Field when provided'],
      composedOf: ['Text', 'Spacer', 'Title'],
      exposedTags: ['label'],
    },
    props: {
      bold: TEXT_META.Text.props.bold,
      children: TEXT_META.Text.props.children,
      color: TEXT_META.Text.props.color,
      iconName: TITLE_META.Title.props.iconName,
      iconPlacement: TITLE_META.Title.props.iconPlacement,
      intent: {
        ...TEXT_META.Text.props.intent,
        defaultValue: String(DEFAULT_FORM_LABEL_INTENT),
      },
      noWrap: TEXT_META.Text.props.noWrap,
      tagAttrs: TEXT_META.Text.props.tagAttrs,
      tagRef: TEXT_META.Text.props.tagRef,
      truncate: TEXT_META.Text.props.truncate,
    },
  } satisfies ComponentMeta<FormLabelProps>,
  FormHint: {
    overview: {
      bundle: 'pro',
      name: 'Form.Hint',
      title: "Helper text slot for a form field's control.",
      features: ['replaces the "hint" prop on Form.Field when provided'],
      composedOf: ['Text', 'Spacer', 'Title'],
      exposedTags: ['span'],
    },
    props: {
      bold: TEXT_META.Text.props.bold,
      children: TEXT_META.Text.props.children,
      color: TEXT_META.Text.props.color,
      iconName: TITLE_META.Title.props.iconName,
      iconPlacement: TITLE_META.Title.props.iconPlacement,
      intent: {
        ...TEXT_META.Text.props.intent,
        defaultValue: String(DEFAULT_FORM_HINT_INTENT),
      },
      noWrap: TEXT_META.Text.props.noWrap,
      tagAttrs: TEXT_META.Text.props.tagAttrs,
      tagRef: TEXT_META.Text.props.tagRef,
      truncate: TEXT_META.Text.props.truncate,
    },
  } satisfies ComponentMeta<FormHintProps>,
}
