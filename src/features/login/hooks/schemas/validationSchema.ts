import { z } from 'zod'
export const loginSchema = z.object({
  email: z.string().trim().min(1, { message: '必須項目です。' }),
  password: z
    .string()
    .min(6, { message: 'パスワードは6文字以上で入力してください' })
    .max(20, { message: 'パスワードは20文字以内で入力してください' }),
})
