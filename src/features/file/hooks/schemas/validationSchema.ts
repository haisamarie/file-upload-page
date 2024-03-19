import { z } from 'zod'
export const FileSchema = z.object({
  fileName: z
    .string()
    .trim()
    .min(1, 'ファイル名は必須項目です')
    .max(10, 'ファイル名は50文字以内で入力してください'),
  memo: z.string().max(500, '備考は500文字以内で入力してください'),
})
