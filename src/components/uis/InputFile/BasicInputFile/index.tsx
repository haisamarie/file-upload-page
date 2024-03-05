import React, { useRef } from 'react'

import styles from './styles.module.scss'

export const BasicInputFile = (): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  return (
    <div className={styles['wrap']}>
      <div className={styles['file-wrap']}>
        <p className={styles['text']}>
          ※ファイルを選択するかドラックアンドドロップしてください
        </p>
        <input ref={fileInputRef} type='file' className={styles['input-file']} />
        <button className={styles['file-button']} onClick={handleButtonClick}>
          ファイルを選択
        </button>
      </div>
      <p className={styles['note']}>※1ファイルの最大サイズは50MBです</p>
    </div>
  )
}
