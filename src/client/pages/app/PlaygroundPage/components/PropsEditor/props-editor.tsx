import { useEffect, useRef } from 'react'

import META from 'client/meta'
import { Prop } from 'client/definitions'
import { Form, Input, Select, Text } from 'lib/components'

import { usePlaygroundStore } from '../../use-playground-store'

export const PropsEditor = () => {
  const { componentName, propsEditorValues, setPropsEditorValues } = usePlaygroundStore()

  if (!componentName) return null

  const componentProps = META[componentName][componentName].props

  return (
    <Form
      useFormProps={{ defaultValues: propsEditorValues }}
      onValidSubmission={() => null}
      flexDirection="column-reverse"
    >
      {({ reset, subscribe }) => {
        const isResettingRef = useRef(false)

        useEffect(() => {
          isResettingRef.current = true
          reset(propsEditorValues)
          requestAnimationFrame(() => {
            isResettingRef.current = false
          })
        }, [propsEditorValues, reset])

        useEffect(() => {
          let timeoutId: NodeJS.Timeout
          const callback = subscribe({
            formState: { values: true },
            callback: ({ values }) => {
              if (isResettingRef.current) return
              clearTimeout(timeoutId)
              timeoutId = setTimeout(() => {
                setPropsEditorValues(values)
              }, 500)
            },
          })
          return () => {
            clearTimeout(timeoutId)
            callback()
          }
        }, [subscribe, setPropsEditorValues])

        return (
          <>
            <Form.Actions>
              <Form.ActionButton type="reset" size="sm" color="blue" intent="primary">
                Reset
              </Form.ActionButton>
            </Form.Actions>
            <Form.Fields rowGap={15}>
              {Object.keys(componentProps).map(propName => {
                const { options, propControl } = componentProps[propName as never] as Prop
                return (
                  <Form.Field key={propName} name={propName}>
                    <Form.Label>
                      <Text scale="compact">{propName}</Text>
                    </Form.Label>
                    {propControl === 'input' ? (
                      <Input size="sm" variant={{ base: 'outline', lg: 'solid' }} />
                    ) : null}
                    {propControl === 'select' ? (
                      <Select variant="outline" size="sm">
                        {options.map(option => (
                          <Select.Option value={option}>{option}</Select.Option>
                        ))}
                      </Select>
                    ) : null}
                    {!propControl ? <div /> : null}
                  </Form.Field>
                )
              })}
            </Form.Fields>
          </>
        )
      }}
    </Form>
  )
}
