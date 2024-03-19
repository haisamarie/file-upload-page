import { Control, FieldPath, useController, FieldValues } from 'react-hook-form'

import { BasicInputText } from '../BasicInputText'

type InputTextControlProps<FORM_TYPE extends FieldValues> = {
  name: FieldPath<FORM_TYPE>
  control: Control<FORM_TYPE>
  type: 'email' | 'text' | 'password' | 'select'
  placeholder: string
}

export const InputTextControl = <FORM_TYPE extends FieldValues>({
  name,
  control,
  type,
  placeholder,
}: InputTextControlProps<FORM_TYPE>) => {
  const { field } = useController({
    name,
    control,
  })

  return (
    <BasicInputText
      inputRef={field.ref}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value as string}
      type={type}
      placeholder={placeholder}
    />
  )
}
