import { z } from 'zod'

const PDF_TYPE = 'application/pdf'
const FILE_SIZE_LIMIT = 500_000

export const FileSchema = z.object({
  fileName: z
    .string()
    .trim()
    .min(1, 'ファイル名は必須項目です')
    .max(50, 'ファイル名は50文字以内で入力してください'),
  memo: z.string().max(500, '備考は500文字以内で入力してください'),
  file: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, {
      message: 'ファイルの添付は必須です',
    })
    .refine(
      (files) =>
        Array.from(files).every(
          (file) => file instanceof File && file.size < FILE_SIZE_LIMIT,
        ),
      {
        message: `添付できるファイルは${FILE_SIZE_LIMIT / 1000000}MBまでです`,
      },
    )
    .refine((files) => Array.from(files).every((file) => file.type === PDF_TYPE), {
      message: '添付できるファイルはPDF形式のみです',
    }),
})
