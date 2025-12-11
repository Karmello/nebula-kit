import { useEffect, useRef } from 'react'

import META from 'client/meta'
import { Prop } from 'client/definitions'
import { Button, Form, Input, Select, Text } from 'lib/components'

import { usePlaygroundStore } from '../../use-playground-store'
import { PROPS_TO_SKIP } from '../../playground-page'

export const PropsEditor = () => {
  const isResettingRef = useRef(false)
  const resetRef = useRef<null | ((v: any) => void)>(null)
  const subscribeRef = useRef<null | any>(null)

  const { componentName, propsEditorValues, setPropsEditorValues } = usePlaygroundStore()

  useEffect(() => {
    if (!resetRef.current) return

    isResettingRef.current = true
    resetRef.current(propsEditorValues)

    requestAnimationFrame(() => {
      isResettingRef.current = false
    })
  }, [propsEditorValues])

  useEffect(() => {
    if (!subscribeRef.current) return

    let timeoutId: NodeJS.Timeout

    const unsubscribe = subscribeRef.current({
      formState: { values: true },
      callback: ({ values }: any) => {
        if (isResettingRef.current) return
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          const cleaned = Object.fromEntries(
            Object.entries(values).filter(([, v]) => v !== '' && v !== undefined)
          )
          setPropsEditorValues(cleaned)
        }, 500)
      },
    })

    return () => {
      clearTimeout(timeoutId)
      unsubscribe()
    }
  }, [setPropsEditorValues])

  if (!componentName) return null

  const componentProps = META[componentName][componentName].props

  return (
    <Form
      useFormProps={{ defaultValues: propsEditorValues }}
      onValidSubmission={() => null}
      flexDirection="column-reverse"
    >
      {({ reset, subscribe, setValue }) => {
        resetRef.current = reset
        subscribeRef.current = subscribe

        return (
          <>
            <Form.Actions>
              <Form.ActionButton type="reset" size="sm" color="blue" intent="primary">
                Reset
              </Form.ActionButton>
            </Form.Actions>

            <Form.Fields rowGap="15px">
              {Object.keys(componentProps)
                .filter(propName => !PROPS_TO_SKIP.includes(propName))
                .map(propName => {
                  const { options, propControl } = componentProps[propName as never] as Prop

                  return (
                    <Form.Field key={propName} name={propName}>
                      <Form.Label>
                        <Text scale="compact">{propName}</Text>
                      </Form.Label>
                      {propControl === 'select' ? (
                        <Select variant="outline" size="sm">
                          {options.map(option => (
                            <Select.Option key={option} value={option}>
                              {option}
                            </Select.Option>
                          ))}
                        </Select>
                      ) : (
                        <Input
                          size="sm"
                          variant={{ base: 'outline', lg: 'solid' }}
                          endSlot={
                            <Button
                              iconName="close"
                              tagAttrs={{ onClick: () => setValue(propName as never, '' as never) }}
                            />
                          }
                        />
                      )}
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
