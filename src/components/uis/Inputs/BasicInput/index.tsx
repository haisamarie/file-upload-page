import styles from './styles.module.scss'

type InputProps = {
  type: string
  name: string
  placeholder: string
}

export const BasicInput = ({ type, name, placeholder, ...props }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      className={styles['input']}
      placeholder={placeholder}
      {...props}
    />
  )
}
