import { Control, FieldPath, useController, FieldValues } from 'react-hook-form'

import { BasicInputFile } from '../BasicInputFile'

type InputFileControlProps<FORM_TYPE extends FieldValues> = {
  name: FieldPath<FORM_TYPE>
  control: Control<FORM_TYPE>
}

export const InputFileControl = <FORM_TYPE extends FieldValues>({
  name,
  control,
}: InputFileControlProps<FORM_TYPE>) => {
  const { field } = useController({
    name,
    control,
  })

  return (
    <BasicInputFile
      inputRef={field.ref}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value as string}
    />
  )
}
