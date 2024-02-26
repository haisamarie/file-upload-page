import { z } from 'zod'
export const profileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, '氏名は必須項目です')
    .max(20, '氏名は20文字以内で入力してください'),
  email: z
    .string()
    .trim()
    .min(1, 'メールアドレスは必須項目です')
    .email('メールアドレスの形式が正しくありません'),
  division: z.string().trim().min(1, '事業部は必須項目です'),
})
