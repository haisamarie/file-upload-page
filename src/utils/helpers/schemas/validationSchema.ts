import { z } from 'zod'
export const loginSchema = z.object({
  email: z.string().trim().min(1, { message: '必須項目です。' }),
  password: z
    .string()
    .min(6, { message: 'パスワードは6文字以上で入力してください' }) // 最小長を6に設定
    .max(20, { message: 'パスワードは20文字以内で入力してください' }), // 最大長を20に設定（必要に応じて調整）
})
