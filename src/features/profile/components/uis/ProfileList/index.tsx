import styles from './styles.module.scss'

export interface UserItem {
  term: string
  description: string
}
interface profileProps {
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
