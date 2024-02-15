import { z } from 'zod'
export const profileSchema = z.object({
  name: z.string().trim().min(1, { message: '必須項目です。' }),
  email: z.string().trim().min(1, { message: '必須項目です。' }),
  division: z.string().trim().min(1, { message: '必須項目です。' }),
})
