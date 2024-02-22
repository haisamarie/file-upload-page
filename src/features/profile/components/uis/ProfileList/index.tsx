import styles from './styles.module.scss'

export type UserItem = {
  term: string
  description: string
}
type profileProps = {
  items: UserItem[]
}

export const ProfileList = ({ items }: profileProps) => {
  return (
    <>
      {items.map((item, index) => (
        <dl key={index} className={styles['wrap']}>
          <dt className={styles['caption']}>{item.term}</dt>
          <dd className={styles['text']}>{item.description}</dd>
        </dl>
      ))}
    </>
  )
}
