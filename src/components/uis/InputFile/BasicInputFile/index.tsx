import React, { useRef, useState } from 'react'

import styles from './styles.module.scss'

export const BasicInputFile = (): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string>('')
  const [isDragging, setIsDragging] = useState<boolean>(false) // ドラッグ状態の追跡を一元化

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files
    if (fileList && fileList.length > 0) {
      const uploadedFile = fileList[0]
      setFileName(uploadedFile.name)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(false)
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const uploadedFile = event.dataTransfer.files[0]
      setFileName(uploadedFile.name)
      event.dataTransfer.clearData()
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileRemove = () => {
    setFileName('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className={styles.wrap}>
      <div
        className={`${styles['file-wrap']} ${isDragging ? styles.dragging : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p className={styles.text}>
          ※ファイルを選択するかドラックアンドドロップしてください
        </p>
        <input
          ref={fileInputRef}
          type='file'
          className={styles['input-file']}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button className={styles['file-button']} onClick={handleButtonClick}>
          ファイルを選択
        </button>
      </div>
      <p className={styles.note}>※1ファイルの最大サイズは50MBです</p>

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
