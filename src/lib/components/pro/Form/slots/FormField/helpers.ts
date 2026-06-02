import { FormFieldProps } from 'lib/index.pro'

import { EMAIL_REGEX } from './definitions'

export const getRulesObject = ({ options, required, minLength, maxLength, email }: Partial<FormFieldProps>) => {
  const rules = {} as any

  if (required) {
    rules.required = typeof required === 'boolean' ? 'is required' : required
  }

  if (
    minLength !== undefined &&
    ((typeof minLength === 'number' && minLength > 0) || (typeof minLength === 'object' && minLength.value > 0))
  ) {
    rules.minLength = {
      value: typeof minLength === 'number' ? minLength : minLength.value,
      message: typeof minLength === 'object' ? minLength.message : 'is too short',
    }
  }

  if (
    maxLength !== undefined &&
    ((typeof maxLength === 'number' && maxLength > 0) || (typeof maxLength === 'object' && maxLength.value > 0))
  ) {
    rules.maxLength = {
      value: typeof maxLength === 'number' ? maxLength : maxLength.value,
      message: typeof maxLength === 'object' ? maxLength.message : 'is too long',
    }
  }

  Object.assign(rules, options)

  rules.validate = {
    ...(email
      ? {
          email: (value: string) => EMAIL_REGEX.test(value) || (typeof email === 'boolean' ? 'has wrong format' : email),
        }
      : {}),
    ...(options?.validate ?? {}),
  }

  return rules
}
