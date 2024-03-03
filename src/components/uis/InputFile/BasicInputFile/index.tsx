import styles from './styles.module.scss'

export const BasicInputFile = (): JSX.Element => {
  return (
    <div className={styles['wrap']}>
      <div className={styles['file-wrap']}>
        <p className={styles['text']}>
          ※ファイルを選択するかドラックアンドドロップしてください
        </p>
        <input className={styles['input-file']} name='imageURL' />
        <input type='file' className='input-file' />
      </div>
      <p className={styles['note']}>※1ファイルの最大サイズは50MBです</p>
    </div>
  )
}
