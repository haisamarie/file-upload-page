import { Control, FieldPath, useController, FieldValues } from 'react-hook-form'

import { BasicTextarea } from '../BasicTextarea'

type InputControlProps<FORM_TYPE extends FieldValues> = {
  name: FieldPath<FORM_TYPE>
  control: Control<FORM_TYPE>
  placeholder: string
}

export const TextareaControl = <FORM_TYPE extends FieldValues>({
  name,
  control,
  placeholder,
}: InputControlProps<FORM_TYPE>) => {
  const { field } = useController({
    name,
    control,
  })

  return (
    <BasicTextarea
      inputRef={field.ref}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value as string}
      placeholder={placeholder}
    />
  )
}
