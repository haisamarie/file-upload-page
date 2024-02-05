import styles from './styles.module.scss'

interface pageTitleProps {
  title: string
}

export const PageTitle = ({ title }: pageTitleProps) => {
  return <h1 className={styles['page-title']}>{title}</h1>
}
