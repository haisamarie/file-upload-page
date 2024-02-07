import styles from './styles.module.scss'

type pageTitleProps = {
  title: string
}

export const PageTitle = ({ title }: pageTitleProps) => {
  return <h1 className={styles['page-title']}>{title}</h1>
}
