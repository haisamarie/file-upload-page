import { z } from 'zod'
export const FileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, '氏名は必須項目です')
    .max(20, '氏名は50文字以内で入力してください'),
})
