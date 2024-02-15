import { Control, FieldPath, useController, FieldValues } from 'react-hook-form'

import { BasicInput } from '../BasicInput'

type InputControlProps<FORM_TYPE extends FieldValues> = {
  name: FieldPath<FORM_TYPE>
  control: Control<FORM_TYPE>
  type: 'email' | 'text' | 'password'
  placeholder: string
}

export const InputControl = <FORM_TYPE extends FieldValues>({
  name,
  control,
  type,
  placeholder,
}: InputControlProps<FORM_TYPE>): React.ReactElement => {
  const { field } = useController({
    name,
    control,
  })

  return (
    <BasicInput
      inputRef={field.ref}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value as string}
      type={type}
      placeholder={placeholder}
    />
  )
}
