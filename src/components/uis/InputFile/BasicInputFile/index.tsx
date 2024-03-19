import React, { useRef, useState } from 'react'

import styles from './styles.module.scss'

export const BasicInputFile = (): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string>('')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files
    if (fileList && fileList.length > 0) {
      const uploadedFile = fileList[0]
      setFileName(uploadedFile.name)
    }
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileRemove = () => {
    setFileName('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }
  return (
    <div className={styles['wrap']}>
      <div className={styles['file-wrap']}>
        <p className={styles['text']}>
          ※ファイルを選択するかドラックアンドドロップしてください
        </p>
        <input
          ref={fileInputRef}
          type='file'
          className={styles['input-file']}
          onChange={handleFileChange}
        />
        <button className={styles['file-button']} onClick={handleButtonClick}>
          ファイルを選択
        </button>
      </div>
      <p className={styles['note']}>※1ファイルの最大サイズは50MBです</p>

      <div className={styles['file-up-wrap']}>
        {fileName ? (
          <>
            <span>{fileName}</span>
            <button onClick={handleFileRemove} className={styles['remove-button']}>
              ×
            </button>
          </>
        ) : (
          <span className={styles['default-file-text']}>ファイルを選択してください</span>
        )}
      </div>
    </div>
  )
}
